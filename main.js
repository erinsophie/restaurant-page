(()=>{"use strict";!function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("nav"),n=["Home","Menu","Contact"];for(let e=0;e<3;e++){const c=document.createElement("button");c.textContent=n[e],t.append(c)}return e.append(t),e}(),n=document.createElement("div");n.classList.add("menu-tab");const c=document.createElement("div");c.classList.add("menu-text");const o=document.createElement("h1");o.textContent="Handmade Burgers";const a=document.createElement("p");a.textContent="All of our original burgers are handmade instore daily & come topped with fresh lettuce, onions, tomato, gherkins & cheese along with a choice of our 'Homemade Classic', 'Hot Signature' or 'Smokin’ Hot BBQ Sauce.",c.append(o,a);const r=document.createElement("div");r.classList.add("menu-grid");const s=["img/original.webp","img/chicken-burger.webp","img/angus.webp","img/vegan.webp","img/beef-nacho.webp","img/spicy.webp"],i=["The Original Cheese Burger","Classic Chicken Burger","Angus Beef Burger","Vegan Plant-Based Burger","Nacho Cheese Burger","Spicy Chicken Burger"];for(let e=0;e<6;e++){const t=document.createElement("div");t.classList.add("grid-item");const n=document.createElement("img");n.src=s[e],n.alt="burger";const c=document.createElement("p");c.textContent=i[e],t.append(n,c),r.append(t)}n.append(c,r);const d=function(){const e=document.createElement("footer");return e.classList.add("footer"),e.textContent="Built by erinsophie",e}();e.append(t,n,d)}()})();