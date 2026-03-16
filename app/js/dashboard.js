import { requireAuth, getUser, signOut } from './auth.js';
import { getProfile, getPlans, createCouple, updateProfile, getCouple, acceptInvite, upsertPreferences, getFavorites, getPreferences, getCoupleMembers } from './api.js';
import { renderSidebar, renderMobileTabs, showToast, statusBadge, formatDate, animateCounter, initCursorGlow } from './ui.js';

// ── Init ──
const session = await requireAuth();
if (!session) throw new Error('Not authenticated');

const user = getUser(session);
const profile = await getProfile(user.id);

renderSidebar('dashboard', user);
renderMobileTabs('dashboard');

document.getElementById('signOutBtn')?.addEventListener('click', signOut);

// ── Check for stored invite code ──
const storedCode = localStorage.getItem('dateflo_invite_code');
if (storedCode && !profile?.couple_id) {
  const { error } = await acceptInvite(storedCode);
  if (!error) {
    localStorage.removeItem('dateflo_invite_code');
    showToast("You've joined your partner's profile!");
    window.location.reload();
    throw new Error('reloading');
  } else {
    localStorage.removeItem('dateflo_invite_code');
    showToast('Invite code was invalid or expired.', 'error');
  }
}

// ── Route ──
if (!profile?.couple_id) {
  showOnboarding();
} else {
  showDashboard();
}

function showOnboarding() {
  document.getElementById('onboardingSection').classList.remove('hidden');
  document.getElementById('dashboardContent').classList.add('hidden');

  if (profile?.display_name) {
    document.getElementById('onboardName1').value = profile.display_name;
  }

  if (storedCode) {
    document.getElementById('inviteCodeNotice').classList.remove('hidden');
  }

  document.getElementById('onboardBtn').addEventListener('click', async () => {
    const name1 = document.getElementById('onboardName1').value.trim();
    const name2 = document.getElementById('onboardName2').value.trim();

    if (!name1 || !name2) {
      showToast('Please enter both names.', 'error');
      return;
    }

    const btn = document.getElementById('onboardBtn');
    btn.disabled = true;
    btn.textContent = 'Setting up...';

    const coupleName = `${name1} & ${name2}`;
    const { data: couple, error } = await createCouple(coupleName, user.id);

    if (error) {
      showToast('Something went wrong. Please try again.', 'error');
      btn.disabled = false;
      btn.innerHTML = 'Create Our Profile &rarr;';
      return;
    }

    await updateProfile(user.id, { display_name: name1 });
    await upsertPreferences(couple.id, {
      partner1_name: name1,
      partner2_name: name2
    });

    showToast('Welcome to DateFlo! Your profile is set up.');
    window.location.reload();
  });
}

async function showDashboard() {
  document.getElementById('onboardingSection').classList.add('hidden');
  document.getElementById('dashboardContent').classList.remove('hidden');

  const couple = await getCouple(profile.couple_id);
  const firstName = profile?.display_name || user.email?.split('@')[0] || 'there';

  // Time based greeting
  const hour = new Date().getHours();
  let greeting = 'Good evening';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 17) greeting = 'Good afternoon';

  document.getElementById('welcomeHeading').textContent = `${greeting}, ${firstName}`;

  if (couple?.name) {
    document.getElementById('welcomeSub').textContent = `Here's everything for ${couple.name}.`;
  }

  // Load data in parallel
  const [plans, favorites, preferences, members] = await Promise.all([
    getPlans(profile.couple_id),
    getFavorites(user.id),
    getPreferences(profile.couple_id),
    getCoupleMembers(profile.couple_id)
  ]);

  // Animated stat counters
  animateCounter(document.getElementById('statPlans'), plans.length);
  animateCounter(document.getElementById('statFavorites'), favorites.length);

  const cityEl = document.getElementById('statCity');
  cityEl.textContent = preferences?.city || '\u2014';

  const partner = members.find(m => m.id !== user.id);
  document.getElementById('statPartner').textContent = partner ? 'Connected' : 'Solo';

  // Render plan cards
  const grid = document.getElementById('planGrid');

  if (plans.length === 0) {
    grid.innerHTML = `
      <a href="./request.html" class="plan-card plan-card-new">
        <div class="new-icon">✨</div>
        <h4>Request Your First Date Plan</h4>
        <p>Tell us about your perfect date.</p>
      </a>
    `;
    return;
  }

  grid.innerHTML = plans.map(plan => `
    <a href="./plan.html?id=${plan.id}" class="plan-card">
      <div class="plan-card-thumb" ${plan.thumbnail_url ? `style="background:url('${plan.thumbnail_url}') center/cover"` : ''}>
        <div class="plan-card-status">${statusBadge(plan.status)}</div>
      </div>
      <div class="plan-card-body">
        <div class="plan-card-title">${plan.title || 'Untitled Plan'}</div>
        <div class="plan-card-meta">
          ${plan.date_day ? `<span>📅 ${formatDate(plan.date_day)}</span>` : ''}
          ${plan.city ? `<span>📍 ${plan.city}</span>` : ''}
        </div>
      </div>
    </a>
  `).join('') + `
    <a href="./request.html" class="plan-card plan-card-new">
      <div class="new-icon">✨</div>
      <h4>Request Another Plan</h4>
      <p>Plan your next unforgettable date.</p>
    </a>
  `;

  // Init cursor glow on plan cards
  initCursorGlow('.plan-card:not(.plan-card-new)');
}
