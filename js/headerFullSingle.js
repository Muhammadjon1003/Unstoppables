import { get, menuArray } from "./utilis.js";

let cardBox = get(".singlePage__main-box");

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // const productNames = get("#productNames"); 

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function formatDiscountPrice(discountPrice) {
        return discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function displayProducts(category) {
        let displayProducts = menuArray
            .filter((data) => {
                return (
                    (data.category === category) ||
                    (Array.isArray(data.category) && data.category.includes(category))
                );
            })
            .map((data) => {
                const { id, title, price, rating, image, discountPrice } = data;

                let random = parseInt(Math.random() * 2000);

                return `
                    <div class="product" class="product__main-box" id="${id}">
                    <div class="product" class="product__main-box" id="${id}">
                                     <button class="like_icon">
                                     <img src="./images/like_icon.svg" alt="like it">
                                    
                                    </button>
                                    <a href="./single.html?id=${id}">
                                         <div class="product_image">
                                             <img src="${image}" alt="">
                                         </div>
                                         <div class="product_description">
                                             <div class="product_desc">
                                                 <div class="product_title"><p class="product_title">${title}</p></div>
                                                 <div class="product_rating">
                                                     <span class="fa-solid fa-star star_rating fa-xs" style="color: #FFD43B;"></span>
                                                     <p>${rating}</p>
                                                     <p>(${random} отзывов)</p>
                                                 </div>
                                             <div class="product_monthly_price">
                                                 <p>${parseInt(discountPrice * 1000 / 6)} сум/мес</p>
                                             </div>
                                             <div class="product_price">
                                                 <div class="product_price_desc">
                                                     <p class="first_price">${formatPrice(price * 1000)} сум</p>
                                                     <p class="discount_price">${formatDiscountPrice(discountPrice * 1000)} сум</p>
                                                    </div>
                                                </div>
                                            </div>
                                         </div>
                                    </a>
                                    <button class="cart_icon" id="${id}"><img src="./images/shopping-bag.png" alt=""></button>
                                 </div>
                    </div>
                `;
            })
            .join("");

        cardBox.innerHTML = `
            <div>
                <a href="headerFullSingle.html?category=${category}" class="hover__title"><h3>${category}</h3><i class="left__hover fa-solid fa-chevron-right"></i></a>
                <div class="hover__list">${displayProducts}</div>
            </div>
        `;
    }

    displayProducts(category);

});
