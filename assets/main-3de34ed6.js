import{i as L,a as g}from"./vendor-8cce9181.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const m=document.querySelector(".loader");function a(){m.classList.remove("visually-hidden")}function l(){m.classList.add("visually-hidden")}a();window.addEventListener("load",()=>{setTimeout(()=>{l()},350)});function B(){window.scrollTo({top:0,behavior:"smooth"})}const c=document.querySelector(".top-btn");c.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.style.display="inline-flex":c.style.display="none"});c.addEventListener("click",B);function p(e){return e.map(t=>{const{_id:o,book_image:s,title:n,author:i}=t;return`<li class="books-box-itm" id="${o}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${s}"
                alt="${n}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${o}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${n}</p>
              <p class="books-box-desc-author">${i}</p>
            </div> 
            </li>`}).join("")}const C=(e,r)=>{if(!e||e.length===0){k("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers Books</h2>${e.map(o=>{const s=o.list_name,n=p(o.books.slice(0,r));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},E=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((t,o)=>t.list_name<o.list_name?-1:t.list_name>o.list_name?1:0).map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,S=(e,r)=>{if(!e||e.length===0){k("Sorry, category of book not found");return}else{const t=p(e);return`<h2 class="books-box-title">${r}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${t}</ul>
    </div>`}};function k(e){L.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const y="https://books-backend.p.goit.global",x=async e=>{const t=y+"/books/top-books/";try{const o=await g.get(t);return C(o.data,e)}catch(o){return console.error("Error fetching top books:",o),""}},T=async()=>{const r=y+"/books/category-list/";try{const t=await g.get(r);return E(t.data)}catch(t){console.error("Error fetching category list:",t)}},$=async e=>{const t=y+"/books/category/",o={category:e};try{const s=await g.get(t,{params:o});return S(s.data,e)}catch(s){console.error("Error fetching books by category:",s)}},d={default:3,largeScreen:5,smallScreen:1};function f(e){return e>=1440?d.largeScreen:e<768?d.smallScreen:d.default}const _=window.innerWidth;let u=f(_);window.addEventListener("resize",()=>{u=f(window.innerWidth)});async function b(){a();const e=document.querySelector(".categories-list"),r=await T();return e.innerHTML=r,e.addEventListener("click",O),l(),e}async function O(e){e.preventDefault();const r=e.target;if(!r.closest(".categories-itm"))return;const o=r.dataset.categoryname,s=await b();v(s,o),a(),o==="all categories"?w():await h(s,o)}document.addEventListener("click",P);async function P(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const r=e.target.dataset.categoryname;a(),await h(null,r),window.scrollTo({top:0,behavior:"smooth"});const t=await b();v(t,r)}}async function h(e,r){a();try{const t=document.querySelector(".books-box");if(!t){console.error("Element not found.");return}const o=await $(r);t.innerHTML=o,console.log(o)}catch(t){console.error("Error displaying books by category:",t)}finally{l()}}async function w(){try{const e=document.querySelector(".books-box"),r=window.innerWidth;u=f(r);const o=await x(u);e.innerHTML=o}catch(e){console.error("Error displaying top books:",e)}finally{l()}}window.addEventListener("load",()=>{w(),b()});function v(e,r){e.querySelectorAll(".categories-itm").forEach(o=>{o.firstElementChild.dataset.categoryname===r?o.classList.add("js-categories-current"):o.classList.remove("js-categories-current")})}
//# sourceMappingURL=main-3de34ed6.js.map
