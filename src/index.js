import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";
import contactContent from "./modules/contact";
import makeNav from "./modules/nav";

let homeClicked = true;
let menuClicked = false;
let contactClicked = false;

const contentDIV = document.querySelector("#content");

makeNav();
homeContent();
menuContent();
contactContent();

const homePage = document.querySelector(".home");
console.log(homePage);
const menuPage = document.querySelector(".menu");
console.log(menuPage);
const contactPage = document.querySelector(".contact");
console.log(contactPage);

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", () => {
  if (homeClicked === false) {
    homeContent();
    homeClicked = false;
    menuPage.style.display = "none";
    contactPage.style.display = "none";
  } else {
  }
  menuClicked = false;
  contactClicked = false;
});

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  if (menuClicked === false) {
    menuContent();
    menuClicked = true;
    homePage.style.display = "none";
    contactPage.style.display = "none";
  } else {
  }
  homeClicked = false;
  contactClicked = false;
});

const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener("click", () => {
  if (contactClicked === false) {
    contactContent();
    contactClicked = true;
    homePage.style.display = "none";
    menuPage.style.display = "none";
  } else {
  }
  homeClicked = false;
  menuClicked = false;
});
