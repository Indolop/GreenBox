function switchLanguage(){
  const html = document.documentElement;
  const current = html.getAttribute('data-lang') || 'uk';
  const newLang = current === 'uk' ? 'en' : 'uk';
  html.setAttribute('data-lang', newLang);
  document.querySelectorAll('[data-uk]').forEach(el => {
    el.textContent = el.getAttribute('data-' + newLang);
  });
  document.getElementById('lang-switch').textContent = newLang === 'uk' ? 'EN' : 'UA';
}
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage();
});
