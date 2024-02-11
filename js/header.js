import { menuArray, get } from "./utilis.js";
let mainBox = get(".header__bottom-links");
let otherProducts = get(".header__other-btn");
let otherDownArrow = get(".arrow__down");
let otherXArrow = get(".arrow__up");
let otherText = get(".header__other-text");

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  let display = menuArray
    .map((item, index) => {
      let { category } = item;

      if (index < 9) {
        return `
        <ul class="header__link-list">
          <li>
            <a href="">
             ${category[0]}
            </a>
          </li>
        </ul>
      `;
      }
    })
    .join(""); // Apply join to the result of map

  mainBox.innerHTML += display;

  otherProducts.addEventListener("click", (e) => {
    e.preventDefault();
    if (otherDownArrow.classList.contains("open")) {
      console.log("hidden");
      otherDownArrow.classList.remove("open");
      otherDownArrow.classList.add("hidden");
      otherText.style.display = "none";

      otherXArrow.classList.remove("hidden");
      otherXArrow.classList.add("open");
    } else {
      console.log("hidden");
      otherXArrow.classList.remove("open");
      otherXArrow.classList.add("hidden");

      otherDownArrow.classList.remove("hidden");
      otherDownArrow.classList.add("open");
      otherText.style.display = "inline-block";
    }
  });
});
