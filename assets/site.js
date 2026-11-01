(function(){
  function openHash(){var h=location.hash;if(!h)return;var d=document.querySelector(h);if(d&&d.tagName==='DETAILS'){d.open=true;d.scrollIntoView({behavior:'smooth',block:'start'});}}
  window.addEventListener('hashchange',openHash);openHash();
  document.querySelectorAll('[data-u][data-d]').forEach(function(a){var e=a.getAttribute('data-u')+'@'+a.getAttribute('data-d');a.href='mailto:'+e;var t=a.querySelector('.em-txt');if(t)t.textContent=e;});
})();
