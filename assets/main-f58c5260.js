import{a as u}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const l=document.querySelector(".loader");function y(){l.classList.remove("visually-hidden")}function b(){l.classList.add("visually-hidden")}y();window.addEventListener("load",()=>{setTimeout(()=>{b()},350)});function g(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",g);const p="https://books-backend.p.goit.global/books",c=async(o,e=null)=>{try{const t=await u.get(`${p}${o}`,{params:e});return console.log("Data from server:",t.data),t.data}catch(t){throw console.error("Error fetching data:",t),t}},f=async()=>c("/category-list"),m=async()=>c("/top-books"),k=async(o="")=>c("/category",{category:o}),d=o=>{const{_id:e,title:t,author:n,book_image:s}=o;return`
    <li class="books-box-itm" id="${e}">
      <div class="books-box-wrap">
        <img
          class="books-img"
          src="${s}"
          alt="${t}"
        />
        <div class="books-overlay">
          <a href="#" data-id="${e}" class="books-overlay-text">quick view</a>
        </div>
      </div>
      <div class="books-box-desc">
        <p class="books-box-desc-title">${t}</p>
        <p class="books-box-desc-author">${n}</p>
      </div> 
    </li>
  `},h=(o,e)=>{const t=e.map(d).join("");return`
    <div class="books-box-holder">
      <h3 class="books-box-subtitle">${o}</h3>
      <ul class="books-box-list">${t}</ul>
      <button data-categorieName="${o}" class="books-btn-see-more" type="button">see more</button>
    </div>
  `},L=o=>o.map(e=>`
    <li class="categories-itm">
      <a href="#" data-categorieName="${e.list_name}">${e.list_name}</a>
    </li>
  `).join(""),v=(o,e)=>{const t=e.map(d).join("");return`
    <div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o}</h2>
      <ul class="books-category-list">${t}</ul>
    </div>
  `};async function w(){try{const o=await f(),e=L(o),t=document.querySelector(".categories-list");t.innerHTML=e}catch(o){console.error("Error displaying categories:",o)}}async function T(){try{const o=await m(),e=h(o),t=document.querySelector(".books-box");t.innerHTML=e}catch(o){console.error("Error displaying top books:",o)}}async function B(o){try{const e=await k(o),t=v(o,e),n=document.querySelector(".books-box");n.innerHTML=t}catch(e){console.error("Error displaying books by category:",e)}}async function x(){try{await w(),await T()}catch(o){console.error("Error initializing page:",o)}}const $=document.querySelector(".categories-list");$.addEventListener("click",o=>{if(o.target.tagName==="A"){const e=o.target.dataset.categorieName;B(e)}});document.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=main-f58c5260.js.map
