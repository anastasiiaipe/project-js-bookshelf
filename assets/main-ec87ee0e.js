import{a as p}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const g=document.querySelector(".loader");function k(){g.classList.remove("visually-hidden")}function h(){g.classList.add("visually-hidden")}k();window.addEventListener("load",()=>{setTimeout(()=>{h()},350)});function v(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",v);function y(e){return e.map(t=>{const{_id:r,book_image:s,title:n,author:a}=t;return`<li class="books-box-itm" id="${r}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${s}"
                alt="${n}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${r}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${n}</p>
              <p class="books-box-desc-author">${a}</p>
            </div> 
            </li>`}).join("")}const w=(e,o)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${e.map(r=>{const s=r.list_name,n=y(r.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
        <ul class="books-box-list">${n}</ul>
        <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}</div>`,L=e=>`<li class="categories-itm js-categories-current "><a href="#" data-categoryName="">All categories</a></li>${e.map(t=>`<li class="categories-itm"><a href="#" data-categoryName="${t.list_name}">${t.list_name}</a></li>`).join("")}`,B=e=>e.map(t=>{const r=y(t);return`<div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${t.list_name}</h2>
      <ul class="books-category-list">${r}</ul>
    </div>`}).join(""),$="https://books-backend.p.goit.global",u=async(e,o=null)=>{const t=`${$}/books${e}`;try{const r=await p.get(t,{params:o});return console.log("Data from server:",r.data),r.data}catch(r){console.log(r)}},x=async e=>{const o=await u("/top-books/");return w(o,e)},S=async()=>{const e=await u("/category-list/");return L(e)},C=async(e="")=>{const o=await u("/category?category=",{category:e});return B(o)},d=document.querySelector(".books-box"),c=document.querySelector(".categories-list"),l={default:3,largeScreen:5,smallScreen:1};async function b(e){d.innerHTML=e;const o=document.querySelector(".books-box-desc-title");o&&N(o)}async function T(){const e=await S();c.innerHTML=e}async function f(){const e=window.innerWidth,o=j(e),t=await x(o);b(t)}async function m(e){const o=await C(e);return b(o)}function N(e){const o=e.textContent.split(" "),t=o.pop(),r=o.join(" ")+(o.length>0?` <span class="books-title-color">${t}</span>`:t);e.innerHTML=r}function j(e){return e>=1440?l.largeScreen:e<768?l.smallScreen:l.default}d&&(f(),T(),c.addEventListener("click",q),d.addEventListener("click",O));function q(e){e.preventDefault();const o=e.target;if(o.tagName==="A"){const t=o.dataset.categoryName;c.querySelector(".js-categories-current").classList.remove("js-categories-current"),o.classList.add("js-categories-current"),t===""?f():m(t)}}function O(e){e.preventDefault();const o=e.target;if(o.classList.contains("books-btn-see-more")){const t=o.dataset.categoryName;c.querySelector(".js-categories-current").classList.remove("js-categories-current"),c.querySelector(`[data-categoryName="${t}"]`).classList.add("js-categories-current"),m(t)}}
//# sourceMappingURL=main-ec87ee0e.js.map
