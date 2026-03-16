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
// 6. SKELETON LOADING
// ═══════════════════════════════════════
export function showSkeletonCards(container, count = 3) {
  container.innerHTML = Array.from({ length: count }, () => `
    <div class="plan-card-skeleton skeleton">
      <div class="skel-thumb skel-bone"></div>
      <div class="skel-body">
        <div class="skel-title skel-bone"></div>
        <div class="skel-meta skel-bone"></div>
      </div>
    </div>
  `).join('');
}

export function showSkeletonStats(container) {
  const cards = container.querySelectorAll('.stat-card');
  cards.forEach(card => {
    card.innerHTML = `
      <div class="skel-stat-icon skel-bone"></div>
      <div class="skel-stat-value skel-bone"></div>
      <div class="skel-stat-label skel-bone"></div>
    `;
  });
}

// ═══════════════════════════════════════
// 7. FORM PAGE SLIDE TRANSITIONS
// ═══════════════════════════════════════
export function slideFormPage(fromId, toId, direction = 'forward') {
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);
  if (!from || !to) return;

  // Animate out
  from.classList.remove('active', 'from-left');
  from.classList.add(direction === 'forward' ? 'slide-out-left' : 'slide-out-right');

  // After out animation, show new page
  setTimeout(() => {
    from.classList.remove('slide-out-left', 'slide-out-right');
    to.classList.add('active');
    if (direction === 'back') {
      to.classList.add('from-left');
    } else {
      to.classList.remove('from-left');
    }
  }, 200);
}

// ═══════════════════════════════════════
// 8. CURSOR TRAIL (landing page only)
// ═══════════════════════════════════════
export function initCursorTrail() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const trailCount = 5;
  const trails = [];
  for (let i = 0; i < trailCount; i++) {
    const t = document.createElement('div');
    t.className = 'cursor-trail';
    t.style.opacity = (0.3 - i * 0.05).toString();
    t.style.width = t.style.height = (5 - i * 0.5) + 'px';
    document.body.appendChild(t);
    trails.push({ el: t, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;
  let dotVisible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = (mouseX - 4) + 'px';
    dot.style.top = (mouseY - 4) + 'px';
    if (!dotVisible) {
      dot.classList.add('visible');
      dotVisible = true;
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.classList.remove('visible');
    dotVisible = false;
  });

  function animateTrails() {
    let prevX = mouseX, prevY = mouseY;
    trails.forEach(t => {
      const dx = prevX - t.x;
      const dy = prevY - t.y;
      t.x += dx * 0.3;
      t.y += dy * 0.3;
      t.el.style.left = (t.x - 2.5) + 'px';
      t.el.style.top = (t.y - 2.5) + 'px';
      prevX = t.x;
      prevY = t.y;
    });
    requestAnimationFrame(animateTrails);
  }
  requestAnimationFrame(animateTrails);
}

// ═══════════════════════════════════════
// 9. TYPING EFFECT
// ═══════════════════════════════════════
export function typeWriter(element, phrases, speed = 60, pause = 2000) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  element.after(cursor);

  function tick() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      element.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, pause);
        return;
      }
      setTimeout(tick, speed);
    } else {
      element.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, speed * 3);
        return;
      }
      setTimeout(tick, speed * 0.5);
    }
  }
  tick();
}

// ═══════════════════════════════════════
// 10. PARALLAX ON SCROLL
// ═══════════════════════════════════════
export function initParallax() {
  const layers = document.querySelectorAll('.parallax-layer');
  if (!layers.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.dataset.speed || '0.3');
      layer.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

// ═══════════════════════════════════════
// 11. RIPPLE EFFECT ON BUTTONS
// ═══════════════════════════════════════
export function initRippleButtons() {
  document.querySelectorAll('.btn-primary, .btn-next, .btn-ripple').forEach(btn => {
    if (btn.dataset.rippleInit) return;
    btn.dataset.rippleInit = 'true';
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', (e) => {
      const circle = document.createElement('span');
      circle.className = 'ripple-circle';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 500);
    });
  });
}

// ═══════════════════════════════════════
// 12. SCROLL-TO-TOP BUTTON
// ═══════════════════════════════════════
export function initScrollToTop() {
  // Don't add on landing page (it has its own scroll logic)
  if (document.querySelector('.scroll-top-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 300);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ═══════════════════════════════════════
// 13. AMBIENT GRADIENT FOLLOWS MOUSE
// ═══════════════════════════════════════
export function initAmbientGlow() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let targetX = 50, targetY = 30, currentX = 50, currentY = 30;

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth) * 100;
    targetY = (e.clientY / window.innerHeight) * 100;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.02;
    currentY += (targetY - currentY) * 0.02;
    document.body.style.setProperty('--ambient-x', currentX + '%');
    document.body.style.setProperty('--ambient-y', currentY + '%');
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// ═══════════════════════════════════════
// 14. LOADING QUOTES (romantic/fun)
// ═══════════════════════════════════════
const loadingQuotes = [
  "Finding the perfect spot for you two...",
  "Checking reservation availability...",
  "Curating something unforgettable...",
  "Sprinkling a little magic on your evening...",
  "Making sure everything's just right...",
  "Handpicking the best experiences...",
  "Crafting your perfect date night...",
  "Adding the finishing touches...",
];

export function getLoadingQuote() {
  return loadingQuotes[Math.floor(Math.random() * loadingQuotes.length)];
}

export function showLoadingWithQuote(container) {
  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-quote">
      <div class="loading-heart">♥</div>
      <div class="quote-text">${getLoadingQuote()}</div>
    </div>
  `;
  overlay.style.cssText = `
    position:absolute;top:0;left:0;width:100%;height:100%;
    background:rgba(8,5,12,.9);backdrop-filter:blur(8px);
    display:flex;align-items:center;justify-content:center;
    z-index:50;border-radius:inherit;
  `;
  container.style.position = 'relative';
  container.appendChild(overlay);
  return overlay;
}

// ═══════════════════════════════════════
// 15. ANIMATED COUNTERS (for landing page)
// ═══════════════════════════════════════
export function initLandingCounters() {
  const counters = document.querySelectorAll('.proof-stat .num');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        const numMatch = text.match(/(\d+)/);
        if (numMatch) {
          const target = parseInt(numMatch[1]);
          const suffix = text.replace(numMatch[1], '');
          let start = 0;
          const duration = 1200;
          const startTime = performance.now();

          function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * ease);
            el.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              el.classList.add('counted');
            }
          }
          requestAnimationFrame(tick);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// ═══════════════════════════════════════
// 16. EASTER EGG: KONAMI CODE
// ═══════════════════════════════════════
export function initEasterEggs() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        // Trigger a celebration!
        import('./interactions.js').then(m => m.celebrate('hearts'));
        // Show a special toast
        const toast = document.createElement('div');
        toast.className = 'toast toast-success';
        toast.textContent = '💕 You found the secret! You two are perfect together.';
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transition = 'opacity .25s';
          setTimeout(() => toast.remove(), 250);
        }, 4000);
      }
    } else {
      konamiIndex = 0;
    }
  });
}

// ═══════════════════════════════════════
// 17. AUTO-INIT (call on any page)
// ═══════════════════════════════════════
export function initInteractions() {
  initScrollReveal();
  initMagneticButtons();
  initTiltCards();
  initPageTransitions();
  initParallax();
  initRippleButtons();
  initScrollToTop();
  initAmbientGlow();
  initEasterEggs();
}
