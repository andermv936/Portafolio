/* ═══════════════════════════════════════════════════════════════
   project.js — Shared JS for project subpages
   Handles: theme sync, lightbox, theme toggle button
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── THEME SYNC ────────────────────────────────────────────── */
  const html   = document.documentElement;
  const saved  = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    updateToggleLabel();
    toggleBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleLabel();
    });
  }

  function updateToggleLabel() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (toggleBtn) {
      toggleBtn.textContent = isDark ? '☀ Modo Día' : '🌙 Modo Noche';
    }
  }

  /* ── LIGHTBOX ──────────────────────────────────────────────── */
  const items = document.querySelectorAll('.proj-gallery-item[data-img]');

  items.forEach(item => {
    item.addEventListener('click', () => openLightbox(item.getAttribute('data-img')));
  });

  function openLightbox(src) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `
      <button class="lightbox-close" title="Cerrar">✕</button>
      <img src="${src}" alt="Imagen ampliada">
    `;
    lb.querySelector('.lightbox-close').addEventListener('click', () => lb.remove());
    lb.addEventListener('click', e => { if (e.target === lb) lb.remove(); });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { lb.remove(); document.removeEventListener('keydown', esc); }
    });
    document.body.appendChild(lb);
  }

});
