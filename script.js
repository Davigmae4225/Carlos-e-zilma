const target=new Date("2026-11-07T17:00:00-03:00").getTime();function tick(){let x=Math.max(0,target-Date.now());d.textContent=String(Math.floor(x/86400000)).padStart(2,"0");h.textContent=String(x%86400000/3600000|0).padStart(2,"0");m.textContent=String(x%3600000/60000|0).padStart(2,"0");s.textContent=String(x%60000/1000|0).padStart(2,"0")}tick();setInterval(tick,1000);
const lb=document.getElementById('lightbox'), li=document.getElementById('lightboximg'), photos=[...document.querySelectorAll('.photo')];let idx=0;function show(i){idx=(i+photos.length)%photos.length;li.src=photos[idx].dataset.src;lb.classList.add('open')}photos.forEach((p,i)=>p.onclick=()=>show(i));document.querySelector('.close').onclick=()=>lb.classList.remove('open');document.querySelector('.prev').onclick=()=>show(idx-1);document.querySelector('.next').onclick=()=>show(idx+1);document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1)});
document.getElementById('form').onsubmit=e=>{
  e.preventDefault();
  const n=document.getElementById('nome').value.trim();
  const presenca=document.getElementById('presenca').value;
  const acomp=document.getElementById('acomp').value || '0';
  const numero='5561984240019';
  let mensagem=`Olá! Gostaria de confirmar minha presença no casamento de Carlos e Zilma.\n\nNome: ${n}\nPresença: ${presenca}\nAcompanhantes: ${acomp}`;
  const url=`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.location.href=url;
};