
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
 if(btn&&nav) btn.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
});
