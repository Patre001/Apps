(function () {
  const container = document.getElementById('lottie');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function load() {
    if (prefersReduced.matches) {
      container.innerHTML = ''; // ensure it's empty
      return;
    }
    if (!window.lottie || !container) return;

    window.lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './assets/251107_LoadIt_Background_Ew01_pt.json',
      rendererSettings: {
        /* Crop like CSS object-fit: cover */
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true,
        hideOnTransparent: true
      }
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    load();
  } else {
    document.addEventListener('DOMContentLoaded', load, { once: true });
  }

  // React to changes of reduce-motion at runtime
  if (prefersReduced.addEventListener) {
    prefersReduced.addEventListener('change', () => {
      container.innerHTML = '';
      load();
    });
  }
})();