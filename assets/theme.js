(function () {
  var btn = document.getElementById('themeToggle');
  var root = document.documentElement;
  var mql = matchMedia('(prefers-color-scheme: dark)');
  var meta = document.querySelector('meta[name="theme-color"]');
  var COLORS = { light: '#f1efe9', dark: '#141412' };

  function getPref() {
    try { return localStorage.getItem('themePref'); } catch (e) { return null; }
  }
  function setPref(v) {
    try {
      if (v) localStorage.setItem('themePref', v);
      else localStorage.removeItem('themePref');
    } catch (e) {}
  }
  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function apply(t) {
    root.setAttribute('data-theme', t);
    if (meta) meta.setAttribute('content', COLORS[t]);
  }

  apply(current()); // sync meta with the theme the no-flash script already set

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      setPref(next);
      apply(next);
    });
  }

  mql.addEventListener('change', function (e) {
    if (getPref()) return;
    apply(e.matches ? 'dark' : 'light');
  });
})();
