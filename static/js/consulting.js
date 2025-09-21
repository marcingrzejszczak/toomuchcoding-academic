
(function(){
  const track=document.querySelector('.carousel-track');
  if(!track) return;
  const slides=[...track.children];
  let i=0;
  function go(n){
    i=(n+slides.length)%slides.length;
    slides[i].scrollIntoView({behavior:'smooth',inline:'center'});
  }
  const prev=document.querySelector('.carousel-prev');
  const next=document.querySelector('.carousel-next');
  prev && prev.addEventListener('click',()=>go(i-1));
  next && next.addEventListener('click',()=>go(i+1));
})();
