// create header
export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "home-btn");
  homeBtn.textContent = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menu-btn");
  menuBtn.textContent = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contact-btn");
  contactBtn.textContent = "Contact";

  nav.append(homeBtn, menuBtn, contactBtn);
  header.append(nav);
  return header;
}
