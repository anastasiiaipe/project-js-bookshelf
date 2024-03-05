import{a as c}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d=document.querySelector(".loader");function y(){d.classList.remove("visually-hidden")}function b(){d.classList.add("visually-hidden")}y();window.addEventListener("load",()=>{setTimeout(()=>{b()},350)});function g(){window.scrollTo({top:0,behavior:"smooth"})}const n=document.querySelector(".top-btn");n.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?n.style.display="inline-flex":n.style.display="none"});n.addEventListener("click",g);const l="https://books-backend.p.goit.global/books/";async function p(){const o="category-list";return await c.get(`${l}${o}`)}async function m(){const o="top-books";return await c.get(`${l}${o}`)}async function f(o){const e="category?category=";return await c.get(`${l}${e}${o}`)}const u=o=>{const{_id:e,title:s,author:i,book_image:t}=o;return`
    <li class="books-box-itm" id="${e}">
      <div class="books-box-wrap">
        <img
          class="books-img"
          src="${t}"
          alt="${s}"
        />
        <div class="books-overlay">
          <a href="#" data-id="${e}" class="books-overlay-text">quick view</a>
        </div>
      </div>
      <div class="books-box-desc">
        <p class="books-box-desc-title">${s}</p>
        <p class="books-box-desc-author">${i}</p>
      </div> 
    </li>
  `},k=(o,e)=>{const s=e.map(u).join("");return`
    <div class="books-box-holder">
      <h3 class="books-box-subtitle">${o}</h3>
      <ul class="books-box-list">${s}</ul>
      <button data-categorieName="${o}" class="books-btn-see-more" type="button">see more</button>
    </div>
  `},h=o=>o.map(e=>`
    <li class="categories-itm">
      <a href="#" data-categorieName="${e.list_name}">${e.list_name}</a>
    </li>
  `).join(""),L=(o,e)=>{const s=e.map(u).join("");return`
    <div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o}</h2>
      <ul class="books-category-list">${s}</ul>
    </div>
  `};async function v(){try{const o=await p(),e=h(o),s=document.querySelector(".categories-list");s.innerHTML=e}catch(o){console.error("Error displaying categories:",o)}}async function w(){try{const o=await m(),e=k(o),s=document.querySelector(".books-box");s.innerHTML=e}catch(o){console.error("Error displaying top books:",o)}}async function $(o){try{const e=await f(o),s=L(o,e),i=document.querySelector(".books-box");i.innerHTML=s}catch(e){console.error("Error displaying books by category:",e)}}async function T(){try{await v(),await w()}catch(o){console.error("Error initializing page:",o)}}const B=document.querySelector(".categories-list");B.addEventListener("click",o=>{if(o.target.tagName==="A"){const e=o.target.dataset.categorieName;$(e)}});document.addEventListener("DOMContentLoaded",T);
//# sourceMappingURL=main-1c296f25.js.map
