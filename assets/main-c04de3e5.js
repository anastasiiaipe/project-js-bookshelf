import{i as L,a as y}from"./vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const m=document.querySelector(".loader");function l(){m.classList.remove("visually-hidden")}function d(){m.classList.add("visually-hidden")}l();window.addEventListener("load",()=>{setTimeout(()=>{d()},350)});function B(){window.scrollTo({top:0,behavior:"smooth"})}const c=document.querySelector(".top-btn");c.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.style.display="inline-flex":c.style.display="none"});c.addEventListener("click",B);function p(e){return e.map(o=>{const{_id:t,book_image:r,title:n,author:i}=o;return`<li class="books-box-itm" id="${t}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${r}"
                alt="${n}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${t}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${n}</p>
              <p class="books-box-desc-author">${i}</p>
            </div> 
            </li>`}).join("")}const C=(e,s)=>{if(!e||e.length===0){k("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers Books</h2>${e.map(t=>{const r=t.list_name,n=p(t.books.slice(0,s));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${r}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${r}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},E=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((o,t)=>o.list_name<t.list_name?-1:o.list_name>t.list_name?1:0).map(o=>`<li class="categories-itm"><a href="#" data-categoryName="${o.list_name}">${o.list_name}</a></li>`).join("")}`,S=(e,s)=>{if(!e||e.length===0){k("Sorry, category of book not found");return}else{const o=p(e);return`<h2 class="books-box-title">${s}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${o}</ul>
    </div>`}};function k(e){L.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const f="https://books-backend.p.goit.global",x=async e=>{const o=f+"/books/top-books/";try{const t=await y.get(o);return C(t.data,e)}catch(t){return console.error("Error fetching top books:",t),""}},T=async()=>{const s=f+"/books/category-list/";try{const o=await y.get(s);return E(o.data)}catch(o){console.error("Error fetching category list:",o)}},$=async e=>{const o=f+"/books/category/",t={category:e};try{const r=await y.get(o,{params:t});return S(r.data,e)}catch(r){console.error("Error fetching books by category:",r)}},g={default:3,largeScreen:5,smallScreen:1};function u(e){return e>=1440?g.largeScreen:e<768?g.smallScreen:g.default}const _=window.innerWidth;let a=u(_);window.addEventListener("resize",()=>{const e=window.innerWidth;a=u(e)});async function b(){l();const e=document.querySelector(".categories-list"),s=await T();return e.innerHTML=s,e.addEventListener("click",W),d(),e}async function W(e){e.preventDefault();const s=e.target;if(!s.closest(".categories-itm"))return;const t=s.dataset.categoryname,r=await b();v(r,t),l(),t==="all categories"?w():await h(r,t)}document.addEventListener("click",O);async function O(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const s=e.target.dataset.categoryname;l(),await h(null,s),window.scrollTo({top:0,behavior:"smooth"});const o=await b();v(o,s)}}async function h(e,s){try{const o=document.querySelector(".books-box"),t=window.innerWidth;a=u(t);const r=a;if(!o){console.error("Element not found.");return}const n=await $(s);o.innerHTML=n,console.log(n)}catch(o){console.error("Error displaying books by category:",o)}finally{d()}}async function w(){try{const e=document.querySelector(".books-box"),s=window.innerWidth;a=u(s);const t=await x(a);e.innerHTML=t}catch(e){console.error("Error displaying top books:",e)}finally{d()}}window.addEventListener("load",()=>{w(),b()});function v(e,s){e.querySelectorAll(".categories-itm").forEach(t=>{t.firstElementChild.dataset.categoryname===s?t.classList.add("js-categories-current"):t.classList.remove("js-categories-current")})}
//# sourceMappingURL=main-c04de3e5.js.map
