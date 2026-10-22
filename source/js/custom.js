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
