   // create header
    export default function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const nav = document.createElement('nav');

    const navBtns = [
      'Home',
      'Menu',
      'Contact',
    ];

    for(let i = 0; i < 3; i++) {
      const button = document.createElement('button');
      button.textContent = navBtns[i];
      nav.append(button)
    }

    header.append(nav);
    return header
   }
  