
export default function loadHome() {
  const home = document.createElement('div')

  // create section1 and section2 divs
  const main = document.createElement("main");

  const section1 = document.createElement("div");
  section1.classList.add("section1");
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");

  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("p");
  titleText.innerHTML = `GOURMET<br>BURGER.`;
  title.append(titleText);

  const homeText = document.createElement("div");
  const homePara = document.createElement("p");
  homePara.textContent =
    "At Gourmet Burger we're passionate about delivering the ultimate burger experience to our customers. Our juicy and flavorful burgers are made with the finest quality ingredients, from locally-sourced meat to artisanal buns. Come visit us and taste the difference that our commitment to quality and creativity makes in every bite.";
  homeText.append(homePara);
  leftSide.append(title, homeText);

  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  const section1Img = document.createElement("img");
  section1Img.src = "img/section1-pic.jpg";
  section1Img.alt = "burgers";
  rightSide.append(section1Img);

  section1.append(leftSide, rightSide);

  const section2 = document.createElement("div");
  section2.classList.add("section2");

  const picContainer = document.createElement("div");
  picContainer.classList.add("pic-container");
  const section2Img = document.createElement("img");
  section2Img.src = "img/section2-pic.jpg";
  section2Img.alt = "burgers";
  picContainer.append(section2Img);

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review-container");
  const review = document.createElement("div");
  review.classList.add("review");
  const reviewTitle = document.createElement("h2");
  reviewTitle.textContent = "Reviews";
  const reviewText = document.createElement("p");
  reviewText.textContent = `"The quality of the ingredients was top-notch and the flavors were incredibly delicious. The buns were fresh and perfectly toasted and the meat was cooked to perfection. I can't wait to go back and try more of their amazing creations!"`;
  review.append(reviewTitle, reviewText);
  reviewContainer.append(review);

  section2.append(picContainer, reviewContainer);

  main.append(section1, section2);

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "Built by erinsophie";

  home.append(main, footer);
  return home;
}
