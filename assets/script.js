
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.12});
reveals.forEach(el=>io.observe(el));

const counters = document.querySelectorAll('[data-count]');
counters.forEach(c=>{
  const goal = Number(c.dataset.count);
  let n = 0;
  const step = Math.max(1, Math.floor(goal/70));
  const t = setInterval(()=>{
    n += step;
    if(n >= goal){ n = goal; clearInterval(t); }
    c.textContent = n;
  }, 24);
});

const slides = document.querySelectorAll('.testimonial');
let idx = 0;
if(slides.length){
  setInterval(()=>{
    idx = (idx+1) % slides.length;
    slides.forEach((s,i)=> s.style.transform = `translateX(-${idx*100}%)`);
  }, 3200);
}

const heroText = document.querySelector('[data-animate-text]');
if(heroText){
  const words = ['Elegant Events', 'Memorable Weddings', 'Corporate Experiences', 'Creative Production'];
  let i = 0;
  setInterval(()=>{
    i = (i+1)%words.length;
    heroText.style.opacity = 0;
    setTimeout(()=>{ heroText.textContent = words[i]; heroText.style.opacity = 1; }, 220);
  }, 2400);
}
