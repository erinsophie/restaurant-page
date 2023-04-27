import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.getElementById("content");

// Create a container for the tab buttons
const header = document.createElement("div");
header.classList.add("header");
const nav = document.createElement("nav");
header.appendChild(nav);
content.appendChild(header);

function loadTab(tab) {
  // Clear the current content after the tab container
  while (content.lastChild !== header) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(tab());
}

// Create tab buttons
const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
homeBtn.addEventListener("click", () => loadTab(loadHome));

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
menuBtn.addEventListener("click", () => loadTab(loadMenu));

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
contactBtn.addEventListener("click", () => loadTab(loadContact));

// Append tab buttons to the tab container
nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactBtn);

// Load the home tab by default
loadTab(loadHome);
