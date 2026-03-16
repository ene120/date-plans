import { getSession, getUser, signOut, sendMagicLink } from './auth.js';
import { getProfile, getPreferences, createPlanRequest, createCouple, updateProfile, upsertPreferences } from './api.js';
import { renderSidebar, renderMobileTabs, showToast, formatDate } from './ui.js';
import { SHEET_URL, APP_BASE_URL } from './config.js';
import { celebrate, initInteractions } from './interactions.js';

// ── Init: check auth but don't require it ──
const session = await getSession();
const isGuest = !session;

let user = null;
let profile = null;
let prefs = null;

if (!isGuest) {
  user = getUser(session);
  profile = await getProfile(user.id);

  renderSidebar('request', user);
  renderMobileTabs('request');
  document.getElementById('signOutBtn')?.addEventListener('click', signOut);

  // If logged in but no couple, redirect to dashboard for onboarding
  if (!profile?.couple_id) {
    const stored = localStorage.getItem('dateflo_pending_request');
    if (stored) {
      await handlePostSignupSubmit(JSON.parse(stored));
    } else {
      showToast('Please complete your profile setup first.', 'info');
      window.location.href = './dashboard.html';
      throw new Error('No couple');
    }
  } else {
    const stored = localStorage.getItem('dateflo_pending_request');
    if (stored) {
      await autoSubmitStored(JSON.parse(stored));
    }
  }

  // Pre fill from preferences
  prefs = profile?.couple_id ? await getPreferences(profile.couple_id) : null;
  if (prefs?.city) {
    document.getElementById('reqCity').value = prefs.city;
    document.getElementById('cityHint').textContent = 'Pre filled from your profile. Change if this date is elsewhere.';
  }
} else {
  renderMobileTabs('request');
}

// ── Toggle auth/guest submit areas ──
if (isGuest) {
  document.getElementById('authSubmitArea').classList.add('hidden');
  document.getElementById('guestSignupArea').classList.remove('hidden');
  document.getElementById('reviewPrefs').classList.add('hidden');
  document.getElementById('reviewNote').textContent = 'Create an account to submit your request. Our team will craft a personalized plan and email you when it\'s ready.';
}

// ── Form State ──
let currentPage = 1;
const totalPages = 6;
let selectedDateType = '';
let selectedTickets = '';
const selectedVibes = new Set();
const selectedActivities = new Set();
let selectedTransport = '';
// ── Date Type Selection ──
document.querySelectorAll('#dateTypeGrid .date-type-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('#dateTypeGrid .date-type-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    selectedDateType = card.dataset.type;

    // Show/hide conditional fields
    document.getElementById('eventDetails').classList.toggle('show', selectedDateType === 'event_night');
    document.getElementById('customDetails').classList.toggle('show', selectedDateType === 'custom');
  });
});

// ── Ticket Chips (single select) ──
document.querySelectorAll('#ticketChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#ticketChips .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedTickets = chip.dataset.val;
  });
});

// ── Vibe Chip Clicks ──
document.querySelectorAll('#vibeChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const vibe = chip.dataset.vibe;
    if (selectedVibes.has(vibe)) {
      selectedVibes.delete(vibe);
      chip.classList.remove('active');
    } else {
      selectedVibes.add(vibe);
      chip.classList.add('active');
    }
  });
});

// ── Activity Chip Clicks ──
document.querySelectorAll('#activityChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const activity = chip.dataset.activity;
    if (selectedActivities.has(activity)) {
      selectedActivities.delete(activity);
      chip.classList.remove('active');
    } else {
      selectedActivities.add(activity);
      chip.classList.add('active');
    }
  });
});

// ── Transport Chips (single select) ──
document.querySelectorAll('#transportChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#transportChips .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedTransport = chip.dataset.transport;
  });
});

// ── Page Navigation ──
window.nextPage = function(page) {
  // Page 1 validation
  if (currentPage === 1) {
    if (!selectedDateType) {
      showToast('Please select a date type.', 'error');
      return;
    }
    if (selectedDateType === 'event_night') {
      const eventName = document.getElementById('reqEventName').value.trim();
      if (!eventName) {
        showToast('Please tell us about the event.', 'error');
        return;
      }
    }
    if (selectedDateType === 'custom') {
      const desc = document.getElementById('reqCustomDesc').value.trim();
      if (!desc) {
        showToast('Please describe your ideal date.', 'error');
        return;
      }
    }
  }

  // Page 2 validation
  if (currentPage === 2) {
    if (selectedVibes.size === 0) {
      showToast('Please select at least one vibe.', 'error');
      return;
    }
  }

  // Page 3 validation
  if (currentPage === 3) {
    const date = document.getElementById('reqDate').value;
    const startTime = document.getElementById('reqStartTime').value;
    const city = document.getElementById('reqCity').value.trim();
    if (!date) {
      showToast('Please select a date.', 'error');
      return;
    }
    if (!startTime) {
      showToast('Please select a start time.', 'error');
      return;
    }
    if (!city) {
      showToast('Please enter a city.', 'error');
      return;
    }
  }

  // Page 4 validation
  if (currentPage === 4) {
    if (!selectedTransport) {
      showToast('Please select how you\'re getting around.', 'error');
      return;
    }
    const budget = document.getElementById('reqBudget').value;
    if (!budget) {
      showToast('Please select a budget.', 'error');
      return;
    }
  }

  if (page === 6) buildReview();

  document.getElementById('page' + currentPage).classList.remove('active');
  document.getElementById('page' + page).classList.add('active');
  currentPage = page;

  const progress = (page / totalPages) * 100;
  document.getElementById('progressFill').style.width = progress + '%';

  window.scrollTo(0, 0);
};

window.prevPage = function(page) {
  document.getElementById('page' + currentPage).classList.remove('active');
  document.getElementById('page' + page).classList.add('active');
  currentPage = page;

  const progress = (page / totalPages) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
};

// ── Label Maps ──
const dateTypeLabels = {
  dinner_drinks: 'Dinner & Drinks',
  event_night: 'Event Night',
  all_day: 'All Day Adventure',
  activity_food: 'Activity & Food',
  surprise: 'Surprise Me',
  custom: 'Custom',
};
const occasionLabels = {
  date_night: 'Date Night', anniversary: 'Anniversary',
  birthday: 'Birthday', valentines: "Valentine's Day",
  just_because: 'Just Because', first_date: 'First Date',
  proposal: 'Proposal', holiday: 'Holiday', other: 'Other'
};
const budgetLabels = {
  under_50: 'Under $50',
  '50_100': '$50 to $100',
  '100_200': '$100 to $200',
  '200_350': '$200 to $350',
  '350_plus': '$350+',
  no_limit: 'No limit',
};
const transportLabels = {
  walkable: 'Keep everything walkable (park once)',
  drive_between: 'Happy to drive between stops',
  rideshare: 'Rideshare / Uber & Lyft',
  public_transit: 'Public Transit',
  mix: 'Mix (walk some, drive some)',
};
const stageLabels = {
  dating: 'Dating', exclusive: 'Exclusive', engaged: 'Engaged',
  married: 'Married', long_term: 'Long Term'
};
const activityLabels = {
  dinner: 'Dinner', brunch: 'Brunch', cocktails: 'Cocktails / Drinks',
  coffee_dessert: 'Coffee / Dessert', live_music: 'Live Music',
  show: 'Show / Performance', outdoor: 'Outdoor Activity',
  museum: 'Museum / Gallery', spa: 'Spa / Wellness',
  scenic: 'Scenic Views', dancing: 'Dancing / Nightlife',
  shopping: 'Shopping', sports: 'Sports / Games',
  cooking_class: 'Cooking Class', wine_tasting: 'Wine / Beer Tasting',
  photo_worthy: 'Photo Worthy Spots',
};

// ── Collect form data ──
function collectFormData() {
  const data = {
    date_type: selectedDateType,
    vibes: Array.from(selectedVibes),
    activities: Array.from(selectedActivities),
    occasion: document.getElementById('reqOccasion').value,
    date: document.getElementById('reqDate').value,
    start_time: document.getElementById('reqStartTime').value,
    end_time: document.getElementById('reqEndTime').value.trim(),
    city: document.getElementById('reqCity').value.trim(),
    neighborhood: document.getElementById('reqNeighborhood').value.trim(),
    transport: selectedTransport,
    budget: document.getElementById('reqBudget').value,
    specific_spots: document.getElementById('reqSpots').value.trim(),
    things_to_avoid: document.getElementById('reqAvoid').value.trim(),
    extra_notes: document.getElementById('reqNotes').value.trim(),
    submitted_at: new Date().toISOString(),
  };

  // Event night details
  if (selectedDateType === 'event_night') {
    data.event_name = document.getElementById('reqEventName').value.trim();
    data.event_time = document.getElementById('reqEventTime').value.trim();
    data.event_venue = document.getElementById('reqEventVenue').value.trim();
    data.has_tickets = selectedTickets;
  }

  // Custom description
  if (selectedDateType === 'custom') {
    data.custom_description = document.getElementById('reqCustomDesc').value.trim();
  }

  return data;
}

// ── Build Review ──
function buildReview() {
  const vibeList = Array.from(selectedVibes).map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(', ');
  const activityList = Array.from(selectedActivities).map(a => activityLabels[a] || a).join(', ');
  const date = document.getElementById('reqDate').value;
  const startTime = document.getElementById('reqStartTime').value;
  const endTime = document.getElementById('reqEndTime').value.trim();
  const occasion = document.getElementById('reqOccasion').value;
  const city = document.getElementById('reqCity').value.trim();
  const neighborhood = document.getElementById('reqNeighborhood').value.trim();
  const budget = document.getElementById('reqBudget').value;
  const spots = document.getElementById('reqSpots').value.trim();
  const avoid = document.getElementById('reqAvoid').value.trim();
  const notes = document.getElementById('reqNotes').value.trim();

  let eventHtml = '';
  if (selectedDateType === 'event_night') {
    const eventName = document.getElementById('reqEventName').value.trim();
    const eventTime = document.getElementById('reqEventTime').value.trim();
    const eventVenue = document.getElementById('reqEventVenue').value.trim();
    eventHtml = `
      <div>
        <div class="field-label">Event</div>
        <div class="field-value">${eventName}${eventVenue ? ' at ' + eventVenue : ''}${eventTime ? ' (' + eventTime + ')' : ''}</div>
      </div>
      <div>
        <div class="field-label">Tickets</div>
        <div class="field-value">${selectedTickets === 'yes' ? 'Already have tickets' : selectedTickets === 'no' ? 'Need recommendations' : 'Not specified'}</div>
      </div>
    `;
  }

  let customHtml = '';
  if (selectedDateType === 'custom') {
    const desc = document.getElementById('reqCustomDesc').value.trim();
    customHtml = `
      <div>
        <div class="field-label">Description</div>
        <div class="field-value">${desc}</div>
      </div>
    `;
  }

  const reviewDate = document.getElementById('reviewDateDetails');
  reviewDate.innerHTML = `
    <div style="display:grid;gap:14px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div>
          <div class="field-label">Date Type</div>
          <div class="field-value">${dateTypeLabels[selectedDateType] || 'Not selected'}</div>
        </div>
        <div>
          <div class="field-label">Occasion</div>
          <div class="field-value">${occasionLabels[occasion] || 'Not specified'}</div>
        </div>
      </div>
      ${eventHtml}
      ${customHtml}
      <div>
        <div class="field-label">Vibe</div>
        <div class="field-value">${vibeList || 'Not selected'}</div>
      </div>
      ${activityList ? `
        <div>
          <div class="field-label">Activities</div>
          <div class="field-value">${activityList}</div>
        </div>
      ` : ''}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div>
          <div class="field-label">Date</div>
          <div class="field-value">${date ? formatDate(date) : 'Not set'}</div>
        </div>
        <div>
          <div class="field-label">Time</div>
          <div class="field-value">${startTime || 'Not set'}${endTime ? ' to ' + endTime : ''}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div>
          <div class="field-label">City</div>
          <div class="field-value">${city || 'Not set'}</div>
        </div>
        <div>
          <div class="field-label">Budget</div>
          <div class="field-value">${budgetLabels[budget] || 'Not specified'}</div>
        </div>
      </div>
      ${neighborhood ? `
        <div>
          <div class="field-label">Neighborhood</div>
          <div class="field-value">${neighborhood}</div>
        </div>
      ` : ''}
      <div>
        <div class="field-label">Getting Around</div>
        <div class="field-value">${transportLabels[selectedTransport] || 'Not specified'}</div>
      </div>
      ${spots ? `
        <div>
          <div class="field-label">Must Include Spots</div>
          <div class="field-value">${spots}</div>
        </div>
      ` : ''}
      ${avoid ? `
        <div>
          <div class="field-label">Things to Avoid</div>
          <div class="field-value">${avoid}</div>
        </div>
      ` : ''}
      ${notes ? `
        <div>
          <div class="field-label">Additional Notes</div>
          <div class="field-value">${notes}</div>
        </div>
      ` : ''}
    </div>
  `;

  // Saved preferences summary (only for logged in users)
  const reviewPrefs = document.getElementById('reviewPrefsDetails');
  if (!isGuest && prefs) {
    const name1 = prefs.partner1_name || 'You';
    const name2 = prefs.partner2_name || 'Partner';

    reviewPrefs.innerHTML = `
      <div style="display:grid;gap:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          <div>
            <div class="field-label">Names</div>
            <div class="field-value">${name1} & ${name2}</div>
          </div>
          <div>
            <div class="field-label">Stage</div>
            <div class="field-value">${stageLabels[prefs.relationship_stage] || 'Not set'}</div>
          </div>
        </div>
        ${prefs.food1_likes || prefs.food1_allergies ? `
          <div>
            <div class="field-label">${name1}'s Food</div>
            <div class="field-value">${[prefs.food1_likes, prefs.food1_allergies ? 'Allergies: ' + prefs.food1_allergies : ''].filter(Boolean).join('. ') || 'Not set'}</div>
          </div>
        ` : ''}
        ${prefs.food2_likes || prefs.food2_allergies ? `
          <div>
            <div class="field-label">${name2}'s Food</div>
            <div class="field-value">${[prefs.food2_likes, prefs.food2_allergies ? 'Allergies: ' + prefs.food2_allergies : ''].filter(Boolean).join('. ') || 'Not set'}</div>
          </div>
        ` : ''}
        ${prefs.accessibility ? `
          <div>
            <div class="field-label">Accessibility</div>
            <div class="field-value">${prefs.accessibility}</div>
          </div>
        ` : ''}
        ${prefs.dealbreakers ? `
          <div>
            <div class="field-label">Dealbreakers</div>
            <div class="field-value">${prefs.dealbreakers}</div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (!isGuest) {
    reviewPrefs.innerHTML = `<p class="text-soft" style="font-size:.88rem">No saved preferences yet. You can add them in Settings after submitting.</p>`;
  }
}

// ── Rate limit helpers ──
let lastGuestSendTime = 0;
const GUEST_COOLDOWN = 60000;

function friendlyError(msg) {
  if (!msg) return 'Something went wrong. Please try again.';
  const lower = msg.toLowerCase();
  if (lower.includes('rate limit') || lower.includes('too many')) {
    return 'Too many requests. Please wait a minute before trying again.';
  }
  if (lower.includes('invalid email') || lower.includes('invalid')) {
    return 'Please enter a valid email address.';
  }
  return 'Something went wrong. Please try again in a moment.';
}

// ── Guest Signup Handler ──
window.handleGuestSignup = async function() {
  const email = document.getElementById('guestEmail').value.trim();
  if (!email) {
    showToast('Please enter your email address.', 'error');
    return;
  }

  // Client side cooldown
  const now = Date.now();
  if (now - lastGuestSendTime < GUEST_COOLDOWN) {
    const wait = Math.ceil((GUEST_COOLDOWN - (now - lastGuestSendTime)) / 1000);
    showToast('Please wait ' + wait + ' seconds before requesting another link.', 'error');
    return;
  }

  const btn = document.getElementById('guestSignupBtn');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  // Save form data to localStorage
  const formData = collectFormData();
  formData.guest_email = email;
  localStorage.setItem('dateflo_pending_request', JSON.stringify(formData));

  // Send magic link, redirect back to request.html
  const { error } = await sendMagicLink(email, APP_BASE_URL + '/request.html');

  if (error) {
    showToast(friendlyError(error.message), 'error');
    btn.disabled = false;
    btn.innerHTML = 'Send Magic Link &rarr;';
    localStorage.removeItem('dateflo_pending_request');
    return;
  }

  // Show success
  lastGuestSendTime = Date.now();
  document.getElementById('guestSignupBtn').closest('.editable-section').classList.add('hidden');
  document.getElementById('guestEmailSent').classList.remove('hidden');
  document.getElementById('guestSentEmail').textContent = email;
};

// Enter key on guest email
document.getElementById('guestEmail')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') window.handleGuestSignup();
});

// ── Authenticated Submit ──
window.submitRequest = async function() {
  const btn = document.getElementById('submitRequestBtn');
  btn.disabled = true;
  btn.textContent = 'Submitting...';

  const formData = collectFormData();
  formData.preferences = prefs || {};
  formData.submitted_by = user.email;

  const { error } = await createPlanRequest(profile.couple_id, user.id, formData);

  // Google Sheets backup
  try {
    const sheetData = new FormData();
    sheetData.append('type', 'dashboard_request');
    sheetData.append('email', user.email);
    sheetData.append('data', JSON.stringify(formData));
    fetch(SHEET_URL, { method: 'POST', body: sheetData }).catch(() => {});
  } catch (e) {
    // Non critical
  }

  if (error) {
    showToast('Something went wrong. Please try again.', 'error');
    btn.disabled = false;
    btn.innerHTML = 'Submit Request &rarr;';
    return;
  }

  // Show success with celebration
  document.getElementById('page6').classList.remove('active');
  document.getElementById('pageSuccess').classList.add('active');
  document.getElementById('progressFill').style.width = '100%';
  celebrate('hearts');
};

// ── Post-signup auto submit (user just signed up, no couple yet) ──
async function handlePostSignupSubmit(storedData) {
  const guestEmail = storedData.guest_email || user.email;
  const coupleName = user.email?.split('@')[0] || 'New User';

  const { data: couple, error: coupleErr } = await createCouple(coupleName + ' & Partner', user.id);
  if (coupleErr) {
    showToast('Could not set up your profile. Please try again.', 'error');
    localStorage.removeItem('dateflo_pending_request');
    window.location.href = './dashboard.html';
    throw new Error('Couple creation failed');
  }

  await updateProfile(user.id, { display_name: coupleName });
  await upsertPreferences(couple.id, {
    partner1_name: coupleName,
    partner2_name: 'Partner',
    relationship_stage: 'dating',
    city: storedData.city || ''
  });

  // Now submit the stored request
  const formData = {
    ...storedData,
    submitted_by: user.email,
    preferences: {},
  };
  delete formData.guest_email;

  const { error } = await createPlanRequest(couple.id, user.id, formData);

  // Google Sheets backup
  try {
    const sheetData = new FormData();
    sheetData.append('type', 'dashboard_request');
    sheetData.append('email', user.email);
    sheetData.append('data', JSON.stringify(formData));
    fetch(SHEET_URL, { method: 'POST', body: sheetData }).catch(() => {});
  } catch (e) {}

  localStorage.removeItem('dateflo_pending_request');

  if (error) {
    showToast('Your account was created but we could not submit the request. Please try again from the dashboard.', 'error');
    window.location.href = './dashboard.html';
    throw new Error('Request failed');
  }

  // Show success page directly
  profile = await getProfile(user.id);
  renderSidebar('request', user);
  renderMobileTabs('request');
  document.getElementById('signOutBtn')?.addEventListener('click', signOut);

  document.querySelectorAll('.form-page').forEach(p => p.classList.remove('active'));
  document.getElementById('pageSuccess').classList.add('active');
  document.getElementById('progressFill').style.width = '100%';
  celebrate('hearts');
  showToast('Welcome to DateFlo! Your request has been submitted.');
}

// ── Auto submit for returning logged-in users with stored data ──
async function autoSubmitStored(storedData) {
  const formData = {
    ...storedData,
    submitted_by: user.email,
    preferences: prefs || {},
  };
  delete formData.guest_email;

  const { error } = await createPlanRequest(profile.couple_id, user.id, formData);

  try {
    const sheetData = new FormData();
    sheetData.append('type', 'dashboard_request');
    sheetData.append('email', user.email);
    sheetData.append('data', JSON.stringify(formData));
    fetch(SHEET_URL, { method: 'POST', body: sheetData }).catch(() => {});
  } catch (e) {}

  localStorage.removeItem('dateflo_pending_request');

  if (error) {
    showToast('Could not submit your saved request. Please try again.', 'error');
    return;
  }

  // Show success page
  document.querySelectorAll('.form-page').forEach(p => p.classList.remove('active'));
  document.getElementById('pageSuccess').classList.add('active');
  document.getElementById('progressFill').style.width = '100%';
  celebrate('hearts');
  showToast('Your date request has been submitted!');
}

// ── Init interactions ──
initInteractions();
