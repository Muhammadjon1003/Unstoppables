import { get, menuArray,removeItemFromStorage, addItemToStorage, getStorageItems, addToCart, likeBg } from "./utils.js";
import { header } from "./header.js";
header()
let cardBox = get(".singlePage__main-box");
let mainNavbar = get(".main_navbar");
    console.log(cardBox);

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
        const fragment = document.createDocumentFragment();
            let displayProducts = menuArray.filter((data) => {
                    return (
                        (data.category === category) ||
                        (Array.isArray(data.category) && data.category.includes(category))
                    );
                })
                displayProducts.map((data) => {
                    const { id, title, price, rating, image, discountPrice } = data;
    
                    let random = parseInt(Math.random() * 2000);
                    let productHTML = `
                        <div class="product" id="${id}">
                                         <button class="like_icon">
                                        </button>
                                        <a href="./single.html?id=${id}">
                                             <div class="product_image">
                                                 <img src="${image}"  alt="">
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
                                        <button class="cart_icon" id="${id}"><img src="../assets/icons/shopping-bag.png" alt=""></button>
                                     </div>
                        </div>
                    `;
                
            const tempDiv = document.createElement('div');
      tempDiv.innerHTML = productHTML;
    
    
      fragment.appendChild(tempDiv.firstElementChild);
      cardBox.appendChild(fragment);
    })

    };
    
    
        displayProducts(category);
    

    mainNavbar.innerHTML = `
    <a href="../html/headerFullSingle.html?category=${category}">${category} <i class="fa-solid fa-chevron-right"></i></a> 
    `;
    addToCart()
    likeBg()
})