/* shared: freeze-safe reveal + page-leave fade transition */
(function(){
  var rvEls = [].slice.call(document.querySelectorAll('.rv'));
  function reveal(){
    var vh = window.innerHeight;
    for(var i=0;i<rvEls.length;i++){
      var el = rvEls[i];
      if(el.classList.contains('in')) continue;
      var r = el.getBoundingClientRect();
      if(r.top < vh*0.92 && r.bottom > 0) el.classList.add('in');
    }
  }
  window.addEventListener('scroll', reveal, {passive:true});
  window.addEventListener('resize', reveal);
  requestAnimationFrame(reveal);
  setTimeout(reveal, 180);

  // failsafe: if the CSS timeline is frozen (offscreen/print/capture), force visible
  var probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;top:-40px;left:-40px;width:2px;height:2px;opacity:0;transition:opacity .15s linear;pointer-events:none;';
  document.body.appendChild(probe);
  requestAnimationFrame(function(){ probe.style.opacity = '1'; });
  setTimeout(function(){
    var moved = parseFloat(getComputedStyle(probe).opacity);
    probe.remove();
    if(moved < 0.9){ rvEls.forEach(function(el){ el.style.transition='none'; el.classList.add('in'); }); }
  }, 360);

  // page-leave fade for internal links
  function isInternal(a){
    if(!a) return false;
    var href = a.getAttribute('href') || '';
    if(!href || href.charAt(0)==='#') return false;
    if(a.target === '_blank') return false;
    if(/^(https?:|mailto:|tel:)/.test(href)) return false;
    return /\.html(\?|#|$)/.test(href) || href.indexOf('.')===-1;
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a');
    if(!a || !isInternal(a)) return;
    var href = a.getAttribute('href');
    if(href === location.pathname.split('/').pop()) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function(){ window.location.href = href; }, 300);
  });
  // restore visibility on bfcache back
  window.addEventListener('pageshow', function(){ document.body.classList.remove('leaving'); });

  // drifting fireflies — homepage only
  var home = document.querySelector('.home');
  var page = document.querySelector('.page');
  if(home && page && !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)){
    var layer = document.createElement('div');
    layer.className = 'fireflies';
    var N = window.innerWidth < 700 ? 10 : 18;
    for(var i=0;i<N;i++){
      var f = document.createElement('span');
      f.className = 'firefly';
      var s = 0.5 + Math.random()*1.6;            // size scale
      f.style.left = Math.random()*100 + 'vw';
      f.style.top = Math.random()*100 + 'vh';
      f.style.width = f.style.height = (5*s).toFixed(1) + 'px';
      f.style.setProperty('--dx', (Math.random()*120-60).toFixed(0)+'px');
      f.style.setProperty('--dy', (Math.random()*-120-20).toFixed(0)+'px');
      f.style.setProperty('--dur', (10+Math.random()*12).toFixed(1)+'s');
      f.style.setProperty('--delay', (-Math.random()*14).toFixed(1)+'s');
      f.style.setProperty('--fmax', (0.45+Math.random()*0.5).toFixed(2));
      layer.appendChild(f);
    }
    page.insertBefore(layer, page.firstChild);
  }

  // custom cursor (desktop fine-pointer only)
  if(window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches){
    var dot = document.createElement('div');
    dot.className = 'cursor-dot hidden';
    document.body.appendChild(dot);
    var tx=innerWidth/2, ty=innerHeight/2, dx=tx, dy=ty, seen=false;
    document.addEventListener('mousemove', function(e){
      tx=e.clientX; ty=e.clientY;
      if(!seen){ seen=true; dx=tx; dy=ty; }
      dot.classList.remove('hidden');
    });
    window.addEventListener('mouseout', function(e){ if(!e.relatedTarget && !e.toElement){ dot.classList.add('hidden'); } });
    window.addEventListener('blur', function(){ dot.classList.add('hidden'); });
    document.addEventListener('mouseover', function(e){
      var hit = e.target.closest && e.target.closest('a,button,.mod,.clink,[data-cursor]');
      dot.classList.toggle('big', !!hit);
    });
    (function loop(){ dx+=(tx-dx)*0.2; dy+=(ty-dy)*0.2; dot.style.left=dx+'px'; dot.style.top=dy+'px'; requestAnimationFrame(loop); })();
  }
})();
