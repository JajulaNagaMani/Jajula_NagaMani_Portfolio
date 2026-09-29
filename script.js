const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.style.opacity="0",450));
window.addEventListener("load",()=>setTimeout(()=>loader.remove(),1200));

const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const progress=document.querySelector(".scroll-progress");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=((window.scrollY/Math.max(max,1))*100)+"%";
});

const dot=document.querySelector(".cursor-dot");
const ring=document.querySelector(".cursor-ring");
window.addEventListener("mousemove",(e)=>{
  if(dot&&ring){
    dot.style.left=e.clientX+"px"; dot.style.top=e.clientY+"px";
    ring.style.left=e.clientX+"px"; ring.style.top=e.clientY+"px";
  }
});
