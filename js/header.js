import { menuArray, get } from "./utilis.js";

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    let mainBox = get(".header__bottom-links");
    let otherProducts = get(".header__other-btn");
    let otherDownArrow = get(".arrow__down");
    let otherXArrow = get(".arrow__up");
    let otherText = get(".header__other-text");
    let likesButton = get(".header__like-button");
    let basketButton = get(".header__basket-button");
    let headerBottomLinks = get(".header__bottom-wrapper");
    let productNames = get(".header__bottom-secInner");
    let headerShadow = get(".header__shadow")

    let display = menuArray
        .map((item, index) => {
            let { category } = item;

            if (index < 9) {
                return `
                <ul class="header__link-list">
                    <li class="header__list-item">
                        <div>
                            <i class="product__icon fa-solid fa-shop"></i>
                            <a class="header__link" href="">
                                ${category[0]}
                            </a>
                        </div>
                        <i class="right__arrow fa-solid fa-chevron-right"></i>
                    </li>
                </ul>`;
            }
        })
        .join("");

    mainBox.innerHTML += display;

    likesButton.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "../html/likes.html";
  });

  basketButton.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "../html/basket.html";
  });

    let headerListItems = document.querySelectorAll(".header__list-item");

    let mouseOverTimeout;
    let currentClickedItem = null;
    
    otherProducts.addEventListener("click", (e) => {
        e.preventDefault();
        if (otherDownArrow.classList.contains("open")) {
            otherDownArrow.classList.remove("open");
            otherDownArrow.classList.add("hidden");
            headerBottomLinks.classList.add("open");
            otherText.style.display = "none";
            otherXArrow.classList.remove("hidden");
            otherXArrow.classList.add("open");
            headerShadow.style.boxShadow = " 0px 12px 22px 9px rgba(34, 60, 80, 0.2)"
            updateEventListeners();
        } else {
            otherXArrow.classList.remove("open");
            otherXArrow.classList.add("hidden");
            otherDownArrow.classList.remove("hidden");
            otherDownArrow.classList.add("open");
            headerBottomLinks.classList.remove("open");
            otherText.style.display = "inline-block";
            headerShadow.style.boxShadow = "none"
        }
    });
    
    function updateEventListeners() {
      headerListItems.forEach((item) => {
          item.addEventListener("click", () => handleItemClick(item));
          item.addEventListener("mouseover", () => handleMouseOver(item));
      });
  }
  
  function handleItemClick(item) {
      clearTimeout(mouseOverTimeout);
      if (currentClickedItem) {
          currentClickedItem.classList.remove("clicked");
      }
  
      currentClickedItem = item;
  
      item.classList.add("clicked");
  
      displayProducts(item.textContent.trim());
  }
  
  function handleMouseOver(item) {
      clearTimeout(mouseOverTimeout);
  
      if (!currentClickedItem) {
          mouseOverTimeout = setTimeout(() => {
              displayProducts(item.textContent.trim());
          }, 2000);
      }
  }
  
  function displayProducts(category) {
    let displayProducts = menuArray
        .filter((data) => {
            return (
                data.category === category ||
                (Array.isArray(data.category) && data.category[0] === category)
            );
        })
        .map((data) => {
            return `
                <li>
                    <a class="bottom__hover-link" href="">${data.title.split(" ")[0]} ${data.title.split(" ")[1]}</a>
                </li>
            `;
        })
        .join("");

    productNames.innerHTML = `
        <div>
            <a href="headerFullSingle.html?category=${category}" class="hover__title">${category}  <i class="fa-solid fa-chevron-right" style="color: #000000; margin-left: 5px; padding-bottom: -10px;"></i></a>
            <ul class="hover__list">${displayProducts}</ul>
        </div>
    `;
}
  
});


