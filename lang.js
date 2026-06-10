// Language toggle — shared across all pages
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0) === (lang === 'ja'));
  });
  try { localStorage.setItem('wl-lang', lang); } catch (_) {}
}

(function () {
  try {
    const saved = localStorage.getItem('wl-lang');
    if (saved === 'en') setLang('en');
  } catch (_) {}
})();
