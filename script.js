const menuToggle=document.querySelector(".menu-toggle");const siteNav=document.querySelector(".site-nav");
menuToggle?.addEventListener("click",()=>{const open=siteNav.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"✕":"☰"});
document.querySelectorAll(".site-nav a").forEach(link=>link.addEventListener("click",()=>{siteNav.classList.remove("is-open");menuToggle?.setAttribute("aria-expanded","false");if(menuToggle)menuToggle.textContent="☰"}));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("contact-form")?.addEventListener("submit",e=>{e.preventDefault();document.getElementById("form-status").textContent="Thanks — your message has been received.";e.currentTarget.reset()});