// 2093 Rebellion Design - Reveal on Scroll & Parallax
(function() {
  // Reveal on scroll logic
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  function observeElements() {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  // Parallax effect for hero
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const heroImage = document.querySelector('.scanline div[style*="background-image"]');
    if (heroImage) {
      heroImage.style.transform = `translateY(${scroll * 0.4}px)`;
    }
  });

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }

  // Re-observe after Shopify section rendering (for theme editor)
  document.addEventListener('shopify:section:load', observeElements);
})();
