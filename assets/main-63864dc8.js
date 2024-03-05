import{i as k,a as l}from"./vendor-8cce9181.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const g=document.querySelector(".loader");function h(){g.classList.remove("visually-hidden")}function v(){g.classList.add("visually-hidden")}h();window.addEventListener("load",()=>{setTimeout(()=>{v()},350)});function w(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",w);function y(o){return o.map(e=>{const{_id:t,book_image:r,title:n,author:a}=e;return`<li class="books-box-itm" id="${t}">
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
              <p class="books-box-desc-author">${a}</p>
            </div> 
            </li>`}).join("")}const u=(o,s)=>!o||o.length===0?`<div class="books-box"><h2 class="books-box-title">Best Sellers Books</h2>
    </div>${b()}`:`<h2 class="books-box-title">Best Sellers Books</h2>${o.map(t=>{const r=t.list_name,n=y(t.books.slice(0,s));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${r}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${r}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`,x=o=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${o.sort((e,t)=>e.list_name<t.list_name?-1:e.list_name>t.list_name?1:0).map(e=>`<li class="categories-itm"><a href="#" data-categoryName="${e.list_name}">${e.list_name}</a></li>`).join("")}`;function b(){return k.error({message:"Sorry, no books found.",position:"topRight"}),`</div>
  <div class="empty-category">
  <span>Nothing found</span>
  </div>`}const B=(o,s)=>{if(!o||o.length===0)return`<div class="books-box">
        <h2 class="books-box-title">${s}</h2>
        </div>${b()}`;{const e=y(o);return`<h2 class="books-box-title">${s}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${e}</ul>
    </div>`}},d="https://books-backend.p.goit.global";let c=JSON.parse(sessionStorage.getItem("savedfetch"))||"";const L=async o=>{if(c)return u(c,o);{const e=d+"/books/top-books/";try{const t=await l.get(e);return sessionStorage.setItem("savedfetch",JSON.stringify(t.data)),c=t.data,u(t.data,o)}catch(t){console.log(t)}}},C=async()=>{const s=d+"/books/category-list/";try{const e=await l.get(s);return x(e.data)}catch(e){console.log(e)}},$=async o=>{const e=d+"/books/category/",t={category:o};try{const r=await l.get(e,{params:t});return B(r.data,o)}catch(r){console.log(r)}};async function m(){const o=document.querySelector(".categories-list"),s=await C();return o.innerHTML=s,o.addEventListener("click",T),o}document.addEventListener("click",async function(o){if(o.target&&o.target.classList.contains("books-btn-see-more")){const s=o.target.dataset.categoryname;console.log(s),await p(null,s)}});async function T(o){o.preventDefault();const e=o.target.dataset.categoryname,t=await m();e==="all categories"?f():await p(t,e)}async function p(o,s){const e=document.querySelector(".books-box");if(!e){console.error('Element with class "books-category-box" not found.');return}const t=await $(s);e.innerHTML=t,console.log(t)}async function f(){const s=document.querySelector(".books-box"),e=await L(5);s.innerHTML=e}f();m();
//# sourceMappingURL=main-63864dc8.js.map
