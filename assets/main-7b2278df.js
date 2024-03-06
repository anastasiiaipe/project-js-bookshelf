import{i as L,a as u}from"./vendor-8cce9181.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const y=document.querySelector(".loader");function i(){y.classList.remove("visually-hidden")}function l(){y.classList.add("visually-hidden")}i();window.addEventListener("load",()=>{setTimeout(()=>{l()},350)});function B(){window.scrollTo({top:0,behavior:"smooth"})}const c=document.querySelector(".top-btn");c.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.style.display="inline-flex":c.style.display="none"});c.addEventListener("click",B);function f(e){return e.map(o=>{const{_id:t,book_image:s,title:n,author:a}=o;return`<li class="books-box-itm" id="${t}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${s}"
                alt="${n}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${t}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${n}</p>
              <p class="books-box-desc-author">${a}</p>
            </div> 
            </li>`}).join("")}const C=(e,r)=>{if(!e||e.length===0){b("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers Books</h2>${e.map(t=>{const s=t.list_name,n=f(t.books.slice(0,r));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},E=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((o,t)=>o.list_name<t.list_name?-1:o.list_name>t.list_name?1:0).map(o=>`<li class="categories-itm"><a href="#" data-categoryName="${o.list_name}">${o.list_name}</a></li>`).join("")}`,S=(e,r)=>{if(!e||e.length===0){b("Sorry, category of book not found");return}else{const o=f(e);return`<h2 class="books-box-title">${r}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${o}</ul>
    </div>`}};function b(e){L.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const g="https://books-backend.p.goit.global",x=async e=>{const o=g+"/books/top-books/";try{const t=await u.get(o);return C(t.data,e)}catch(t){return console.error("Error fetching top books:",t),""}},T=async()=>{const r=g+"/books/category-list/";try{const o=await u.get(r);return E(o.data)}catch(o){console.error("Error fetching category list:",o)}},$=async e=>{const o=g+"/books/category/",t={category:e};try{const s=await u.get(o,{params:t});return S(s.data,e)}catch(s){console.error("Error fetching books by category:",s)}},d={default:3,largeScreen:5,smallScreen:1};function m(e){return e>=1440?d.largeScreen:e<768?d.smallScreen:d.default}let p=m(windowWidthStart);window.addEventListener("resize",()=>{p=m(window.innerWidth)});async function k(){i();const e=document.querySelector(".categories-list"),r=await T();return e.innerHTML=r,e.addEventListener("click",_),l(),e}async function _(e){e.preventDefault();const r=e.target;if(!r.closest(".categories-itm"))return;const t=r.dataset.categoryname;i(),t==="all categories"?w():await h(categoriesContainer,t),v(t)}document.addEventListener("click",O);async function O(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const r=e.target.dataset.categoryname;i(),await h(null,r),window.scrollTo({top:0,behavior:"smooth"});const o=await k();v(o,r)}}async function h(e,r){i();try{const o=document.querySelector(".books-box"),t=await $(r);if(o.innerHTML=t,console.log(t),!o){console.error("Element not found.");return}}catch(o){console.error("Error displaying books by category:",o)}finally{l()}}async function w(){try{const e=document.querySelector(".books-box"),o=await x(p);e.innerHTML=o}catch(e){console.error("Error displaying top books:",e)}finally{l()}}window.addEventListener("load",()=>{w(),k()});function v(e,r){e.querySelectorAll(".categories-itm").forEach(t=>{t.firstElementChild.dataset.categoryname===r?t.classList.add("js-categories-current"):t.classList.remove("js-categories-current")})}
//# sourceMappingURL=main-7b2278df.js.map
