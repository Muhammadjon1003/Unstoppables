import { get, menuArray, isliked, removeItemFromStorage, addItemToStorage, getStorageItems } from "./utils.js";
import { header } from "./header.js";

header();


const cardBox = get(".single__page-main");
// const mainNavbar = get(".main_navbar");

console.log(cardBox);

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    function displayProducts(id) {
        let categorySet = false; 

        menuArray.forEach((data) => {
            function formatPrice(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
            function formatDiscountPrice(discountPrice) {
                return discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
          
            if (data.id === id) {
                // console.log(data.id, data.category, data.discountPercentage);
                const { id, title, price, rating, image, discountPrice, category } = data;

                // if (!categorySet) {
                //     mainNavbar.innerHTML = `
                //         <a href="../html/headerFullSingle.html?category=${data.category[0]}">${data.category[0]} <i class="fa-solid fa-chevron-right"></i></a> 
                //     `;
                //     categorySet = true; 
                // }

                // let random = parseInt(Math.random() * 2000);
                let productHTML = 
                
                
                `<div class="single__product" id="${id}">
 
                <div class="row">
                <div class="col-xl-2">
                    <div class="photo">
                        <div class="single__foto">
                       <img src=${image} alt="#" class="miniImg">
                        </div>
                        <div class="single__foto">
                        <img src=${image} alt="#" class="miniImg">
                        </div>
                        <div class="single__foto">
                        <img src=${image} alt="#" class="miniImg">
                        </div>
                        <div class="single__foto">
                        <img src=${image} alt="#" class="miniImg">
                        </div>
                        <div class="single__foto">
                        <img src=${image} alt="#" class="miniImg">
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <img src=${image} alt="#" class="bigImg">
                </div>
                <div class="col-xl-6">
                    <div class="star-favourite">
                        <div class="star">
                            <img src="img/star.svg" alt="#" class="starImg">
                            <p class="star-text">5.0 ( 3 оценки ) 9 заказов</p>
                        </div>
                        <div class="favourite">
                            <svg data-v-1a3a46a8="" width="24" height="24" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" class="ui-icon  filled">
                                <path d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                                      fill="white" fill-opacity="0.8"></path>
                                <path d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                                      fill="#15151A"></path>
                            </svg>
                            <p class="favourite-text">В желания</p>
                        </div>
                    </div>
        
                    <p class="title">${title}</p>
        
                    <div class="info">
                        <div class="texts1">
                            <p class="prodaves">Продавец:</p>
                            <p class="vivo">${category}</p>
                        </div>
                        <div class="texts2">
                            <p class="dastafka">Доставка:</p>
                            <p class="day">1 день, бесплатно</p>
                        </div>
                    </div>
        
                    <hr>
        
                    <p class="svet">Цвет:</p>
        
                    <div class="imgSvet">
                        <img src=${image} alt="#" class="svetImg">
                        <img src=${image} alt="#" class="svetImg">
                    </div>
        
                    <p class="kolichestva">Комплект:</p>
        
                    <div class="buttons">
                        <button type="button" class="sht">10 шт. (подарочная упаковка)</button>
                        <button type="button" class="sht">5 шт. (подарочная упаковка)</button>
                        <button type="button" class="sht">1 шт.</button>
                    </div>
        
                    <p class="kolichestva">Количество:</p>
        
                    <div class="buttons">
                        <div class="button">
                            <button type="button">-</button>
                            <button type="button">1</button>
                            <button type="button">+</button>
                        </div>
                        <p class="btn-text">В наличии 193</p>
                    </div>
        
                    <p class="price">Цена:</p>
        
                    <div class="price-texts">
                        <p class="number">${price * 1000}</p>
                        <p class="skidka">${discountPrice * 1000}</p>
                        <button type="button" class="link"><a href="#" class="link-text">Акция</a></button>
                    </div>
        
                    <div class="zakaz">
                        <button class="Btn1" type="button"><a href="#" class="BtnText">Добавить в корзину</a></button>
                        <button class="Btn2" type="button"><a href="#" class="BtnText">Купить в 1 клик</a></button>
                    </div>
                </div>
            </div>`
            

                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = productHTML;

                const likeIcon = tempDiv.querySelector('.like_icon');
                const cartIcon = tempDiv.querySelector('.cart_icon');
                let likeCount = get('.likes__count');

                // likeIcon.addEventListener('click', function(event) {
                //     event.stopPropagation();
                //     if (!isliked) {
                //         likeIcon.style.backgroundImage = "url('../assets/icons/red_like_icon.svg')";
                //         addItemToStorage(id, "likes");
                //         let likes = getStorageItems('likes');
                //         let count1 = likes.length;
                //         likeCount.innerText = count1;
                //     } else {
                //         likeIcon.style.backgroundImage = "url('../assets/icons/like_icon.svg')";
                //         removeItemFromStorage(id, 'likes');
                //         let likes = getStorageItems('likes');
                //         let count1 = likes.length;
                //         likeCount.innerText = count1;
                //     }
                // });

                cardBox.appendChild(tempDiv);
            }

        });
    }

    displayProducts(Number(id));



    document.addEventListener('DOMContentLoaded', function () {
        const input = document.querySelector('.number-input input');
        const plusBtn = document.querySelector('.plus-btn');
        const minusBtn = document.querySelector('.minus-btn');
      
        plusBtn.addEventListener('click', function() {
          input.value = parseInt(input.value) + 1;
        });
      
        minusBtn.addEventListener('click', function() {
          if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
          }
        });
      });
      
});

