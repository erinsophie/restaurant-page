import createHeader from './header.js';
import createFooter from './footer.js';

export default function loadMenu() {
  const menuDiv = document.createElement('div');

  const header = createHeader();

  const main = document.createElement("div");
  main.classList.add("yellow-background");

  const menuText = document.createElement("div");
  menuText.classList.add("menu-text");
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Handmade Burgers";
  const menuPara = document.createElement("p");
  menuPara.textContent = `All of our original burgers are handmade instore daily & come topped with fresh lettuce, onions, tomato, gherkins & cheese along with a choice of our 'Homemade Classic', 'Hot Signature' or 'Smokin’ Hot BBQ Sauce.`;
  menuText.append(menuTitle, menuPara);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const imageSources = [
    "img/original.webp",
    "img/chicken-burger.webp",
    "img/angus.webp",
    "img/vegan.webp",
    "img/beef-nacho.webp",
    "img/spicy.webp",
  ];

  const burgerNames = [
    "The Original Cheese Burger",
    "Classic Chicken Burger",
    "Angus Beef Burger",
    "Vegan Plant-Based Burger",
    "Nacho Cheese Burger",
    "Spicy Chicken Burger",
  ];

  for (let i = 0; i < 6; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const image = document.createElement("img");
    image.src = imageSources[i]; // Use the loop index to access correct image source
    image.alt = "burger";

    const name = document.createElement("p");
    name.textContent = burgerNames[i];

    gridItem.append(image, name);
    menuGrid.append(gridItem);
  }

  main.append(menuText, menuGrid);

  const footer = createFooter();

  menuDiv.append(header, main, footer);
  return menuDiv;
}
