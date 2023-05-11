import "./style.css";
import homeContent from "./modules/home";
import menuContent from "./modules/menu";
import contactContent from "./modules/contact";

homeContent();

const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  menuContent();
});

const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener("click", () => {
  contactContent();
});
