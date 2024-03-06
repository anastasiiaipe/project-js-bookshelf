import{i as L,a as y}from"./vendor-8cce9181.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const m=document.querySelector(".loader");function l(){m.classList.remove("visually-hidden")}function d(){m.classList.add("visually-hidden")}l();window.addEventListener("load",()=>{setTimeout(()=>{d()},350)});function B(){window.scrollTo({top:0,behavior:"smooth"})}const a=document.querySelector(".top-btn");a.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?a.style.display="inline-flex":a.style.display="none"});a.addEventListener("click",B);function p(o){return o.map(e=>{const{_id:t,book_image:s,title:n,author:i}=e;return`<li class="books-box-itm" id="${t}">
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
              <p class="books-box-desc-author">${i}</p>
            </div> 
            </li>`}).join("")}const C=(o,r)=>{if(!o||o.length===0){k("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers Books</h2>${o.map(t=>{const s=t.list_name,n=p(t.books.slice(0,r));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},E=o=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${o.sort((e,t)=>e.list_name<t.list_name?-1:e.list_name>t.list_name?1:0).map(e=>`<li class="categories-itm"><a href="#" data-categoryName="${e.list_name}">${e.list_name}</a></li>`).join("")}`,S=(o,r)=>{if(!o||o.length===0){k("Sorry, category of book not found");return}else{const e=p(o);return`<h2 class="books-box-title">${r}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${e}</ul>
    </div>`}};function k(o){L.error({message:o,messageColor:"white",backgroundColor:"red",position:"topRight"})}const f="https://books-backend.p.goit.global",x=async o=>{const e=f+"/books/top-books/";try{const t=await y.get(e);return C(t.data,o)}catch(t){return console.error("Error fetching top books:",t),""}},T=async()=>{const r=f+"/books/category-list/";try{const e=await y.get(r);return E(e.data)}catch(e){console.error("Error fetching category list:",e)}},$=async o=>{const e=f+"/books/category/",t={category:o};try{const s=await y.get(e,{params:t});return S(s.data,o)}catch(s){console.error("Error fetching books by category:",s)}},g={default:3,largeScreen:5,smallScreen:1};function u(o){return o>=1440?g.largeScreen:o<768?g.smallScreen:g.default}const _=window.innerWidth;let c=u(_);window.addEventListener("resize",()=>{const o=window.innerWidth;c=u(o)});async function b(){l();const o=document.querySelector(".categories-list"),r=await T();return o.innerHTML=r,o.addEventListener("click",W),d(),o}async function W(o){o.preventDefault();const r=o.target;if(!r.closest(".categories-itm"))return;const t=r.dataset.categoryname,s=await b();v(s,t),t==="all categories"?w():await h(s,t)}document.addEventListener("click",O);async function O(o){if(o.target&&o.target.classList.contains("books-btn-see-more")){const r=o.target.dataset.categoryname;console.log(r),await h(null,r),window.scrollTo({top:0,behavior:"smooth"});const e=await b();v(e,r)}}async function h(o,r){l();try{const e=document.querySelector(".books-box"),t=window.innerWidth;c=u(t);const s=c;if(!e){console.error("Element not found.");return}const n=await $(r);e.innerHTML=n,console.log(n)}catch(e){console.error("Error displaying books by category:",e)}finally{d()}}async function w(){l();try{const o=document.querySelector(".books-box"),r=window.innerWidth;c=u(r);const t=await x(c);o.innerHTML=t}catch(o){console.error("Error displaying top books:",o)}finally{d()}}w();b();function v(o,r){o.querySelectorAll(".categories-itm").forEach(t=>{t.firstElementChild.dataset.categoryname===r?t.classList.add("js-categories-current"):t.classList.remove("js-categories-current")})}
//# sourceMappingURL=main-187ecd86.js.map
