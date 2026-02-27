
const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});
reveals.forEach(r=>io.observe(r));
document.querySelectorAll('[data-count]').forEach(el=>{let done=false;io.observe(el);const run=()=>{if(done)return;done=true;let c=0,t=+el.dataset.count;const step=Math.ceil(t/60);const iv=setInterval(()=>{c+=step;if(c>=t){c=t;clearInterval(iv)}el.textContent=c},24)};new IntersectionObserver((en)=>en.forEach(e=>{if(e.isIntersecting)run()})).observe(el)});
let i=0;const ts=[...document.querySelectorAll('.testimonial')];if(ts.length){ts[0].classList.add('active');setInterval(()=>{ts[i].classList.remove('active');i=(i+1)%ts.length;ts[i].classList.add('active')},3600)}
