  export default function loadHomePage() {
    const content = document.querySelector('#content');
  
    // create header
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

    // create section1 and section2 divs
    const main = document.createElement('main');

    const section1 = document.createElement('div');
    section1.classList.add('section1');
    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    
    const title = document.createElement('div');
    title.classList.add('title');
    const titleText1 = document.createElement('p');
    titleText1.textContent = 'GOURMET';
    const titleText2 = document.createElement('p');
    titleText2.textContent = 'BURGER.';
    title.append(titleText1, titleText2);

    const homeText = document.createElement('div');
    const homePara = document.createElement('p');
    homePara.textContent = "At Gourmet Burger we're passionate about delivering the ultimate burger experience to our customers. Our juicy and flavorful burgers are made with the finest quality ingredients, from locally-sourced meat to artisanal buns. Come visit us and taste the difference that our commitment to quality and creativity makes in every bite.";
    homeText.append(homePara);
    leftSide.append(title, homeText);

    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');
    const section1Img = document.createElement('img');
    section1Img.src = 'img/section1-pic.jpg';
    section1Img.alt = 'burgers';
    rightSide.append(section1Img);

    section1.append(leftSide, rightSide);

    const section2 = document.createElement('div');
    section2.classList.add('section2');
    
    const picContainer = document.createElement('div');
    picContainer.classList.add('pic-container');
    const section2Img = document.createElement('img');
    section2Img.src = 'img/section2-pic.jpg';
    section2Img.alt = 'burgers';
    picContainer.append(section2Img);

    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');
    const review = document.createElement('div');
    review.classList.add('review');
    const reviewTitle = document.createElement('h2');
    reviewTitle.textContent = 'Reviews';
    const reviewText = document.createElement('p');
    reviewText.textContent = `"The quality of the ingredients was top-notch and the flavors were incredibly delicious. The buns were fresh and perfectly toasted and the meat was cooked to perfection. I can't wait to go back and try more of their amazing creations!"`
    review.append(reviewTitle, reviewText);
    reviewContainer.append(review)

    section2.append(picContainer, reviewContainer);

    //append section1 and section2 to main
    main.append(section1, section2);

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'Built by erinsophie'
  
    content.append(header, main, footer);
  }

 