
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const KEY = 'onem1-theme';
  const DAY = 'assets/img/logo-onem1-day.png';
  const DARK = 'assets/img/logo-onem1-white.png';

  function currentTheme(){
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function syncLogos(){
    const src = currentTheme() === 'dark' ? DARK : DAY;
    document.querySelectorAll('.swap-logo').forEach(function(img){
      if(img.getAttribute('src') !== src){
        img.setAttribute('src', src);
      }
      img.onerror = function(){
        this.onerror = null;
        this.setAttribute('src', DAY);
      };
    });
  }

  function syncToggle(){
    if(toggle){
      toggle.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
    }
  }

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem(KEY, theme);
    syncToggle();
    syncLogos();
  }

  [DAY, DARK].forEach(function(src){
    const img = new Image();
    img.src = src;
  });

  const saved = localStorage.getItem(KEY);
  applyTheme(saved === 'dark' ? 'dark' : 'light');

  if(toggle){
    toggle.addEventListener('click', function(){
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  window.addEventListener('pageshow', syncLogos);
  document.addEventListener('DOMContentLoaded', syncLogos);

  const params = new URLSearchParams(location.search);
  const msg = document.getElementById('msgSent');
  if(params.get('enviado') === '1' && msg){
    msg.classList.remove('d-none');
  }
})();
