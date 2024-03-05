import{a as g}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const l=document.querySelector(".loader");function p(){l.classList.remove("visually-hidden")}function f(){l.classList.add("visually-hidden")}p();window.addEventListener("load",()=>{setTimeout(()=>{f()},350)});function m(){window.scrollTo({top:0,behavior:"smooth"})}const a=document.querySelector(".top-btn");a.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?a.style.display="inline-flex":a.style.display="none"});a.addEventListener("click",m);const d=o=>{const{_id:e,title:s,author:r,book_image:t}=o;return`
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
        <p class="books-box-desc-author">${r}</p>
      </div> 
    </li>
  `},u=(o,e)=>{const s=e.map(d).join("");return`
    <div class="books-box-holder">
      <h3 class="books-box-subtitle">${o}</h3>
      <ul class="books-box-list">${s}</ul>
      <button data-categorieName="${o}" class="books-btn-see-more" type="button">see more</button>
    </div>
  `},y=o=>o.map(e=>`
    <li class="categories-itm">
      <a href="#" data-categorieName="${e.list_name}">${e.list_name}</a>
    </li>
  `).join(""),b=(o,e)=>{const s=e.map(d).join("");return`
    <div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o}</h2>
      <ul class="books-category-list">${s}</ul>
    </div>
  `},k="https://books-backend.p.goit.global",c=async(o,e=null)=>{const s=`${k}/books${o}`;try{const r=await g.get(s,{params:e});return console.log("Data from server:",r.data),r.data}catch(r){console.log(r)}},h=async o=>{const e=await c("/top-books/");return u(e,o)},L=async()=>{const o=await c("/category-list/");return y(o)},v=async(o="")=>{const e=await c("/category?category=",{category:o});return b(e)};async function w(){try{const o=await L(),e=y(o),s=document.querySelector(".categories-list");s.innerHTML=e}catch(o){console.error("Error displaying categories:",o)}}async function T(){try{const o=await h(),e=u(o),s=document.querySelector(".books-box");s.innerHTML=e}catch(o){console.error("Error displaying top books:",o)}}async function B(o){try{const e=await v(o),s=b(o,e),r=document.querySelector(".books-box");r.innerHTML=s}catch(e){console.error("Error displaying books by category:",e)}}async function x(){try{await w(),await T()}catch(o){console.error("Error initializing page:",o)}}const $=document.querySelector(".categories-list");$.addEventListener("click",o=>{if(o.target.tagName==="A"){const e=o.target.dataset.categorieName;B(e)}});document.addEventListener("DOMContentLoaded",x);
//# sourceMappingURL=main-2ee5ab7c.js.map
