(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("main"),n=document.createElement("div");n.classList.add("section1");const c=document.createElement("div");c.classList.add("left-side");const o=document.createElement("div");o.classList.add("title");const a=document.createElement("p");a.innerHTML="GOURMET<br>BURGER.",o.append(a);const s=document.createElement("div"),r=document.createElement("p");r.textContent="At Gourmet Burger we're passionate about delivering the ultimate burger experience to our customers. Our juicy and flavorful burgers are made with the finest quality ingredients, from locally-sourced meat to artisanal buns. Come visit us and taste the difference that our commitment to quality and creativity makes in every bite.",s.append(r),c.append(o,s);const i=document.createElement("div");i.classList.add("right-side");const d=document.createElement("img");d.src="img/section1-pic.jpg",d.alt="burgers",i.append(d),n.append(c,i);const m=document.createElement("div");m.classList.add("section2");const u=document.createElement("div");u.classList.add("pic-container");const l=document.createElement("img");l.src="img/section2-pic.jpg",l.alt="burgers",u.append(l);const p=document.createElement("div");p.classList.add("review-container");const g=document.createElement("div");g.classList.add("review");const h=document.createElement("h2");h.textContent="Reviews";const b=document.createElement("p");b.textContent='"The quality of the ingredients was top-notch and the flavors were incredibly delicious. The buns were fresh and perfectly toasted and the meat was cooked to perfection. I can\'t wait to go back and try more of their amazing creations!"',g.append(h,b),p.append(g),m.append(u,p),t.append(n,m);const E=document.createElement("footer");return E.classList.add("footer"),E.textContent="Built by erinsophie",e.append(t,E),e}function t(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("yellow-background");const n=document.createElement("div");n.classList.add("menu-text");const c=document.createElement("h1");c.textContent="Handmade Burgers";const o=document.createElement("p");o.textContent="All of our original burgers are handmade instore daily & come topped with fresh lettuce, onions, tomato, gherkins & cheese along with a choice of our 'Homemade Classic', 'Hot Signature' or 'Smokin’ Hot BBQ Sauce.'",n.append(c,o);const a=document.createElement("div");a.classList.add("menu-grid");const s=["img/original.webp","img/chicken-burger.webp","img/angus.webp","img/vegan.webp","img/beef-nacho.webp","img/spicy.webp"],r=["The Original Cheese Burger","Classic Chicken Burger","Angus Beef Burger","Vegan Plant-Based Burger","Nacho Cheese Burger","Spicy Chicken Burger"];for(let e=0;e<6;e++){const t=document.createElement("div");t.classList.add("grid-item");const n=document.createElement("img");n.src=s[e],n.alt="burger";const c=document.createElement("p");c.textContent=r[e],t.append(n,c),a.append(t)}t.append(n,a);const i=document.createElement("footer");return i.classList.add("footer"),i.textContent="Built by erinsophie",e.append(t,i),e}function n(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("yellow-background");const n=document.createElement("div");n.classList.add("contact-text");const a=document.createElement("h1");a.textContent="Contact Us";const s=document.createElement("p");s.textContent="If you have any questions or comments, please fill out the form below and we will get back to you as soon as possible.",n.append(a,s);const r=document.createElement("div");r.classList.add("contact-container");const i=document.createElement("img");i.src="img/contact.jpg",i.alt="burger";const d=document.createElement("form");d.classList.add("contact-form"),d.setAttribute("action",""),d.setAttribute("method","post");const m=c("name","Name:"),u=o("text","name","name",!0),l=c("email","Email:"),p=o("email","email","email",!0),g=c("phone","Phone:"),h=o("tel","phone","phone",!1);h.setAttribute("pattern","[0-9]{3}-[0-9]{3}-[0-9]{4}");const b=c("subject","Subject:"),E=o("text","subject","subject",!0),f=c("message","Message:"),v=document.createElement("textarea");v.setAttribute("id","message"),v.setAttribute("name","message"),v.setAttribute("rows","5"),v.required=!0;const C=document.createElement("button");C.setAttribute("type","submit"),C.textContent="Submit",d.append(m,u,l,p,g,h,b,E,f,v,C),r.append(i,d),t.append(n,r);const y=document.createElement("footer");return y.classList.add("footer"),y.textContent="Built by erinsophie",e.append(t,y),e}function c(e,t){const n=document.createElement("label");return n.setAttribute("for",e),n.textContent=t,n}function o(e,t,n,c){const o=document.createElement("input");return o.setAttribute("type",e),o.setAttribute("id",t),o.setAttribute("name",n),o.required=c,o}function a(e,t,n){const c=n.querySelector(".header nav"),o=document.createElement("button");o.textContent=e,o.addEventListener("click",(()=>s(t,n))),c.appendChild(o)}function s(e,t){for(;t.lastChild!==t.querySelector(".header");)t.removeChild(t.lastChild);t.appendChild(e())}!function(){const c=document.getElementById("content"),o=function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("nav");return e.appendChild(t),e}();c.appendChild(o),a("Home",e,c),a("Menu",t,c),a("Contact",n,c),s(e,c)}()})();