document.addEventListener('DOMContentLoaded', () => {

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const header = document.querySelector('.site-header');
  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('menu-open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll reveal animation */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* Experience "show details" toggles */
  document.querySelectorAll('.details-toggle').forEach(btn => {
    const details = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      details.classList.toggle('open', !expanded);
      btn.innerHTML = !expanded
        ? '<span class="toggle-icon">+</span> Hide details'
        : '<span class="toggle-icon">+</span> Show details';
    });
  });

  /* Recruiter snapshot panel */
  const fab = document.getElementById('snapshotFab');
  const panel = document.getElementById('snapshotPanel');
  const closeBtn = document.getElementById('snapshotClose');
  const backdrop = document.getElementById('snapshotBackdrop');

  function openSnapshot() {
    panel.classList.add('open');
    backdrop.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
  }
  function closeSnapshot() {
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  if (fab) fab.addEventListener('click', openSnapshot);
  if (closeBtn) closeBtn.addEventListener('click', closeSnapshot);
  if (backdrop) backdrop.addEventListener('click', closeSnapshot);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSnapshot();
  });

});
