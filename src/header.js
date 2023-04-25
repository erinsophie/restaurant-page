   // create header
    export default function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const nav = document.createElement('nav');
 
    const button1 = document.createElement('button');
    button1.textContent = 'Home';
    const button2 = document.createElement('button');
    button2.textContent = 'Menu';
    const button3 = document.createElement('button');
    button3.textContent = 'Contact';
 
    nav.append(button1, button2, button3);
    header.append(nav);
    return header
   }
  