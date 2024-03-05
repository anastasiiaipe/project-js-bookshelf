import{a as b}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const l=document.querySelector(".loader");function p(){l.classList.remove("visually-hidden")}function m(){l.classList.add("visually-hidden")}p();window.addEventListener("load",()=>{setTimeout(()=>{m()},350)});function k(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",k);function d(o){return o.map(s=>{const{_id:r,book_image:t,title:a,author:n}=s;return`<li class="books-box-itm" id="${r}">
      <div class="books-box-wrap">
              <img
                class="books-img"
                src="${t}"
                alt="${a}"
              />
              <div class="books-overlay">
                <a href="#" data-id="${r}" class="books-overlay-text">
                quick view </a>
              </div>
            </div>
            <div class="books-box-desc">
              <p class="books-box-desc-title">${a}</p>
              <p class="books-box-desc-author">${n}</p>
            </div> 
            </li>`}).join("")}const u=(o,e)=>`<div class="books-container"><h2 class="books-title">Best Sellers Books</h2>${o.map(r=>{const t=r.list_name,a=d(r.books.slice(0,e));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${t}</h3>
        <ul class="books-box-list">${a}</ul>
        <button data-categoryName="${t}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}</div>`,y=o=>`<li class="categories-itm js-categories-current "><a href="#" data-categoryName="">All categories</a></li>${o.map(s=>`<li class="categories-itm"><a href="#" data-categoryName="${s.list_name}">${s.list_name}</a></li>`).join("")}`,g=o=>o.map(s=>{const r=d(s);return`<div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${s.list_name}</h2>
      <ul class="books-category-list">${r}</ul>
    </div>`}).join(""),f="https://books-backend.p.goit.global",c=async(o,e=null)=>{const s=`${f}/books${o}`;try{const r=await b.get(s,{params:e});return console.log("Data from server:",r.data),r.data}catch(r){console.log(r)}},h=async o=>{const e=await c("/top-books/");return u(e,o)},v=async()=>{const o=await c("/category-list/");return y(o)},L=async(o="")=>{const e=await c("/category?category=",{category:o});return g(e)};async function w(){try{const o=await v(),e=y(o),s=document.querySelector(".categories-list");s.innerHTML=e}catch(o){console.error("Error displaying categories:",o)}}async function B(){try{const o=await h(),e=u(o),s=document.querySelector(".books-box");s.innerHTML=e}catch(o){console.error("Error displaying top books:",o)}}async function T(o){try{const e=await L(o),s=g(o,e),r=document.querySelector(".books-box");r.innerHTML=s}catch(e){console.error("Error displaying books by category:",e)}}async function $(){try{await w(),await B()}catch(o){console.error("Error initializing page:",o)}}const x=document.querySelector(".categories-list");x.addEventListener("click",o=>{if(o.target.tagName==="A"){const e=o.target.dataset.categorieName;T(e)}});document.addEventListener("DOMContentLoaded",$);
//# sourceMappingURL=main-cc7d3e6c.js.map
