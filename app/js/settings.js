import { requireAuth, getUser, signOut, supabase } from './auth.js';
import { getProfile, updateProfile, getCouple, getCoupleMembers, createInvite, getPreferences, upsertPreferences } from './api.js';
import { renderSidebar, renderMobileTabs, showToast, showConfirm } from './ui.js';
import { APP_BASE_URL } from './config.js';
import { initInteractions } from './interactions.js';

// ── Init ──
const session = await requireAuth();
if (!session) throw new Error('Not authenticated');

const user = getUser(session);
const profile = await getProfile(user.id);

renderSidebar('settings', user);
renderMobileTabs('settings');
document.getElementById('signOutBtn')?.addEventListener('click', signOut);

// ── Populate Profile ──
document.getElementById('settingsName').value = profile?.display_name || '';
document.getElementById('settingsEmail').value = user.email || '';
document.getElementById('settingsPhone').value = profile?.phone || '';
document.getElementById('settingsAddress').value = profile?.address || '';

// ── Save Profile ──
document.getElementById('saveProfileBtn').addEventListener('click', async () => {
  const name = document.getElementById('settingsName').value.trim();
  const phone = document.getElementById('settingsPhone').value.trim();
  const address = document.getElementById('settingsAddress').value.trim();

  const { error } = await updateProfile(user.id, {
    display_name: name,
    phone: phone,
    address: address
  });

  if (error) {
    showToast('Could not save. Please try again.', 'error');
    return;
  }
  showToast('Profile updated!');
});

// ── Partner Section ──
async function renderPartnerSection() {
  const container = document.getElementById('partnerStatus');

  if (!profile?.couple_id) {
    container.innerHTML = `
      <p style="color:var(--text-soft);font-size:.9rem;margin-bottom:16px">
        You haven't set up a couple profile yet.
      </p>
      <a href="./dashboard.html" class="btn-primary btn-small">Set Up Profile</a>
    `;
    return;
  }

  const couple = await getCouple(profile.couple_id);
  const members = await getCoupleMembers(profile.couple_id);
  const partner = members.find(m => m.id !== user.id);

  if (partner) {
    container.innerHTML = `
      <div style="display:flex;align-items:center;gap:16px;padding:16px;background:rgba(0,184,148,.08);border:1px solid rgba(0,184,148,.2);border-radius:14px;margin-bottom:16px">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--rose),var(--rose-deep));display:flex;align-items:center;justify-content:center;color:white;font-weight:700;flex-shrink:0">
          ${(partner.display_name || partner.email || '?')[0].toUpperCase()}
        </div>
        <div>
          <div style="font-weight:600;font-size:.95rem">${partner.display_name || 'Partner'}</div>
          <div style="font-size:.82rem;color:var(--text-muted)">${partner.email || ''}</div>
        </div>
        <span class="badge badge-delivered" style="margin-left:auto">Connected</span>
      </div>
    `;
  } else {
    const inviteCode = couple?.invite_code || generateCode();

    container.innerHTML = `
      <p style="color:var(--text-soft);font-size:.9rem;margin-bottom:20px">
        Invite your partner so you both can view and manage your date plans together.
      </p>

      <div class="form-group">
        <label>Send invite via email</label>
        <div style="display:flex;gap:8px">
          <input type="email" class="form-input" id="inviteEmail" placeholder="partner@email.com" style="flex:1">
          <button class="btn-primary btn-small" id="sendInviteBtn">Send</button>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:16px;margin:20px 0;color:var(--text-muted);font-size:.8rem">
        <span style="flex:1;height:1px;background:var(--glass-border)"></span>
        or share a link
        <span style="flex:1;height:1px;background:var(--glass-border)"></span>
      </div>

      <div style="display:flex;gap:8px;align-items:center">
        <input type="text" class="form-input" id="inviteLink" value="${APP_BASE_URL}/invite.html?code=${inviteCode}" readonly style="font-size:.82rem;flex:1">
        <button class="btn-ghost btn-small" id="copyLinkBtn">Copy</button>
      </div>
      <div class="form-hint">This link expires in 7 days.</div>
    `;

    document.getElementById('sendInviteBtn')?.addEventListener('click', async () => {
      const email = document.getElementById('inviteEmail').value.trim();
      if (!email) { showToast('Enter an email address.', 'error'); return; }

      const { error } = await createInvite(profile.couple_id, user.id, email, inviteCode);
      if (error) { showToast('Could not send invite. Try again.', 'error'); return; }

      showToast(`Invite sent to ${email}!`);
    });

    document.getElementById('copyLinkBtn')?.addEventListener('click', () => {
      const link = document.getElementById('inviteLink').value;
      navigator.clipboard.writeText(link);
      showToast('Invite link copied!');
      document.getElementById('copyLinkBtn').textContent = 'Copied!';
      setTimeout(() => { document.getElementById('copyLinkBtn').textContent = 'Copy'; }, 2000);
    });
  }
}

await renderPartnerSection();

// ── Subscription ──
if (profile?.subscription_status === 'active') {
  document.getElementById('subStatus').textContent = `Active until ${profile.subscription_expires_at || 'N/A'}`;
}

// ══════════════════════════════════════════
// PREFERENCES (merged from preferences.js)
// ══════════════════════════════════════════

let prefs = {};
if (profile?.couple_id) {
  prefs = await getPreferences(profile.couple_id) || {};
}

const fieldMap = {
  viewName1: 'partner1_name',
  viewName2: 'partner2_name',
  viewStage: 'relationship_stage',
  viewCity: 'city',
  viewActivity: 'activity_level',
  viewTransport: 'transport',
  viewFood1Likes: 'food1_likes',
  viewFood1Dislikes: 'food1_dislikes',
  viewFood1Allergies: 'food1_allergies',
  viewFood2Likes: 'food2_likes',
  viewFood2Dislikes: 'food2_dislikes',
  viewFood2Allergies: 'food2_allergies',
  viewVibes: 'vibes',
  viewDealbreakers: 'dealbreakers',
  viewLoveLangs1: 'love_langs1',
  viewLoveLangs2: 'love_langs2',
  viewAccessibility: 'accessibility',
  viewNotes: 'extra_notes',
};

const labels = {
  dating: 'Dating',
  exclusive: 'Exclusive',
  engaged: 'Engaged',
  married: 'Married',
  long_term: 'Long Term',
  chill: 'Chill & Relaxed',
  moderate: 'Moderate',
  active: 'Active & Adventurous',
  car: 'Driving',
  rideshare: 'Rideshare (Uber/Lyft)',
  public: 'Public Transit',
  walking: 'Walking / Biking',
};

function populateView() {
  for (const [elId, field] of Object.entries(fieldMap)) {
    const el = document.getElementById(elId);
    if (!el) continue;
    const val = prefs[field];
    if (val && val.length > 0) {
      if (Array.isArray(val)) {
        el.textContent = val.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(', ');
      } else {
        el.textContent = labels[val] || val;
      }
    } else {
      el.textContent = field.includes('allerg') ? 'None' : 'Not set';
    }
  }

  const name1 = prefs.partner1_name || 'You';
  const name2 = prefs.partner2_name || 'Partner';

  const food1Title = document.getElementById('food1Title');
  const food2Title = document.getElementById('food2Title');
  if (food1Title) food1Title.textContent = `${name1}'s Food Preferences`;
  if (food2Title) food2Title.textContent = `${name2}'s Food Preferences`;

  const vll1 = document.getElementById('viewLoveLangs1Label');
  const vll2 = document.getElementById('viewLoveLangs2Label');
  const ell1 = document.getElementById('editLoveLangs1Label');
  const ell2 = document.getElementById('editLoveLangs2Label');
  if (vll1) vll1.textContent = `${name1}'s Love Languages`;
  if (vll2) vll2.textContent = `${name2}'s Love Languages`;
  if (ell1) ell1.textContent = `${name1}'s Love Languages`;
  if (ell2) ell2.textContent = `${name2}'s Love Languages`;
}

function populateEditFields() {
  const textMap = {
    editName1: 'partner1_name',
    editName2: 'partner2_name',
    editCity: 'city',
    editFood1Likes: 'food1_likes',
    editFood1Dislikes: 'food1_dislikes',
    editFood1Allergies: 'food1_allergies',
    editFood2Likes: 'food2_likes',
    editFood2Dislikes: 'food2_dislikes',
    editFood2Allergies: 'food2_allergies',
    editDealbreakers: 'dealbreakers',
    editLoveLangs1: 'love_langs1',
    editLoveLangs2: 'love_langs2',
    editAccessibility: 'accessibility',
    editNotes: 'extra_notes',
  };

  for (const [elId, field] of Object.entries(textMap)) {
    const el = document.getElementById(elId);
    if (el && prefs[field]) el.value = prefs[field];
  }

  const selectMap = {
    editStage: 'relationship_stage',
    editActivity: 'activity_level',
    editTransport: 'transport',
  };

  for (const [elId, field] of Object.entries(selectMap)) {
    const el = document.getElementById(elId);
    if (el && prefs[field]) el.value = prefs[field];
  }

  const vibes = prefs.vibes || [];
  document.querySelectorAll('#vibeChips .chip').forEach(chip => {
    const vibe = chip.dataset.vibe;
    if (vibes.includes(vibe)) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

populateView();
populateEditFields();

// Vibe chip clicks
document.querySelectorAll('#vibeChips .chip').forEach(chip => {
  chip.addEventListener('click', () => chip.classList.toggle('active'));
});

// Section edit/save/cancel
window.toggleEdit = function(section) {
  const el = document.getElementById('section' + section);
  el.classList.toggle('section-editing');
  populateEditFields();
};

window.cancelEdit = function(section) {
  document.getElementById('section' + section).classList.remove('section-editing');
};

window.saveSection = async function(section) {
  let updates = {};

  switch (section) {
    case 'About':
      updates = {
        partner1_name: document.getElementById('editName1').value.trim(),
        partner2_name: document.getElementById('editName2').value.trim(),
        relationship_stage: document.getElementById('editStage').value,
      };
      break;
    case 'Logistics':
      updates = {
        city: document.getElementById('editCity').value.trim(),
        activity_level: document.getElementById('editActivity').value,
        transport: document.getElementById('editTransport').value,
      };
      break;
    case 'Food1':
      updates = {
        food1_likes: document.getElementById('editFood1Likes').value.trim(),
        food1_dislikes: document.getElementById('editFood1Dislikes').value.trim(),
        food1_allergies: document.getElementById('editFood1Allergies').value.trim(),
      };
      break;
    case 'Food2':
      updates = {
        food2_likes: document.getElementById('editFood2Likes').value.trim(),
        food2_dislikes: document.getElementById('editFood2Dislikes').value.trim(),
        food2_allergies: document.getElementById('editFood2Allergies').value.trim(),
      };
      break;
    case 'Vibes':
      const selectedVibes = [];
      document.querySelectorAll('#vibeChips .chip.active').forEach(c => {
        selectedVibes.push(c.dataset.vibe);
      });
      updates = {
        vibes: selectedVibes,
        dealbreakers: document.getElementById('editDealbreakers').value.trim(),
      };
      break;
    case 'Additional':
      updates = {
        love_langs1: document.getElementById('editLoveLangs1').value.trim(),
        love_langs2: document.getElementById('editLoveLangs2').value.trim(),
        accessibility: document.getElementById('editAccessibility').value.trim(),
        extra_notes: document.getElementById('editNotes').value.trim(),
      };
      break;
  }

  const { error } = await upsertPreferences(profile.couple_id, updates);

  if (error) {
    showToast('Could not save. Please try again.', 'error');
    return;
  }

  prefs = { ...prefs, ...updates };
  populateView();
  document.getElementById('section' + section).classList.remove('section-editing');
  showToast('Preferences saved!');
};

// ── Sign Out (second button in Account Actions) ──
document.getElementById('signOutBtn2')?.addEventListener('click', signOut);

// ── Delete Account ──
document.getElementById('deleteAccountBtn')?.addEventListener('click', () => {
  showConfirm(
    'Delete Account',
    'This will permanently delete your account and all associated data. This cannot be undone.',
    async () => {
      showToast('Please contact support@dateflo.com to complete account deletion.', 'info');
      setTimeout(signOut, 2000);
    }
  );
});

// ── Helper ──
function generateCode() {
  return Array.from(crypto.getRandomValues(new Uint8Array(6)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

initInteractions();
