(function () {
  // 100vw includes the classic scrollbar, so the full-bleed band overshoots
  // the visible viewport and pushes a horizontal scrollbar. Measure the gap
  // and let the CSS subtract it. Done here rather than with overflow on
  // html/body: a non-visible overflow on the root turns it into its own
  // scroll container and breaks fragment scrolling.
  function measureScrollbar() {
    var w = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--sbw', (w > 0 ? w : 0) + 'px');
  }
  measureScrollbar();
  window.addEventListener('resize', measureScrollbar);

  var btn = document.querySelector('[data-reel-embed]');
  if (!btn) return;

  // Land the #reel jump on the video itself rather than the top of the band,
  // so the frame is centred instead of sitting under a screenful of padding.
  var frame = document.querySelector('.reel-frame');
  Array.prototype.forEach.call(document.querySelectorAll('a[href$="#reel"]'), function (link) {
    link.addEventListener('click', function (e) {
      if (!frame) return;
      e.preventDefault();
      frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
      history.replaceState(null, '', '#reel');
    });
  });

  // Warm the connection on intent, not on load — the page stays
  // third-party-free until the visitor reaches for play.
  function warm() {
    ['https://www.youtube-nocookie.com', 'https://www.google.com'].forEach(function (href) {
      var l = document.createElement('link');
      l.rel = 'preconnect';
      l.href = href;
      document.head.appendChild(l);
    });
  }
  btn.addEventListener('pointerenter', warm, { once: true });
  btn.addEventListener('focus', warm, { once: true });

  btn.addEventListener('click', function () {
    var frame = document.createElement('iframe');
    frame.src = btn.getAttribute('data-reel-embed');
    frame.title = 'Motion Design CG Show Reel 2026';
    frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    btn.replaceWith(frame);
    frame.focus();
  });
})();
