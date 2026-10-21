(function () {
  function setupBackground() {
    if (document.getElementById('site-bg-video')) {
      return;
    }

    var video = document.createElement('video');
    video.id = 'site-bg-video';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.src = '/media/background.mp4';

    var overlay = document.createElement('div');
    overlay.id = 'site-bg-overlay';

    document.body.insertBefore(overlay, document.body.firstChild);
    document.body.insertBefore(video, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupBackground);
  } else {
    setupBackground();
  }
})();
