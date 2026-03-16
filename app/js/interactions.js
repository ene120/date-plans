// ── Phase 1: Interaction Effects ──

// ═══════════════════════════════════════
// 1. SCROLL REVEAL (IntersectionObserver)
// ═══════════════════════════════════════
export function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════
// 2. MAGNETIC BUTTONS
// ═══════════════════════════════════════
export function initMagneticButtons() {
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ═══════════════════════════════════════
// 3. 3D CARD TILT
// ═══════════════════════════════════════
export function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 8; // max 4deg tilt
      const rotateY = (x - 0.5) * 8;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ═══════════════════════════════════════
// 4. CELEBRATION ANIMATIONS
// ═══════════════════════════════════════
export function celebrate(type = 'confetti') {
  const canvas = document.createElement('canvas');
  canvas.className = 'celebration-canvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  const particles = [];
  const colors = type === 'hearts'
    ? ['#e05780', '#ff6b9d', '#c0406a', '#f9ca24', '#ff85b1']
    : ['#e05780', '#ff6b9d', '#f9ca24', '#74b9ff', '#00b894', '#c0406a', '#ff85b1', '#ffeaa7'];

  const count = type === 'hearts' ? 35 : 80;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width * 0.5 + (Math.random() - 0.5) * canvas.width * 0.4,
      y: canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 12,
      vy: -Math.random() * 14 - 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.25 + Math.random() * 0.1,
      opacity: 1,
      type: type === 'hearts' ? 'heart' : (Math.random() > 0.5 ? 'rect' : 'circle'),
    });
  }

  let frame = 0;
  const maxFrames = 120;

  function drawHeart(ctx, x, y, size, color, opacity, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    const s = size * 0.6;
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s, -s * 0.5, -s * 0.5, -s * 1.2, 0, -s * 0.5);
    ctx.bezierCurveTo(s * 0.5, -s * 1.2, s, -s * 0.5, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    const fadeStart = maxFrames * 0.6;
    particles.forEach(p => {
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.vx *= 0.99;
      p.rotation += p.rotationSpeed;

      if (frame > fadeStart) {
        p.opacity = Math.max(0, 1 - (frame - fadeStart) / (maxFrames - fadeStart));
      }

      if (p.type === 'heart') {
        drawHeart(ctx, p.x, p.y, p.size, p.color, p.opacity, p.rotation);
      } else {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        if (p.type === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (frame < maxFrames) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(animate);
}

// ═══════════════════════════════════════
// 5. PAGE TRANSITIONS (View Transitions API)
// ═══════════════════════════════════════
export function initPageTransitions() {
  if (!document.startViewTransition) return;

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    // Only intercept local navigation
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || link.target === '_blank') return;

    e.preventDefault();
    document.startViewTransition(() => {
      window.location.href = href;
    });
  });
}

// ═══════════════════════════════════════
// 6. AUTO-INIT (call on any page)
// ═══════════════════════════════════════
export function initInteractions() {
  initScrollReveal();
  initMagneticButtons();
  initTiltCards();
  initPageTransitions();
}
