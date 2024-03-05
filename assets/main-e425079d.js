import{i as E,a as y}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const w=document.querySelector(".loader");function l(){w.classList.remove("visually-hidden")}function d(){w.classList.add("visually-hidden")}l();window.addEventListener("load",()=>{setTimeout(()=>{d()},350)});function T(){window.scrollTo({top:0,behavior:"smooth"})}const c=document.querySelector(".top-btn");c.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?c.style.display="inline-flex":c.style.display="none"});c.addEventListener("click",T);function S(e){return e.map(r=>{const{_id:t,book_image:s,title:n,author:i}=r;return`<li class="books-box-itm" id="${t}">
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
            </li>`}).join("")}const b=(e,o)=>{if(!e||e.length===0){v("Sorry, books not found");return}else return`<h2 class="books-box-title">Best Sellers Books</h2>${e.map(t=>{const s=t.list_name,n=S(t.books.slice(0,o));return`<div class="books-box-holder">
        <h3 class="books-box-subtitle">${s}</h3>
         <ul class="books-box-list">${n}</ul>
           <button data-categoryName="${s}" class="books-btn-see-more" type="button">see more</button>
      </div>`}).join("")}`},p=e=>` <li class="categories-itm js-categories-current ">
  <a href="#" data-categoryName="all categories">All categories</a></li>${e.sort((r,t)=>r.list_name<t.list_name?-1:r.list_name>t.list_name?1:0).map(r=>`<li class="categories-itm"><a href="#" data-categoryName="${r.list_name}">${r.list_name}</a></li>`).join("")}`,_=(e,o)=>{if(!e||e.length===0){v("Sorry, category of book not found");return}else{const r=S(e);return`<h2 class="books-box-title">${o}</h2>
    <div class="books-category-box">
      <ul class="books-category-list">${r}</ul>
    </div>`}};function v(e){E.error({message:e,messageColor:"white",backgroundColor:"red",position:"topRight"})}const f="https://books-backend.p.goit.global",k="topBooksData",x=async e=>{try{const o=sessionStorage.getItem(k);if(o)return b(JSON.parse(o),e);const t=f+"/books/top-books/",s=await y.get(t);return sessionStorage.setItem(k,JSON.stringify(s.data)),b(responseData,e)}catch(o){return console.error("Error fetching top books:",o),""}},h="categoryListData",O=async()=>{try{const e=sessionStorage.getItem(h);if(e)return p(JSON.parse(e));const r=f+"/books/category-list/",t=await y.get(r);return sessionStorage.setItem(h,JSON.stringify(t.data)),p(t.data)}catch(e){console.error("Error fetching category list:",e)}},$=async e=>{const r=f+"/books/category/",t={category:e};try{const s=await y.get(r,{params:t});return _(s.data,e)}catch(s){console.error("Error fetching books by category:",s)}},g={default:3,largeScreen:5,smallScreen:1};function u(e){return e>=1440?g.largeScreen:e<768?g.smallScreen:g.default}const I=window.innerWidth;let a=u(I);window.addEventListener("resize",()=>{const e=window.innerWidth;a=u(e)});async function m(){l();const e=document.querySelector(".categories-list"),o=await O();return e.innerHTML=o,e.addEventListener("click",N),d(),e}async function N(e){e.preventDefault();const o=e.target;if(!o.closest(".categories-itm"))return;const t=o.dataset.categoryname,s=await m();B(s,t),t==="all categories"?L():await C(s,t)}document.addEventListener("click",P);async function P(e){if(e.target&&e.target.classList.contains("books-btn-see-more")){const o=e.target.dataset.categoryname;console.log(o),await C(null,o),window.scrollTo({top:0,behavior:"smooth"});const r=await m();B(r,o)}}async function C(e,o){l();try{const r=document.querySelector(".books-box"),t=window.innerWidth;a=u(t);const s=a;if(!r){console.error("Element not found.");return}const n=await $(o);r.innerHTML=n,console.log(n)}catch(r){console.error("Error displaying books by category:",r)}finally{d()}}async function L(){l();try{const e=document.querySelector(".books-box"),o=window.innerWidth;a=u(o);const t=await x(a);e.innerHTML=t}catch(e){console.error("Error displaying top books:",e)}finally{d()}}L();m();function B(e,o){e.querySelectorAll(".categories-itm").forEach(t=>{t.firstElementChild.dataset.categoryname===o?t.classList.add("js-categories-current"):t.classList.remove("js-categories-current")})}
//# sourceMappingURL=main-e425079d.js.map
