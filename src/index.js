import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import sharedHeader from "./sharedHeader.js";

loadHome();

const header = sharedHeader

header.addEventListener("click", (event) => {
  const target = event.target;

  if (target.id === "home-btn") {
    content.innerHTML = "";
    content.append(loadHome());
  } else if (target.id === "menu-btn") {
    content.innerHTML = "";
    content.append(loadMenu());
  } else if (target.id === "contact-btn") {
    content.innerHTML = "";
    content.append(loadContact());
  }
});
