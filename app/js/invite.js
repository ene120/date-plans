import { getSession, sendMagicLink, getUser } from './auth.js';
import { acceptInvite, getInviteDetails, getProfile, getPreferences } from './api.js';
import { showToast } from './ui.js';

// ── Get invite code from URL ──
const params = new URLSearchParams(window.location.search);
const code = params.get('code');

const loadingEl = document.getElementById('inviteLoading');
const signInEl = document.getElementById('inviteSignIn');
const emailSentEl = document.getElementById('inviteEmailSent');
const successEl = document.getElementById('inviteSuccess');
const errorEl = document.getElementById('inviteError');

function showState(state) {
  [loadingEl, signInEl, emailSentEl, successEl, errorEl].forEach(el => el.classList.add('hidden'));
  state.classList.remove('hidden');
}

// Personalize the invite page with partner names
async function personalizeInvite() {
  if (!code) return;
  try {
    const { data } = await getInviteDetails(code);
    if (data) {
      const inviter = data.inviter_name || data.partner1_name || 'Your partner';
      const partner2 = data.partner2_name || 'there';

      // Update the sign-in heading with their name
      const signInHeading = signInEl.querySelector('h2');
      if (signInHeading) {
        signInHeading.textContent = `Hey ${partner2}! You're Invited 💕`;
      }
      const signInDesc = signInEl.querySelector('p');
      if (signInDesc) {
        signInDesc.textContent = `${inviter} wants to plan amazing dates with you on DateFlo. Sign in to join and start exploring your date plans together.`;
      }

      // Update success message
      const successMsg = document.getElementById('inviteSuccessMsg');
      if (successMsg) {
        successMsg.textContent = `You and ${inviter} are now connected! You can both view and manage your date plans, update preferences, and plan unforgettable dates together.`;
      }

      // Update success heading
      const successHeading = successEl.querySelector('h2');
      if (successHeading) {
        successHeading.textContent = `Welcome, ${partner2}! 🎉`;
      }
    }
  } catch (e) {
    // Gracefully fall back to generic text if RPC doesn't exist
    console.log('Could not fetch invite details:', e);
  }
}

if (!code) {
  showState(errorEl);
  document.getElementById('inviteErrorMsg').textContent =
    'No invite code found in the URL. Please check the link your partner sent.';
} else {
  // Start personalizing in parallel with auth check
  const personalizePromise = personalizeInvite();

  // Check if user is already signed in
  const session = await getSession();

  if (session) {
    // Already signed in, try to accept invite
    const { error } = await acceptInvite(code);
    await personalizePromise;

    if (error) {
      showState(errorEl);
      document.getElementById('inviteErrorMsg').textContent =
        'This invite code is invalid or has already been used. Ask your partner to send a new one.';
    } else {
      // Set Partner 2's display_name from preferences if not already set
      const user = getUser(session);
      if (user) {
        const profile = await getProfile(user.id);
        if (profile?.couple_id && !profile.display_name) {
          const prefs = await getPreferences(profile.couple_id);
          if (prefs?.partner2_name) {
            const { supabase } = await import('./auth.js');
            await supabase.from('profiles')
              .update({ display_name: prefs.partner2_name })
              .eq('id', user.id);
          }
        }
      }
      showState(successEl);
    }
  } else {
    // Not signed in, wait for personalization then show email form
    await personalizePromise;
    showState(signInEl);
  }
}

// ── Send Magic Link ──
document.getElementById('inviteSendLink')?.addEventListener('click', async () => {
  const email = document.getElementById('inviteEmail').value.trim();
  if (!email) { showToast('Please enter your email.', 'error'); return; }

  const btn = document.getElementById('inviteSendLink');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  // Store invite code for after sign in
  localStorage.setItem('dateflo_invite_code', code);

  const { error } = await sendMagicLink(email);

  if (error) {
    showToast('Something went wrong. Please try again.', 'error');
    btn.disabled = false;
    btn.innerHTML = 'Sign In &amp; Join &rarr;';
    return;
  }

  showState(emailSentEl);
  document.getElementById('inviteSentEmail').textContent = email;
});

// Handle Enter key
document.getElementById('inviteEmail')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('inviteSendLink')?.click();
});
