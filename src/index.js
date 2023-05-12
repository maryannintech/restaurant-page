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

const homePage = document.querySelector(".home");

function init() {
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn.addEventListener("click", () => {
    if (homeClicked === false) {
      homeContent();
      homeClicked = false;
      menuPage.style.display = "none";
      contactPage.style.display = "none";
    }
    menuClicked = false;
    contactClicked = false;
  });

  const menuBtn = document.querySelector(".menuBtn");
  const menuPage = document.querySelector(".menu");
  menuBtn.addEventListener("click", () => {
    if (menuClicked === false) {
      menuContent();
      menuClicked = true;
      homePage.style.display = "none";
      contactPage.style.display = "none";
    }
    homeClicked = false;
    contactClicked = false;
  });

  const contactBtn = document.querySelector(".contactBtn");
  const contactPage = document.querySelector(".contact");
  contactBtn.addEventListener("click", () => {
    if (contactClicked === false) {
      contactContent();
      contactClicked = true;
      homePage.style.display = "none";
      menuPage.style.display = "none";
    }
    homeClicked = false;
    menuClicked = false;
  });
}

init();
