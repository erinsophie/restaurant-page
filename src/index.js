import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function init() {
  const content = document.getElementById("content");
  const header = createHeader();
  content.appendChild(header);

  addTabButton("Home", loadHome, content);
  addTabButton("Menu", loadMenu, content);
  addTabButton("Contact", loadContact, content);

  loadTab(loadHome, content);
}

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  const nav = document.createElement("nav");
  header.appendChild(nav);
  return header;
}

function addTabButton(text, tab, content) {
  const nav = content.querySelector(".header nav");

  const btn = document.createElement("button");
  btn.textContent = text;
  btn.addEventListener("click", () => loadTab(tab, content));

  nav.appendChild(btn);
}

function loadTab(tab, content) {
  //replace the contents of the page, except for the header 
  while (content.lastChild !== content.querySelector(".header")) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(tab());
}

init();
