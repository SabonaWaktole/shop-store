/**
 * REGIME 2093 — Cinematic storefront interactions
 * Scroll reveals · parallax · subtle glitch · headline timing
 */
(function () {
  'use strict';

  /* ── Inject hero atmosphere layers ──────────────────────── */
  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.regime-fog')) {
    hero.insertAdjacentHTML(
      'afterbegin',
      '<div class="regime-fog" aria-hidden="true"><div class="regime-fog__layer"></div><div class="regime-fog__layer"></div></div>' +
        '<div class="regime-system-readout" aria-hidden="true">' +
        '<span class="regime-system-readout__line"><span class="regime-system-readout__accent">▸</span> SYS.STATUS: <span class="regime-system-readout__accent">ACTIVE</span></span>' +
        '<span class="regime-system-readout__line">SECTOR: PUBLIC-EQUITY</span>' +
        '<span class="regime-system-readout__line">COMPLIANCE: <span class="regime-system-readout__accent">0.00%</span></span>' +
        '</div>'
    );
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── Intersection Observer: fade-in reveals ─────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.regime-reveal, .regime-banner').forEach((el) => {
    revealObserver.observe(el);
  });

  /* ── Parallax on scroll ─────────────────────────────────── */
  const parallaxEls = document.querySelectorAll('[data-regime-parallax]');

  if (parallaxEls.length) {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.regimeParallax) || 0.3;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (center - viewportCenter) * speed * -0.1;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ── Subtle periodic glitch on hero headline ────────────── */
  const heroHeadline = document.querySelector('.hero .text-block h1, .hero .text-block h2');
  if (heroHeadline) {
    heroHeadline.classList.add('regime-glitch');
    setInterval(() => {
      heroHeadline.classList.add('is-glitching');
      setTimeout(() => heroHeadline.classList.remove('is-glitching'), 300);
    }, 8000);
  }

  /* ── Product card glitch on hover (debounced) ───────────── */
  document.querySelectorAll('product-card, .product-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-glitching');
      setTimeout(() => card.classList.remove('is-glitching'), 600);
    });
  });

  /* ── Smooth scroll anchor offset for sticky header ──────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerOffset = parseInt(getComputedStyle(document.body).getPropertyValue('--header-height')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
