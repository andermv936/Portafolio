/* ═══════════════════════════════════════════════════════════════
   RAFAEL MOREIRA — PORTFOLIO  |  main.js  (vanilla JS)
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── THEME TOGGLE ──────────────────────────────────────────── */
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ── MOBILE SIDEBAR ────────────────────────────────────────── */
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburger');

  function openSidebar()  { sidebar.classList.add('open'); overlay.style.display = 'block'; }
  function closeSidebar() { sidebar.classList.remove('open'); overlay.style.display = 'none'; }

  if (hamburger) hamburger.addEventListener('click', openSidebar);
  if (overlay)   overlay.addEventListener('click', closeSidebar);

  /* ── SMOOTH SCROLL + ACTIVE NAV ────────────────────────────── */
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('data-section');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      }
    });
  });

  // Update active nav on scroll
  const sections = document.querySelectorAll('section[id], #counters');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('data-section') === id);
        });
      }
    });
  }, { threshold: .3 });

  sections.forEach(s => observer.observe(s));

  /* ── HERO SLIDER ───────────────────────────────────────────── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  let   current = 0;
  let   sliderTimer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = n;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function nextSlide() { goToSlide((current + 1) % slides.length); }

  if (slides.length) {
    slides[0].classList.add('active');
    dots[0]?.classList.add('active');
    sliderTimer = setInterval(nextSlide, 5000);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(sliderTimer);
        goToSlide(i);
        sliderTimer = setInterval(nextSlide, 5000);
      });
    });
  }

  /* ── SCROLL ANIMATIONS ─────────────────────────────────────── */
  const animEls = document.querySelectorAll('.animate-on-scroll');
  const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObs.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });

  animEls.forEach(el => scrollObs.observe(el));

  /* ── COUNTER ANIMATION ─────────────────────────────────────── */
  const counters = document.querySelectorAll('.counter-num[data-to]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const to  = parseInt(el.getAttribute('data-to'));
        const suf = el.getAttribute('data-suffix') || '';
        let   cur = 0;
        const step = Math.ceil(to / 60);
        const tick = setInterval(() => {
          cur = Math.min(cur + step, to);
          el.textContent = cur + suf;
          if (cur >= to) clearInterval(tick);
        }, 25);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: .8 });

  counters.forEach(c => counterObs.observe(c));

  /* ── SKILL BARS ────────────────────────────────────────────── */
  const skillBars = document.querySelectorAll('.skill-bar-fill[data-pct]');
  const skillObs  = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const pct = el.getAttribute('data-pct');
        setTimeout(() => { el.style.width = pct + '%'; }, 200);
        skillObs.unobserve(el);
      }
    });
  }, { threshold: .3 });

  skillBars.forEach(b => skillObs.observe(b));

  /* ── EDUCATION ACCORDION ───────────────────────────────────── */
  document.querySelectorAll('.edu-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.edu-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.edu-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── PROJECT TABS ──────────────────────────────────────────── */
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const projCards = document.querySelectorAll('.project-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      projCards.forEach(card => {
        const cats = card.getAttribute('data-cats') || 'all';
        const show = cat === 'all' || cats.includes(cat);
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ── EXPERIENCE TABS (Gantt / Detalle) ─────────────────────── */
  const expTabs     = document.querySelectorAll('.exp-tab');
  const expContents = document.querySelectorAll('.exp-content');

  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      expTabs.forEach(t => t.classList.remove('active'));
      expContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      document.querySelector(`.exp-content[data-content="${target}"]`)?.classList.add('active');
    });
  });

  /* ── PROJECT VIEW TOGGLE (GRID / GANTT) ────────────────────── */
  const viewBtns       = document.querySelectorAll('.view-btn');
  const gridView       = document.getElementById('projectsGrid');
  const ganttView      = document.getElementById('projectsGantt');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.getAttribute('data-view');
      if (view === 'grid') {
        gridView?.classList.remove('hidden');
        ganttView?.classList.remove('visible');
        ganttView?.classList.add('hidden-gantt');
      } else {
        gridView?.classList.add('hidden');
        ganttView?.classList.remove('hidden-gantt');
        ganttView?.classList.add('visible');
      }
    });
  });

  /* ── CONTACT FORM → WHATSAPP ───────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const nombre  = document.getElementById('f-nombre')?.value || '';
      const correo  = document.getElementById('f-correo')?.value || '';
      const asunto  = document.getElementById('f-asunto')?.value || '';
      const mensaje = document.getElementById('f-mensaje')?.value || '';
      const text    = `Hola Rafael! Soy ${nombre} (${correo}).\n*Asunto:* ${asunto}\n\n${mensaje}`;
      window.open(`https://wa.me/59169006500?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

});
