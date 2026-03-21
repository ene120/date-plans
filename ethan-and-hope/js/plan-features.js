// ═══════════════════════════════════════════════════
// DateFlo — Shared Features Module (V2)
// Reads from window.PLAN (set by plan-data.js)
// Injects: checklist, budget, calendar, per-stop feedback,
//          overall rating, reviews, food recs, action buttons,
//          image galleries, lightbox
// ═══════════════════════════════════════════════════

(function() {
  const P = window.PLAN;
  if (!P) { console.warn("plan-features.js: window.PLAN not found"); return; }

  const STORE_KEY = `dateflo-${P.coupleId || 'plan'}`;
  function getStore() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { return {}; } }
  function setStore(d) { try { localStorage.setItem(STORE_KEY, JSON.stringify(d)); } catch {} }

  // ── Styles ──
  const style = document.createElement("style");
  style.textContent = `
    #planFeatures{max-width:520px;margin:0 auto;padding:0 16px 80px}
    .pf-section{margin-top:28px}
    .pf-section-title{font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:10px}
    .pf-icon{font-size:1.1rem}

    /* Checklist */
    .pf-checklist{list-style:none;padding:0}
    .pf-chk{display:flex;align-items:center;gap:12px;padding:12px 14px;margin-bottom:6px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent}
    .pf-chk:hover{background:rgba(255,255,255,.06)}
    .pf-chk.done{opacity:.5}
    .pf-chk.done .pf-chk-text{text-decoration:line-through}
    .pf-chk-box{width:22px;height:22px;border-radius:50%;border:2px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .3s;font-size:.65rem;color:transparent}
    .pf-chk.done .pf-chk-box{background:var(--rose,#e05780);border-color:var(--rose,#e05780);color:white}
    .pf-chk-text{font-size:.86rem;color:rgba(255,255,255,.6);line-height:1.4}
    .pf-chk-text strong{color:rgba(255,255,255,.8)}

    /* Budget Card */
    .pf-budget-card{position:relative;padding:24px 20px 28px;background:linear-gradient(135deg,#e84393 0%,#c0406a 100%);color:#fff;border-radius:28px;overflow:hidden}
    .pf-budget-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(249,202,36,.2) 0%,transparent 60%);pointer-events:none}
    .pf-budget-title{position:relative;z-index:1;font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:600;margin-bottom:16px;text-align:center}
    .pf-budget-inner{position:relative;z-index:1}
    .pf-brow{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.15);font-size:.85rem}
    .pf-brow:last-of-type{border-bottom:none}
    .pf-blabel{color:rgba(255,255,255,.75)}
    .pf-bcost{color:#fff;font-weight:600}
    .pf-btotal{display:flex;justify-content:space-between;padding:12px 0 0;margin-top:8px;border-top:2px solid rgba(255,255,255,.25);font-weight:700;font-size:.92rem}
    .pf-btotal-l{color:rgba(255,255,255,.85)}
    .pf-btip{position:relative;z-index:1;margin-top:14px;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.15);font-size:.78rem;color:rgba(255,255,255,.8);font-style:italic;line-height:1.5}

    /* Calendar */
    .pf-cal-row{display:flex;gap:10px}
    .pf-cal-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:14px;border-radius:12px;font-size:.82rem;font-weight:600;text-decoration:none;transition:all .2s;cursor:pointer;border:none}
    .pf-cal-btn:hover{transform:translateY(-1px)}
    .pf-cal-btn img{width:18px;height:18px}
    .pf-cal-google{background:#fff;color:#333}
    .pf-cal-apple{background:#000;color:#fff;border:1px solid #333}

    /* Per-Stop Feedback */
    .pf-fb{margin-top:16px;padding:14px;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05)}
    .pf-fb-toggle{display:flex;align-items:center;justify-content:space-between;cursor:pointer;background:none;border:none;width:100%;color:rgba(255,255,255,.5);font-size:.84rem;font-weight:500;padding:0}
    .pf-fb-toggle svg{width:16px;height:16px;transition:transform .3s}
    .pf-fb-toggle.open svg{transform:rotate(180deg)}
    .pf-fb-body{max-height:0;overflow:hidden;transition:max-height .4s ease}
    .pf-fb-body.open{max-height:600px}
    .pf-fb-inner{padding-top:14px}
    .pf-fb-note{font-size:.78rem;color:rgba(255,255,255,.4);line-height:1.5;margin-bottom:16px;font-style:italic}
    .pf-fb-tabs{display:flex;gap:6px;margin-bottom:14px;background:rgba(255,255,255,.04);padding:4px;border-radius:12px}
    .pf-fb-tab{flex:1;padding:10px 8px;border-radius:10px;border:none;background:transparent;font-size:.82rem;font-weight:600;color:rgba(255,255,255,.5);cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;text-align:center}
    .pf-fb-tab.active{background:rgba(255,255,255,.08);color:var(--rose-light,#ff6b9d);box-shadow:0 2px 8px rgba(224,87,128,.1)}
    .pf-fb-panel{display:none}
    .pf-fb-panel.active{display:block}
    .pf-fb-partner-block{padding:14px;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);margin-bottom:12px}
    .pf-fb-partner-block:last-child{margin-bottom:0}
    .pf-fb-partner-name{font-size:.82rem;font-weight:700;color:var(--rose-light,#ff6b9d);margin-bottom:10px}
    .pf-fb-q{margin-bottom:12px}
    .pf-fb-qlabel{font-size:.75rem;color:rgba(255,255,255,.35);margin-bottom:6px;font-weight:600;text-transform:uppercase;letter-spacing:.08em}
    .pf-fb-opts{display:flex;gap:6px}
    .pf-fb-opt{flex:1;padding:8px 4px;border-radius:8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);color:rgba(255,255,255,.45);font-size:.72rem;font-weight:500;cursor:pointer;transition:all .2s;text-align:center}
    .pf-fb-opt.sel{background:rgba(224,87,128,.1);border-color:var(--rose,#e05780);color:var(--rose-light,#ff6b9d)}
    .pf-fb-ta{width:100%;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fff;font-family:'Inter',sans-serif;font-size:.84rem;resize:vertical;min-height:60px;margin-bottom:10px}
    .pf-fb-ta:focus{outline:none;border-color:var(--rose,#e05780)}
    .pf-fb-ta::placeholder{color:rgba(255,255,255,.2)}
    .pf-fb-send{padding:10px 24px;border-radius:10px;background:linear-gradient(135deg,var(--rose,#e05780),var(--rose-deep,#c0406a));color:white;border:none;font-size:.82rem;font-weight:600;cursor:pointer;transition:all .2s}
    .pf-fb-send:hover{transform:translateY(-1px)}
    .pf-fb-sent{color:#00b894;font-size:.82rem;font-weight:600;padding:8px 0}

    /* Overall Rating */
    .pf-rating-tabs{display:flex;gap:6px;margin-bottom:14px;background:rgba(255,255,255,.04);padding:4px;border-radius:12px}
    .pf-rating-tab{flex:1;padding:10px 8px;border-radius:10px;border:none;background:transparent;font-size:.82rem;font-weight:600;color:rgba(255,255,255,.5);cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;text-align:center}
    .pf-rating-tab.active{background:rgba(255,255,255,.08);color:var(--rose-light,#ff6b9d);box-shadow:0 2px 8px rgba(224,87,128,.1)}
    .pf-rating-panel{display:none}
    .pf-rating-panel.active{display:block}
    .pf-rating{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:20px;text-align:center}
    .pf-rating-partner{text-align:center}
    .pf-rating-name{font-size:.88rem;font-weight:700;color:var(--rose-light,#ff6b9d);margin-bottom:10px}
    .pf-rating-prompt{font-size:.82rem;color:rgba(255,255,255,.4);margin-bottom:16px;line-height:1.5;font-style:italic}
    .pf-stars{display:flex;justify-content:center;gap:8px;margin-bottom:16px}
    .pf-star{font-size:2rem;cursor:pointer;transition:all .2s;filter:grayscale(1) opacity(.3)}
    .pf-star.on{filter:none;transform:scale(1.15)}
    .pf-star:hover{transform:scale(1.2)}
    .pf-rating-ta{width:100%;padding:12px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fff;font-family:'Inter',sans-serif;font-size:.86rem;resize:vertical;min-height:70px;margin-bottom:12px}
    .pf-rating-ta:focus{outline:none;border-color:var(--rose,#e05780)}
    .pf-rating-ta::placeholder{color:rgba(255,255,255,.2)}
    .pf-rating-sub{padding:12px 32px;border-radius:12px;background:linear-gradient(135deg,var(--rose,#e05780),var(--rose-deep,#c0406a));color:white;border:none;font-size:.88rem;font-weight:700;cursor:pointer;transition:all .2s;box-shadow:0 4px 16px rgba(224,87,128,.3)}
    .pf-rating-sub:hover{transform:translateY(-2px)}
    .pf-rating-done{color:#00b894;font-size:.9rem;font-weight:600;margin-top:10px}

    /* Reviews */
    .pf-reviews{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}
    .pf-review{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);font-size:.72rem;color:rgba(255,255,255,.5);text-decoration:none}
    .pf-review-stars{color:#f9ca24}

    /* Food Recs */
    .pf-food{margin-top:12px}
    .pf-food-partner{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--rose,#e05780);margin:10px 0 6px}
    .pf-food-item{padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04)}
    .pf-food-item:last-child{border-bottom:none}
    .pf-food-name{font-size:.85rem;font-weight:600;color:rgba(255,255,255,.7)}
    .pf-food-desc{font-size:.78rem;color:rgba(255,255,255,.35)}

    /* Action Buttons */
    .pf-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
    .pf-action{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.5);font-size:.78rem;font-weight:500;text-decoration:none;transition:all .2s}
    .pf-action:hover{background:rgba(255,255,255,.08);color:rgba(255,255,255,.7)}

    /* Gallery */
    .pf-gallery{position:relative;margin:12px 0;border-radius:12px;overflow:hidden}
    .pf-gal-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}
    .pf-gal-track::-webkit-scrollbar{display:none}
    .pf-gal-img{flex:0 0 100%;width:100%;height:180px;object-fit:cover;scroll-snap-align:start;cursor:pointer}
    .pf-gal-dots{display:flex;justify-content:center;gap:6px;padding:8px 0;position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.4))}
    .pf-gal-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35);transition:all .2s;cursor:pointer}
    .pf-gal-dot.on{background:#fff;transform:scale(1.3)}

    /* Lightbox */
    .pf-lb{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.95);display:none;align-items:center;justify-content:center;flex-direction:column}
    .pf-lb.open{display:flex}
    .pf-lb-img{max-width:90vw;max-height:75vh;object-fit:contain;border-radius:8px}
    .pf-lb-close{position:absolute;top:16px;right:16px;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.1);border:none;color:#fff;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center}
    .pf-lb-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.1);border:none;color:#fff;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center}
    .pf-lb-prev{left:12px}
    .pf-lb-next{right:12px}
    .pf-lb-counter{position:absolute;bottom:20px;font-size:.82rem;color:rgba(255,255,255,.5)}

    /* Parking Dropdown */
    .pf-parking-btn{display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 16px;border-radius:14px;background:linear-gradient(135deg,var(--rose,#e84393),var(--rose-deep,#c0406a));color:#fff;border:none;font-size:.88rem;font-weight:700;cursor:pointer;transition:all .2s;-webkit-tap-highlight-color:transparent;box-shadow:0 4px 14px rgba(232,67,147,.25);min-height:48px}
    .pf-parking-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,67,147,.35)}
    .pf-parking-btn:active{transform:scale(.98)}
    .pf-parking-btn svg{width:18px;height:18px;transition:transform .3s}
    .pf-parking-btn.open svg{transform:rotate(180deg)}
    .pf-parking-btn .pf-park-icon{font-size:1.1rem;margin-right:8px}
    .pf-parking-body{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1)}
    .pf-parking-body.open{max-height:600px}
    .pf-park-option{margin-top:10px;padding:14px;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .pf-park-option-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}
    .pf-park-type{font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 8px;border-radius:6px}
    .pf-park-type-free{background:rgba(0,184,148,.12);color:#00b894}
    .pf-park-type-paid{background:rgba(108,92,231,.12);color:#6c5ce7}
    .pf-park-rec{font-size:.6rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;border-radius:4px;background:rgba(249,202,36,.15);color:#f9ca24}
    .pf-park-name{font-size:.88rem;font-weight:700;color:rgba(255,255,255,.85)}
    .pf-park-detail{display:flex;gap:6px;margin-bottom:4px;font-size:.8rem}
    .pf-park-label{color:rgba(255,255,255,.35);min-width:52px;flex-shrink:0}
    .pf-park-val{color:rgba(255,255,255,.65)}
    .pf-park-tip{margin-top:6px;padding:8px 10px;border-radius:8px;background:rgba(249,202,36,.06);border:1px solid rgba(249,202,36,.1);font-size:.76rem;color:rgba(249,202,36,.75);font-style:italic;line-height:1.4}
    .pf-park-maps{display:flex;gap:8px;margin-top:8px}
    .pf-park-map-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:10px;border-radius:10px;font-size:.78rem;font-weight:600;text-decoration:none;transition:all .2s;min-height:44px}
    .pf-park-map-btn img{width:16px;height:16px}
    .pf-park-map-google{background:rgba(255,255,255,.08);color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.1)}
    .pf-park-map-apple{background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.06)}

    /* Partner Preferences */
    .pf-prefs{margin-top:12px}
    .pf-pref-card{padding:10px 14px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);margin-bottom:8px}
    .pf-pref-name{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--rose,#e05780);margin-bottom:6px}
    .pf-pref-row{display:flex;gap:6px;margin-bottom:4px;font-size:.78rem}
    .pf-pref-label{color:rgba(255,255,255,.35);min-width:60px;flex-shrink:0}
    .pf-pref-val{color:rgba(255,255,255,.6)}
    .pf-pref-avoid{color:rgba(255,100,100,.6)}

    /* Swap venue */
    .pf-swap{margin-top:16px}
    .pf-swap-btn{display:flex;align-items:center;gap:8px;padding:12px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);cursor:pointer;width:100%;font-family:'Inter',sans-serif;font-size:.82rem;font-weight:600;color:rgba(255,255,255,.5);transition:all .2s}
    .pf-swap-btn:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.7)}
    .pf-swap-btn svg{width:16px;height:16px;flex-shrink:0}
    .pf-swap-flow{margin-top:12px;overflow:hidden}
    .pf-swap-why{padding:16px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);animation:pfFadeIn .3s ease}
    .pf-swap-why-title{font-size:.82rem;font-weight:600;color:rgba(255,255,255,.7);margin-bottom:12px}
    .pf-swap-why-opts{display:flex;flex-direction:column;gap:8px}
    .pf-swap-why-opt{padding:12px 14px;border-radius:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);color:rgba(255,255,255,.5);font-size:.8rem;font-weight:500;cursor:pointer;transition:all .2s;text-align:left;font-family:'Inter',sans-serif}
    .pf-swap-why-opt:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);border-color:rgba(255,255,255,.1)}
    .pf-swap-alts{animation:pfFadeIn .3s ease}
    .pf-swap-alts-title{font-size:.78rem;font-weight:600;color:rgba(255,255,255,.4);margin-bottom:12px;text-transform:uppercase;letter-spacing:.08em}
    .pf-swap-alt{padding:14px;border-radius:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);margin-bottom:10px;cursor:pointer;transition:all .25s}
    .pf-swap-alt:hover{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);transform:translateY(-1px)}
    .pf-swap-alt:last-child{margin-bottom:0}
    .pf-swap-alt-name{font-size:.85rem;font-weight:600;color:rgba(255,255,255,.7)}
    .pf-swap-alt-desc{font-size:.76rem;color:rgba(255,255,255,.4);margin-top:4px;line-height:1.45}
    .pf-swap-alt-link{display:inline-flex;align-items:center;gap:4px;font-size:.72rem;color:var(--rose-light,#ff6b9d);font-weight:600;margin-top:6px;text-decoration:none}
    .pf-swap-cancel{margin-top:10px;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,.06);background:transparent;color:rgba(255,255,255,.35);font-size:.76rem;font-weight:500;cursor:pointer;width:100%;font-family:'Inter',sans-serif;transition:all .2s}
    .pf-swap-cancel:hover{color:rgba(255,255,255,.5);background:rgba(255,255,255,.03)}
    .pf-swap-confirmed{padding:14px;border-radius:12px;background:rgba(0,184,148,.08);border:1px solid rgba(0,184,148,.15);animation:pfFadeIn .3s ease}
    .pf-swap-confirmed-name{font-size:.85rem;font-weight:600;color:#00b894}
    .pf-swap-confirmed-sub{font-size:.76rem;color:rgba(255,255,255,.4);margin-top:4px}
    @keyframes pfFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
    /* Apple Hide Distracting Items animation */
    .pf-dissolve-out{animation:pfDissolve .5s ease forwards}
    .pf-dissolve-in{animation:pfDissolveIn .5s ease forwards}
    @keyframes pfDissolve{0%{opacity:1;filter:blur(0);transform:scale(1)}60%{opacity:.3;filter:blur(4px);transform:scale(.98)}100%{opacity:0;filter:blur(8px);transform:scale(.96)}}
    @keyframes pfDissolveIn{0%{opacity:0;filter:blur(8px);transform:scale(.96)}40%{opacity:.3;filter:blur(4px);transform:scale(.98)}100%{opacity:1;filter:blur(0);transform:scale(1)}}

    /* Footer */
    .pf-footer{text-align:center;padding:40px 0 20px;font-size:.75rem;color:rgba(255,255,255,.2)}
    .pf-footer-brand{font-family:'Playfair Display',serif;font-size:.9rem;color:rgba(255,255,255,.3)}
  `;
  document.head.appendChild(style);

  // ════════════════════════════════════
  // BUILD BOTTOM SECTIONS
  // ════════════════════════════════════
  const el = document.createElement("div");
  el.id = "planFeatures";
  const store = getStore();

  // Partner Preferences — intentionally not shown to users (they already know their own tastes)
  let prefHtml = '';

  // Checklist
  let chkHtml = `<div class="pf-section"><div class="pf-section-title">Before You Go</div><ul class="pf-checklist">`;
  P.checklist.forEach(c => {
    const done = store[c.id] ? 'done' : '';
    const txt = c.bold ? c.text.replace(c.bold, `<strong>${c.bold}</strong>`) : c.text;
    chkHtml += `<li class="pf-chk ${done}" data-id="${c.id}" onclick="window.__pf.toggleChk(this)"><div class="pf-chk-box">♥</div><span class="pf-chk-text">${txt}</span></li>`;
  });
  chkHtml += `</ul></div>`;

  // Budget — styled as a pink gradient card matching the header
  let budHtml = `<div class="pf-section"><div class="pf-budget-card">`;
  budHtml += `<div class="pf-budget-title">Budget Estimate</div>`;
  budHtml += `<div class="pf-budget-inner">`;
  P.budget.items.forEach(b => { budHtml += `<div class="pf-brow"><span class="pf-blabel">${b.label}</span><span class="pf-bcost">${b.cost}</span></div>`; });
  budHtml += `<div class="pf-btotal"><span class="pf-btotal-l">Estimated Total</span><span>${P.budget.total}</span></div>`;
  budHtml += `</div>`;
  if (P.budget.tip) budHtml += `<div class="pf-btip">${P.budget.tip}</div>`;
  budHtml += `</div></div>`;

  // Calendar
  const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(P.calendar.title)}&dates=${P.calendar.date}${P.calendar.startTime}/${P.calendar.date}${P.calendar.endTime}&location=${encodeURIComponent(P.calendar.location)}&details=${encodeURIComponent(P.calendar.description)}`;
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${P.calendar.date}${P.calendar.startTime}\nDTEND:${P.calendar.date}${P.calendar.endTime}\nSUMMARY:${P.calendar.title}\nLOCATION:${P.calendar.location}\nDESCRIPTION:${P.calendar.description}\nEND:VEVENT\nEND:VCALENDAR`;
  let calHtml = `<div class="pf-section"><div class="pf-section-title">Add to Calendar</div><div class="pf-cal-row">
    <a class="pf-cal-btn pf-cal-google" href="${gcal}" target="_blank"><img src="assets/google-logo.png" alt="Google"> Google Calendar</a>
    <button class="pf-cal-btn pf-cal-apple" onclick="window.__pf.downloadIcs()"><img src="assets/apple-logo-white.png" alt="Apple"> Apple Calendar</button>
  </div></div>`;

  // Overall Rating — tabbed per partner
  const ratStore = getStore();
  let ratHtml = `<div class="pf-section"><div class="pf-section-title">How Was Your Date?</div>
    <div class="pf-rating-prompt">Tell us what you loved and what you'd change. The more you share, the better your next date gets.</div>
    <div class="pf-rating-tabs">
      <button class="pf-rating-tab active" onclick="window.__pf.switchRatingTab('${P.partner1.toLowerCase()}')">${P.partner1}</button>
      <button class="pf-rating-tab" onclick="window.__pf.switchRatingTab('${P.partner2.toLowerCase()}')">${P.partner2}</button>
    </div>`;
  [P.partner1, P.partner2].forEach((name, i) => {
    const key = `rating-${name.toLowerCase()}`;
    const activeClass = i === 0 ? ' active' : '';
    ratHtml += `<div class="pf-rating-panel${activeClass}" data-rating-panel="${name.toLowerCase()}">`;
    if (ratStore[key + '-sent']) {
      ratHtml += `<div class="pf-rating pf-rating-partner"><div class="pf-rating-done">✓ Thanks ${name}, we've got yours!</div></div>`;
    } else {
      ratHtml += `<div class="pf-rating pf-rating-partner" id="pfRating-${name.toLowerCase()}">
        <div class="pf-stars">${[1,2,3,4,5].map(n=>`<span class="pf-star" data-n="${n}" onclick="window.__pf.setPartnerRating('${name.toLowerCase()}',${n})">⭐</span>`).join('')}</div>
        <textarea class="pf-rating-ta" id="pfRatingText-${name.toLowerCase()}" placeholder="${name}, what stood out to you tonight? Anything you'd want more or less of next time?"></textarea>
        <button class="pf-rating-sub" onclick="window.__pf.submitPartnerRating('${name.toLowerCase()}')">Send ${name}'s Feedback</button>
      </div>`;
    }
    ratHtml += `</div>`;
  });
  ratHtml += `</div>`;

  let footHtml = `<div class="pf-footer"><div class="pf-footer-brand">DateFlo</div>We plan it. You live it.</div>`;

  el.innerHTML = prefHtml + chkHtml + budHtml + calHtml + ratHtml + footHtml;

  // Insert at end of scrollable content
  const target = document.querySelector(".app") || document.querySelector(".content") || document.getElementById("app") || document.getElementById("main") || document.body;
  target.appendChild(el);

  // ════════════════════════════════════
  // HELPER FUNCTIONS (exposed on window.__pf)
  // ════════════════════════════════════
  window.__pf = {
    toggleChk(li) {
      li.classList.toggle("done");
      const s = getStore(); s[li.dataset.id] = li.classList.contains("done"); setStore(s);
    },
    downloadIcs() {
      const blob = new Blob([ics], { type: "text/calendar" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = `dateflo-${P.coupleId}.ics`; a.click(); URL.revokeObjectURL(url);
    },
    switchStopFbTab(order, partner) {
      const fb = document.querySelector(`[data-fb-panel="${order}-${partner}"]`);
      if (!fb) return;
      const container = fb.closest('.pf-fb-inner');
      container.querySelectorAll('.pf-fb-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.pf-fb-panel').forEach(p => p.classList.remove('active'));
      container.querySelectorAll('.pf-fb-tab').forEach(t => { if (t.textContent.toLowerCase() === partner) t.classList.add('active'); });
      fb.classList.add('active');
    },
    switchRatingTab(partner) {
      document.querySelectorAll('.pf-rating-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.pf-rating-panel').forEach(p => p.classList.remove('active'));
      const tabs = document.querySelectorAll('.pf-rating-tab');
      tabs.forEach(t => { if (t.textContent.toLowerCase() === partner) t.classList.add('active'); });
      const panel = document.querySelector(`[data-rating-panel="${partner}"]`);
      if (panel) panel.classList.add('active');
    },
    _ratings: {},
    setPartnerRating(partner, n) {
      window.__pf._ratings[partner] = n;
      const container = document.getElementById(`pfRating-${partner}`);
      if (container) container.querySelectorAll(".pf-star").forEach(s => s.classList.toggle("on", parseInt(s.dataset.n) <= n));
    },
    submitPartnerRating(partner) {
      const text = (document.getElementById(`pfRatingText-${partner}`) || {}).value || '';
      const rating = window.__pf._ratings[partner] || 0;
      const s = getStore();
      s[`rating-${partner}`] = { stars: rating, notes: text.trim(), date: new Date().toISOString() };
      s[`rating-${partner}-sent`] = true;
      setStore(s);
      console.log(`Rating [${partner}]:`, rating, "Notes:", text.trim());
      const name = partner.charAt(0).toUpperCase() + partner.slice(1);
      document.getElementById(`pfRating-${partner}`).innerHTML = `<div class="pf-rating-name">${name}</div><div class="pf-rating-done">✓ Thanks ${name}, we've got yours!</div>`;
    },

    // Per-stop feedback HTML — each partner gets their own section
    getStopFeedbackHtml(order) {
      const s = getStore();
      let html = `<div class="pf-fb">
        <button class="pf-fb-toggle" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open')">How was this spot?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button>
        <div class="pf-fb-body"><div class="pf-fb-inner">
          <div class="pf-fb-note">Share your thoughts so we can make your next date even more you.</div>
          <div class="pf-fb-tabs">
            <button class="pf-fb-tab active" onclick="window.__pf.switchStopFbTab(${order},'${P.partner1.toLowerCase()}')">${P.partner1}</button>
            <button class="pf-fb-tab" onclick="window.__pf.switchStopFbTab(${order},'${P.partner2.toLowerCase()}')">${P.partner2}</button>
          </div>`;
      [P.partner1, P.partner2].forEach((name, i) => {
        const pk = name.toLowerCase();
        const fbKey = `fb-${order}-${pk}`;
        const activeClass = i === 0 ? ' active' : '';
        html += `<div class="pf-fb-panel${activeClass}" data-fb-panel="${order}-${pk}">`;
        if (s[fbKey]) {
          html += `<div class="pf-fb-partner-block"><div class="pf-fb-partner-name">${name}</div><div class="pf-fb-sent">✓ Got it, thanks ${name}!</div></div>`;
        } else {
          html += `<div class="pf-fb-partner-block" id="pfFb-${order}-${pk}">
            <div class="pf-fb-partner-name">${name}</div>
            <div class="pf-fb-q"><div class="pf-fb-qlabel">Experience</div><div class="pf-fb-opts">
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">Loved it</div>
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">It was okay</div>
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">Not for us</div>
            </div></div>
            <div class="pf-fb-q"><div class="pf-fb-qlabel">Come back?</div><div class="pf-fb-opts">
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">Definitely</div>
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">Maybe</div>
              <div class="pf-fb-opt" onclick="this.parentElement.querySelectorAll('.pf-fb-opt').forEach(o=>o.classList.remove('sel'));this.classList.add('sel')">Nah</div>
            </div></div>
            <textarea class="pf-fb-ta" id="pfFbTa-${order}-${pk}" placeholder="${name}, what did you think? Anything you loved or would skip next time?"></textarea>
            <button class="pf-fb-send" onclick="window.__pf.submitStopFb(${order},'${pk}',this)">Send ${name}'s Feedback</button>
          </div>`;
        }
        html += `</div>`;
      });
      html += `</div></div></div>`;
      return html;
    },
    submitStopFb(order, partner, btn) {
      btn.disabled = true; btn.textContent = 'Sending...';
      const block = document.getElementById(`pfFb-${order}-${partner}`);
      const expOpts = block.querySelectorAll('.pf-fb-q:first-of-type .pf-fb-opt.sel');
      const retOpts = block.querySelectorAll('.pf-fb-q:last-of-type .pf-fb-opt.sel');
      const experience = expOpts.length ? expOpts[0].textContent : '';
      const returnVisit = retOpts.length ? retOpts[0].textContent : '';
      const notes = (document.getElementById(`pfFbTa-${order}-${partner}`) || {}).value || '';
      const s = getStore();
      s[`fb-${order}-${partner}`] = { experience, returnVisit, notes: notes.trim(), date: new Date().toISOString() };
      setStore(s);
      const name = partner.charAt(0).toUpperCase() + partner.slice(1);
      console.log(`Stop ${order} feedback [${name}]:`, { experience, returnVisit, notes: notes.trim() });
      setTimeout(() => { block.innerHTML = `<div class="pf-fb-partner-name">${name}</div><div class="pf-fb-sent">✓ Got it, thanks ${name}!</div>`; }, 500);
    },

    // Reviews HTML
    getReviewsHtml(stop) {
      if (!stop.reviews) return '';
      const r = stop.reviews;
      let h = '<div class="pf-reviews">';
      if (r.google) h += `<span class="pf-review"><span class="pf-review-stars">${'★'.repeat(Math.round(r.google.stars))}</span> ${r.google.stars} · ${r.google.count.toLocaleString()} Google</span>`;
      if (r.yelp) h += `<span class="pf-review"><span class="pf-review-stars">${'★'.repeat(Math.round(r.yelp.stars))}</span> ${r.yelp.stars} · ${r.yelp.count.toLocaleString()} Yelp</span>`;
      return h + '</div>';
    },

    // Food recs HTML
    getFoodRecsHtml(stop) {
      if (!stop.foodRecs) return '';
      const f = stop.foodRecs;
      let h = '<div class="pf-food">';
      if (f[P.partner1.toLowerCase()]) {
        h += `<div class="pf-food-partner">🔥 ${P.partner1}'s Picks</div>`;
        f[P.partner1.toLowerCase()].forEach(i => { h += `<div class="pf-food-item"><div class="pf-food-name">${i.name}</div><div class="pf-food-desc">${i.desc}</div></div>`; });
      }
      if (f[P.partner2.toLowerCase()]) {
        h += `<div class="pf-food-partner">✨ ${P.partner2}'s Picks</div>`;
        f[P.partner2.toLowerCase()].forEach(i => { h += `<div class="pf-food-item"><div class="pf-food-name">${i.name}</div><div class="pf-food-desc">${i.desc}</div></div>`; });
      }
      if (f.shared) {
        h += `<div class="pf-food-partner">💕 Share Together</div>`;
        f.shared.forEach(i => { h += `<div class="pf-food-item"><div class="pf-food-name">${i.name}</div><div class="pf-food-desc">${i.desc}</div></div>`; });
      }
      return h + '</div>';
    },

    // Action buttons
    getActionBtnsHtml(stop) {
      let h = '<div class="pf-actions">';
      if (stop.menuUrl) h += `<a class="pf-action" href="${stop.menuUrl}" target="_blank">📖 Menu</a>`;
      if (stop.reservationUrl) h += `<a class="pf-action" href="${stop.reservationUrl}" target="_blank">📋 Reserve</a>`;
      if (stop.phone) h += `<a class="pf-action" href="tel:${stop.phone}">📞 Call</a>`;
      if (stop.transit) {
        if (stop.transit.uber) h += `<a class="pf-action" href="${stop.transit.uber}" target="_blank">🚗 Uber</a>`;
        if (stop.transit.lyft) h += `<a class="pf-action" href="${stop.transit.lyft}" target="_blank">🚗 Lyft</a>`;
      }
      if (stop.happyHour) h += `<span class="pf-action">🍺 Happy Hour: ${stop.happyHour.times}</span>`;
      return h + '</div>';
    },

    // Gallery HTML
    getGalleryHtml(stop) {
      if (!stop.images || stop.images.length <= 1) return '';
      return `<div class="pf-gallery" data-stop="${stop.order}">
        <div class="pf-gal-track">${stop.images.map((img,i)=>`<img class="pf-gal-img" src="${img}" alt="Photo ${i+1}" loading="lazy" onclick="window.__pf.openLb(${stop.order},${i})">`).join('')}</div>
        <div class="pf-gal-dots">${stop.images.map((_,i)=>`<div class="pf-gal-dot ${i===0?'on':''}" onclick="window.__pf.galGo(${stop.order},${i})"></div>`).join('')}</div>
      </div>`;
    },

    // Parking dropdown HTML
    getParkingHtml(stop) {
      const opts = stop.parkingOptions || (stop.parking ? [{ ...stop.parking, type: 'free', recommended: true }] : []);
      if (!opts.length) return '';
      const rec = opts.find(o => o.recommended) || opts[0];
      const id = `park-${stop.order}`;
      let h = `<div class="pf-parking">
        <button class="pf-parking-btn" onclick="this.classList.toggle('open');document.getElementById('${id}').classList.toggle('open')">
          <span><span class="pf-park-icon">🅿️</span> Parking Options · ${rec.cost}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="pf-parking-body" id="${id}">`;
      opts.forEach(o => {
        h += `<div class="pf-park-option">
          <div class="pf-park-option-head">
            <span class="pf-park-type pf-park-type-${o.type}">${o.type === 'free' ? 'Free' : 'Paid'}</span>
            ${o.recommended ? '<span class="pf-park-rec">★ Recommended</span>' : ''}
          </div>
          <div class="pf-park-name">${o.name}</div>
          <div class="pf-park-detail"><span class="pf-park-label">Cost</span><span class="pf-park-val">${o.cost}</span></div>
          <div class="pf-park-detail"><span class="pf-park-label">Address</span><span class="pf-park-val">${o.address}</span></div>`;
        if (o.tip) h += `<div class="pf-park-tip">💡 ${o.tip}</div>`;
        if (o.googleMapsUrl || o.appleMapsUrl) {
          h += '<div class="pf-park-maps">';
          if (o.googleMapsUrl) h += `<a class="pf-park-map-btn pf-park-map-google" href="${o.googleMapsUrl}" target="_blank"><img src="assets/google-logo.png" alt="Google"> Directions</a>`;
          if (o.appleMapsUrl) h += `<a class="pf-park-map-btn pf-park-map-apple" href="${o.appleMapsUrl}" target="_blank"><img src="assets/apple-logo-white.png" alt="Apple"> Directions</a>`;
          h += '</div>';
        }
        h += '</div>';
      });
      return h + '</div></div>';
    },

    // Partner preferences HTML
    getPreferencesHtml() {
      // Taste profiles intentionally hidden — couple already knows their own tastes
      return '';
    },

    // Swap venue HTML — "Change" button → Why question → 3 alternatives
    getSwapHtml(stop) {
      if (!stop.swapOptions || !stop.swapOptions.length) return '';
      const s = getStore();
      const swapKey = `swap-${stop.order}`;
      // Already swapped — show confirmation
      if (s[swapKey]) {
        return `<div class="pf-swap"><div class="pf-swap-confirmed"><div class="pf-swap-confirmed-name">\u2713 Changed to ${s[swapKey].chosen}</div><div class="pf-swap-confirmed-sub">We'll remember this for your next plan</div></div></div>`;
      }
      return '';
    },
    openSwapFlow(order) {
      const flow = document.getElementById(`pfSwapFlow-${order}`);
      if (!flow) return;
      flow.innerHTML = `<div class="pf-swap-why">
        <div class="pf-swap-why-title">Quick question \u2014 why the change?</div>
        <div class="pf-swap-why-opts">
          <button class="pf-swap-why-opt" onclick="window.__pf.showAlts(${order},'I\\'ve been here before')">I've been here before</button>
          <button class="pf-swap-why-opt" onclick="window.__pf.showAlts(${order},'Not really my style')">Not really my style</button>
          <button class="pf-swap-why-opt" onclick="window.__pf.showAlts(${order},'Just want to explore something new')">Just want to explore something new</button>
        </div>
        <button class="pf-swap-cancel" onclick="document.getElementById('pfSwapFlow-${order}').innerHTML=''">Never mind, keep it</button>
      </div>`;
    },
    showAlts(order, reason) {
      const stop = P.stops.find(s => s.order === order);
      if (!stop || !stop.swapOptions) return;
      const flow = document.getElementById(`pfSwapFlow-${order}`);
      let html = `<div class="pf-swap-alts">
        <div class="pf-swap-alts-title">Pick your replacement</div>`;
      stop.swapOptions.forEach((alt, i) => {
        html += `<div class="pf-swap-alt" onclick="window.__pf.confirmSwap(${order},${i},'${reason.replace(/'/g,"\\'")}')">
          <div class="pf-swap-alt-name">${alt.name}</div>
          <div class="pf-swap-alt-desc">${alt.desc}</div>
          <a class="pf-swap-alt-link" href="${alt.googleMapsUrl}" target="_blank" onclick="event.stopPropagation()">View on Maps \u2192</a>
        </div>`;
      });
      html += `<button class="pf-swap-cancel" onclick="document.getElementById('pfSwapFlow-${order}').innerHTML=''">Never mind, keep it</button></div>`;
      flow.innerHTML = html;
    },
    confirmSwap(order, altIndex, reason) {
      const stopIdx = P.stops.findIndex(s => s.order === order);
      if (stopIdx === -1) return;
      const stop = P.stops[stopIdx];
      const alt = stop.swapOptions[altIndex];
      // Store swap data for personalization
      const s = getStore();
      s[`swap-${order}`] = { original: stop.name, chosen: alt.name, reason, altIndex, date: new Date().toISOString() };
      setStore(s);
      console.log(`Swap [stop ${order}]:`, { original: stop.name, chosen: alt.name, reason });
      // Replace stop data in PLAN.stops — preserve order/time/endTime from original
      const newStop = Object.assign({}, alt, { order: stop.order, time: stop.time, endTime: stop.endTime });
      P.stops[stopIdx] = newStop;
      // Apple "Hide Distracting Items" dissolve animation on the stop card
      const card = document.getElementById('stop' + order);
      if (card) {
        card.classList.add('pf-dissolve-out');
        setTimeout(() => {
          // Fully re-render card with new stop data
          if (window.rerenderStop) window.rerenderStop(order);
          // Dissolve back in
          card.classList.remove('pf-dissolve-out');
          card.classList.add('pf-dissolve-in');
          setTimeout(() => card.classList.remove('pf-dissolve-in'), 500);
        }, 500);
      }
    },

    // Lightbox
    openLb(stopOrder, idx) {
      const stop = P.stops.find(s => s.order === stopOrder);
      if (!stop) return;
      window.__pf._lbImgs = stop.images; window.__pf._lbIdx = idx;
      document.getElementById("pfLbImg").src = stop.images[idx];
      document.getElementById("pfLbCounter").textContent = `${idx+1} / ${stop.images.length}`;
      document.getElementById("pfLb").classList.add("open");
    },
    closeLb() { document.getElementById("pfLb").classList.remove("open"); },
    navLb(dir) {
      const imgs = window.__pf._lbImgs;
      window.__pf._lbIdx = (window.__pf._lbIdx + dir + imgs.length) % imgs.length;
      document.getElementById("pfLbImg").src = imgs[window.__pf._lbIdx];
      document.getElementById("pfLbCounter").textContent = `${window.__pf._lbIdx+1} / ${imgs.length}`;
    },
    galGo(stopOrder, idx) {
      const gal = document.querySelector(`.pf-gallery[data-stop="${stopOrder}"]`);
      if (!gal) return;
      const img = gal.querySelectorAll(".pf-gal-img")[idx];
      if (img) img.scrollIntoView({ behavior:"smooth", block:"nearest", inline:"start" });
      gal.querySelectorAll(".pf-gal-dot").forEach((d,i) => d.classList.toggle("on", i===idx));
    },
    _lbImgs: [], _lbIdx: 0,
    _getStore: getStore, _setStore: setStore
  };

  // Lightbox element
  const lb = document.createElement("div");
  lb.className = "pf-lb"; lb.id = "pfLb";
  lb.innerHTML = `<button class="pf-lb-close" onclick="window.__pf.closeLb()">&times;</button>
    <button class="pf-lb-nav pf-lb-prev" onclick="window.__pf.navLb(-1)">‹</button>
    <img class="pf-lb-img" id="pfLbImg" src="" alt="">
    <button class="pf-lb-nav pf-lb-next" onclick="window.__pf.navLb(1)">›</button>
    <div class="pf-lb-counter" id="pfLbCounter"></div>`;
  lb.addEventListener("click", e => { if (e.target === lb) window.__pf.closeLb(); });
  document.body.appendChild(lb);

  // Gallery scroll tracking
  document.querySelectorAll(".pf-gal-track").forEach(track => {
    track.addEventListener("scroll", () => {
      const gal = track.closest(".pf-gallery");
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      gal.querySelectorAll(".pf-gal-dot").forEach((d,i) => d.classList.toggle("on", i===idx));
    });
  });

})();
