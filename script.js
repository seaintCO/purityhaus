const menuBtn=document.querySelector('.menuBtn');const mobileNav=document.querySelector('.mobileNav');
if(menuBtn&&mobileNav){menuBtn.addEventListener('click',()=>{const o=mobileNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(o));menuBtn.textContent=o?'×':'☰'});}
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
