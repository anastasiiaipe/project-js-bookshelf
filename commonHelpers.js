import"./assets/styles-586f67bf.js";const o=document.querySelector(".loader");function n(){o.classList.remove("visually-hidden")}function i(){o.classList.add("visually-hidden")}n();window.addEventListener("load",()=>{setTimeout(()=>{i()},350)});function l(){window.scrollTo({top:0,behavior:"smooth"})}const e=document.querySelector(".top-btn");e.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?e.style.display="inline-flex":e.style.display="none"});e.addEventListener("click",l);
//# sourceMappingURL=commonHelpers.js.map
