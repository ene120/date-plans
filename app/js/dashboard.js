import { requireAuth, getUser, signOut } from './auth.js';
import { getProfile, getPlans, createCouple, updateProfile, getCouple, acceptInvite, upsertPreferences, getFavorites, getPreferences, getCoupleMembers } from './api.js';
import { renderSidebar, renderMobileTabs, showToast, statusBadge, formatDate, animateCounter, initCursorGlow, icon } from './ui.js';
import { initInteractions } from './interactions.js';

// ── Init ──
const session = await requireAuth();
if (!session) throw new Error('Not authenticated');

const user = getUser(session);
const profile = await getProfile(user.id);

renderSidebar('dashboard', user);
renderMobileTabs('dashboard');

document.getElementById('signOutBtn')?.addEventListener('click', signOut);

// ── Inject stat icons ──
document.getElementById('statIconPlans').innerHTML = icon('clipboard-list', 18);
document.getElementById('statIconFavs').innerHTML = icon('star', 18);
document.getElementById('statIconCity').innerHTML = icon('map-pin', 18);
document.getElementById('statIconPartner').innerHTML = icon('heart', 18);

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
      partner2_name: name2,
      relationship_stage: 'dating'
    });

    showToast('Welcome to DateFlo! Let\'s plan your first date.');
    // Redirect to request form instead of reloading dashboard
    window.location.href = './request.html';
  });
}

async function showDashboard() {
  document.getElementById('onboardingSection').classList.add('hidden');
  document.getElementById('dashboardContent').classList.remove('hidden');

  const couple = await getCouple(profile.couple_id);
  const firstName = profile?.display_name || user.email?.split('@')[0] || 'there';

  // Warm, time-based greeting
  const hour = new Date().getHours();
  let greeting, subLine;
  if (hour < 12) {
    greeting = `Good morning, ${firstName}`;
    subLine = couple?.name ? `A fresh start for ${couple.name} — what shall we plan today?` : 'Ready to plan something special?';
  } else if (hour < 17) {
    greeting = `Hey ${firstName}`;
    subLine = couple?.name ? `Here's what's happening for ${couple.name}.` : 'Let\'s make tonight unforgettable.';
  } else {
    greeting = `Good evening, ${firstName}`;
    subLine = couple?.name ? `Winding down with ${couple.name} — or just getting started?` : 'The night is young. Let\'s plan something.';
  }

  document.getElementById('welcomeHeading').textContent = greeting;
  document.getElementById('welcomeSub').textContent = subLine;

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
  const stage = preferences?.relationship_stage;
  const stageLabels = {
    dating: 'Dating', exclusive: 'Exclusive', engaged: 'Engaged',
    married: 'Married', long_term: 'Long Term'
  };
  if (partner) {
    document.getElementById('statPartner').textContent = 'Connected';
  } else {
    document.getElementById('statPartner').textContent = stageLabels[stage] || 'Dating';
  }

  // Render plan cards
  const grid = document.getElementById('planGrid');

  // SVG icons for plan card meta
  const calIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>';
  const pinIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
  const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>';

  if (plans.length === 0) {
    grid.innerHTML = `
      <a href="./request.html" class="plan-card plan-card-new tilt-card">
        <div class="new-icon">${plusIcon}</div>
        <h4>Plan your first unforgettable date</h4>
        <p>Tell us what you love — we'll handle the rest.</p>
      </a>
    `;
    initInteractions();
    return;
  }

  grid.innerHTML = plans.map(plan => `
    <a href="./plan.html?id=${plan.id}" class="plan-card tilt-card reveal">
      <div class="plan-card-thumb" ${plan.thumbnail_url ? `style="background:url('${plan.thumbnail_url}') center/cover"` : ''}>
        <div class="plan-card-status">${statusBadge(plan.status)}</div>
      </div>
      <div class="plan-card-body">
        <div class="plan-card-title">${plan.title || 'Untitled Plan'}</div>
        <div class="plan-card-meta">
          ${plan.date_day ? `<span>${calIcon} ${formatDate(plan.date_day)}</span>` : ''}
          ${plan.city ? `<span>${pinIcon} ${plan.city}</span>` : ''}
        </div>
      </div>
    </a>
  `).join('') + `
    <a href="./request.html" class="plan-card plan-card-new tilt-card reveal">
      <div class="new-icon">${plusIcon}</div>
      <h4>Ready for another adventure?</h4>
      <p>We'll craft something you'll both love.</p>
    </a>
  `;

  initCursorGlow('.plan-card:not(.plan-card-new)');
  initInteractions();
}
