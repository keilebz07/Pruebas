
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('onem1-theme');
  if(saved === 'dark'){ root.setAttribute('data-theme','dark'); }
  if(toggle){
    const refresh = () => { toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙'; };
    refresh();
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if(next === 'dark') root.setAttribute('data-theme','dark'); else root.removeAttribute('data-theme');
      localStorage.setItem('onem1-theme', next);
      refresh();
    });
  }
  const params = new URLSearchParams(location.search);
  const msg = document.getElementById('msgSent');
  if(params.get('enviado') === '1' && msg){ msg.classList.remove('d-none'); }
})();
