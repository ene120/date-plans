import { requireAuth, getUser, signOut } from './auth.js';
import { getProfile, getEvents, joinEventByCode, leaveEvent } from './api.js';
import { renderSidebar, renderMobileTabs, showToast, showConfirm, formatDate, icon } from './ui.js';
import { initInteractions } from './interactions.js';

// ── Init ──
const session = await requireAuth();
if (!session) throw new Error('Not authenticated');

const user = getUser(session);
const profile = await getProfile(user.id);

renderSidebar('events', user);
renderMobileTabs('events');
document.getElementById('signOutBtn')?.addEventListener('click', signOut);

// ── Load Events ──
let myEvents = [];

async function loadEvents() {
  if (!profile?.id) return;

  myEvents = await getEvents(profile.id);
  renderEvents();
}

function renderEvents() {
  const container = document.getElementById('myEventsList');

  if (myEvents.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          ${icon('ticket', 24)}
        </div>
        <h3>No events yet</h3>
        <p>Enter an invite code above to join your first event.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = myEvents.map(att => {
    const event = att.events;
    if (!event) return '';

    const isPast = event.event_date && new Date(event.event_date + 'T23:59:59') < new Date();
    const statusClass = isPast ? 'badge-archived' : 'badge-delivered';
    const statusLabel = isPast ? 'Past' : 'Upcoming';

    return `
      <div class="editable-section event-card" style="margin-bottom:12px" data-event-id="${event.id}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span class="badge ${statusClass}">${statusLabel}</span>
              ${event.group_name ? `<span style="font-size:.75rem;color:var(--text-muted)">${event.group_name}</span>` : ''}
            </div>
            <h3 style="font-size:1.05rem;margin-bottom:4px;font-family:'Playfair Display',serif">${event.title || 'Untitled Event'}</h3>
            <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:.82rem;color:var(--text-muted);margin-top:6px">
              ${event.event_date ? `<span style="display:flex;align-items:center;gap:4px">${icon('calendar', 14)} ${formatDate(event.event_date)}</span>` : ''}
              ${event.city ? `<span style="display:flex;align-items:center;gap:4px">${icon('map-pin', 14)} ${event.city}</span>` : ''}
            </div>
            ${event.description ? `<p style="font-size:.85rem;color:var(--text-soft);line-height:1.6;margin-top:10px">${event.description}</p>` : ''}
          </div>
          <button class="btn-ghost btn-small leave-btn" data-id="${event.id}" style="flex-shrink:0;font-size:.76rem;padding:6px 14px">Leave</button>
        </div>
      </div>
    `;
  }).join('');

  // Leave event handlers
  container.querySelectorAll('.leave-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const eventId = btn.dataset.id;
      const eventCard = btn.closest('.event-card');
      const title = eventCard.querySelector('h3')?.textContent || 'this event';

      showConfirm(
        'Leave Event',
        `Are you sure you want to leave "${title}"? You can rejoin later with the invite code.`,
        async () => {
          const { error } = await leaveEvent(profile.id, eventId);
          if (error) {
            showToast('Could not leave event. Try again.', 'error');
            return;
          }
          showToast('You have left the event.');
          await loadEvents();
        }
      );
    });
  });
}

await loadEvents();

// ── Join Event ──
document.getElementById('joinEventBtn').addEventListener('click', handleJoin);
document.getElementById('eventCode').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleJoin();
});

async function handleJoin() {
  const codeInput = document.getElementById('eventCode');
  const code = codeInput.value.trim();
  const resultDiv = document.getElementById('joinResult');

  if (!code) {
    showToast('Please enter an invite code.', 'error');
    return;
  }

  const btn = document.getElementById('joinEventBtn');
  btn.disabled = true;
  btn.textContent = 'Joining...';
  resultDiv.innerHTML = '';

  const { data: event, error } = await joinEventByCode(profile.id, code);

  btn.disabled = false;
  btn.textContent = 'Join Event';

  if (error) {
    showToast(error.message || 'Could not join event.', 'error');
    return;
  }

  codeInput.value = '';
  showToast(`You've joined "${event.title || 'the event'}"!`);

  // Show success inline
  resultDiv.innerHTML = `
    <div style="padding:14px;background:rgba(0,184,148,.06);border:1px solid rgba(0,184,148,.15);border-radius:var(--radius-md);display:flex;align-items:center;gap:10px">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--status-delivered)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
      <span style="font-size:.88rem;color:var(--status-delivered);font-weight:500">Joined "${event.title || 'Event'}" successfully!</span>
    </div>
  `;
  setTimeout(() => { resultDiv.innerHTML = ''; }, 4000);

  await loadEvents();
}

initInteractions();
