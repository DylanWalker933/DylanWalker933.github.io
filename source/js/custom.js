(function () {
  function setupBackground() {
    if (document.getElementById('site-bg-image')) {
      return;
    }

    var bg = document.createElement('div');
    bg.id = 'site-bg-image';

    var overlay = document.createElement('div');
    overlay.id = 'site-bg-overlay';

    document.body.insertBefore(overlay, document.body.firstChild);
    document.body.insertBefore(bg, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupBackground);
  } else {
    setupBackground();
  }
})();

(function () {
  function setupReadingProgress() {
    if (!document.querySelector('.markdown-body')) {
      return;
    }

    var bar = document.createElement('div');
    bar.id = 'read-progress-bar';
    document.body.appendChild(bar);

    var update = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var total = document.documentElement.scrollHeight - window.innerHeight;
      var percent = total > 0 ? (scrollTop / total) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, percent)) + '%';
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReadingProgress);
  } else {
    setupReadingProgress();
  }
})();
