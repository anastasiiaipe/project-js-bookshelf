import"./vendor-86291ea8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const u=document.querySelector(".loader");function p(){u.classList.remove("visually-hidden")}function m(){u.classList.add("visually-hidden")}p();window.addEventListener("load",()=>{setTimeout(()=>{m()},350)});function L(){window.scrollTo({top:0,behavior:"smooth"})}const i=document.querySelector(".top-btn");i.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>window.innerHeight?i.style.display="inline-flex":i.style.display="none"});i.addEventListener("click",L);JSON.parse(sessionStorage.getItem("savedfetch"));const d=document.querySelector(".books-box"),n=document.querySelector(".categories-list"),l={default:3,largeScreen:5,smallScreen:1};async function f(t){d.innerHTML=t;const e=document.querySelector(".books-box-desc-title");e&&h(e)}async function w(){const t=await getCategoryList();n.innerHTML=t}async function g(){const t=window.innerWidth,e=S(t),r=await getTopBooks(e);f(r)}async function y(t){const e=await getBooksByCategory(t);return f(e)}function h(t){const e=t.textContent.split(" "),r=e.pop(),c=e.join(" ")+(e.length>0?` <span class="books-title-color">${r}</span>`:r);t.innerHTML=c}function S(t){return t>=1440?l.largeScreen:t<768?l.smallScreen:l.default}d&&(g(),w(),n.addEventListener("click",v),d.addEventListener("click",b));function v(t){t.preventDefault();const e=t.target;if(e.tagName==="A"){const r=e.dataset.categoryName;n.querySelector(".js-categories-current").classList.remove("js-categories-current"),e.classList.add("js-categories-current"),r==="all categories"?g():y(r)}}function b(t){t.preventDefault();const e=t.target;if(e.classList.contains("books-btn-see-more")){const r=e.dataset.categoryName;n.querySelector(".js-categories-current").classList.remove("js-categories-current"),n.querySelector(`[data-categoryName="${r}"]`).classList.add("js-categories-current"),y(r)}}
//# sourceMappingURL=main-ea42a8b3.js.map