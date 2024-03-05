import{a as d}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const l=document.querySelector(".loader");function u(){l.classList.remove("visually-hidden")}function y(){l.classList.add("visually-hidden")}u();window.addEventListener("load",()=>{setTimeout(()=>{y()},350)});function g(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",g);const p="https://books-backend.p.goit.global/books",c=async(o,e=null)=>{try{const r=await d.get(`${p}${o}`,{params:e});return console.log("Data from server:",r.data),r.data}catch(r){throw console.error("Error fetching data:",r),r}},f=async()=>c("/category-list"),b=async()=>c("/top-books"),m=async(o="")=>c("/category",{category:o}),h=(o,e)=>`
    <div class="books-box-holder">
      <h3 class="books-box-subtitle">${o}</h3>
      <ul class="books-box-list">${e}</ul>
      <button data-categorieName="${o}" class="books-btn-see-more" type="button">see more</button>
    </div>
  `,L=o=>o.map(e=>`
    <li class="categories-itm">
      <a href="#" data-categorieName="${e.list_name}">${e.list_name}</a>
    </li>
  `).join(""),k=(o,e)=>`
    <div class="books-category-box visually-hidden">
      <h2 class="books-box-title">${o}</h2>
      <ul class="books-category-list">${e}</ul>
    </div>
  `;async function w(){try{const o=await f(),e=L(o),r=document.querySelector(".categories-list");r.innerHTML=e}catch(o){console.error("Error displaying categories:",o)}}async function v(){try{const o=await b(),e=h(o),r=document.querySelector(".books-box");r.innerHTML=e}catch(o){console.error("Error displaying top books:",o)}}async function B(o){try{const e=await m(o),r=k(o,e),n=document.querySelector(".books-box");n.innerHTML=r}catch(e){console.error("Error displaying books by category:",e)}}async function T(){try{await w(),await v()}catch(o){console.error("Error initializing page:",o)}}const C=document.querySelector(".categories-list");C.addEventListener("click",o=>{if(o.target.tagName==="A"){const e=o.target.dataset.categorieName;B(e)}});document.addEventListener("DOMContentLoaded",T);
//# sourceMappingURL=main-e23dc5c8.js.map
