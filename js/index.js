import { menuArray, get, getStorageItems} from "./utils.js";

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    let mainBox = get(".header__bottom-links");
    let otherProducts = get(".header__other-btn");
    let otherXArrow = get(".arrow__up");
    let likesButton = get(".header__like-button");
    let basketButton = get(".header__basket-button");
    let productNames = get(".header__bottom-secInner");
    let headerSelect = get(".header__select")
    let otherDownArrow = get(".arrow__down");
    let otherText = get(".header__other-text");
    let headerBottomLinks = get(".header__bottom-wrapper");
    let headerShadow = get(".header__shadow")
    let selectDefault = get(".product__default")
    let selectX = get(".selectX")
    let headerUser = get(".header__user-name")
   


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

    function toggleMenu() {
       
      
        
        if (otherDownArrow.classList.contains("open")) {
            otherDownArrow.classList.remove("open");
            otherDownArrow.classList.add("hidden");
      
            selectDefault.classList.remove("open");
            selectDefault.classList.add("hidden");
      
            headerBottomLinks.classList.add("open");
            otherText.style.display = "none";
            otherXArrow.classList.remove("hidden");
            otherXArrow.classList.add("open");
            
            selectX.classList.remove("hidden");
            selectX.classList.add("open");
      
            headerShadow.style.boxShadow = "0px 12px 22px 9px rgba(34, 60, 80, 0.2)";
            updateEventListeners();
        } else {
            otherXArrow.classList.remove("open");
            otherXArrow.classList.add("hidden");
      
            selectX.classList.remove("open");
            selectX.classList.add("hidden");
      
            otherDownArrow.classList.remove("hidden");
            otherDownArrow.classList.add("open");
      
            selectDefault.classList.remove("hidden");
            selectDefault.classList.add("open");
      
            headerBottomLinks.classList.remove("open");
            otherText.style.display = "inline-block";
            headerShadow.style.boxShadow = "none";
        }
      }
    
    
    headerSelect.addEventListener("click", (e) => {
        e.preventDefault();
        
       
        toggleMenu();

        otherXArrow.classList.add("hidden");

    });
    
    otherProducts.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
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
            <a href="headerFullSingle.html?category=${category}" class="hover__title"><h3>${category}</h3><i class="left__hover fa-solid fa-chevron-right" "></i></a>
            <ul class="hover__list">${displayProducts}</ul>
        </div>
    `;
}


let localKey = "user"

let  localStore = getStorageItems(localKey)

console.log(localStore);
headerUser.textContent = localStore.username





});
document.addEventListener('DOMContentLoaded', function() {
    let discountDiv = document.querySelector(".discountDiv")
    let electronicsDiv = document.querySelector(".electronicsDiv")
    let technicDiv = document.querySelector(".technicDiv")
    let clothesDiv = document.querySelector(".clothesDiv")
    function displayProducts(categoryOfProduct,productDiv,startIndex,productsNumber){
        let newArray = []
    menuArray.map(item =>{
        const {category} = item
        let productCategory, discountCategory; // Declare variables outside the if statement blocks
    
        if (typeof category === 'string') {
            // If category is a string
            productCategory = category;
        } else if (Array.isArray(category) && category.length === 2) {
            // If category is an array with two elements
            productCategory = category[0];
            discountCategory = category[1];
        } else {
            console.log("Invalid category format", id);
        }
        if (discountCategory == categoryOfProduct || productCategory == categoryOfProduct) {
            newArray.push(item)
        }
    })
    console.log(newArray);
        let endIndex = startIndex + productsNumber
        let productsPerPage =newArray.slice(startIndex, endIndex)
        const fragment = document.createDocumentFragment();
        productsPerPage.map(product => {
            const { id, title, price, rating, image, discountPrice } = product;
            function formatPrice(price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
            function formatDiscountPrice(discountPrice) {
                return discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }   
           
            let random = parseInt(Math.random() * 2000);
            let productHTML = `
                <div class="product">
                    <button class="like_icon"></button>
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
                    <button class="cart_icon"><img src="./images/shopping-bag.png" alt=""></button>
                </div>
            `;
        
      // Create a temporary div to hold the product HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = productHTML;
    
      // Attach event listener to the like icon within the current product
      const likeIcon = tempDiv.querySelector('.like_icon');
      let isliked = false
      likeIcon.addEventListener('click', function(event) {
          event.stopPropagation();
          if(!isliked){
            likeIcon.style.backgroundImage = "url('./images/red_like_icon.svg')";
            isliked = true
          }else{
            likeIcon.style.backgroundImage = "url('./images/like_icon.svg')";
            isliked = false
          }
      });
    
      // Append the product HTML from the temporary div to the Document Fragment
      fragment.appendChild(tempDiv.firstElementChild);
    });
    
    // Append the Document Fragment to the productDiv
    productDiv.appendChild(fragment);
        
    }
    displayProducts("Акция",discountDiv,0, 10)
    displayProducts("Электроника",electronicsDiv,0, 10)
    displayProducts("Бытовая техника",technicDiv,0, 5)
    displayProducts("Одежда",clothesDiv, 0, 5)
    // displayProducts("Хобби и творчество")
    // Attach event listener to the button after the DOM has fully loaded
    let showMoreButton = document.querySelector('.show_more_button')
    let linkButton = document.getElementById('linkButton')
    showMoreButton.addEventListener('click', function() {
         displayProducts("Акция", discountDiv, 10, 10);
         showMoreButton.style.display = 'none'
         linkButton.style.display = 'block'
     });
     linkButton.addEventListener('click', function(){
         window.location.href = 'https://uzum.uz/uz/category/arzon-narxlar--330'
     })
    
    });


    function appleStore(){
        location.href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056"
    }
    function playMarket(){
        location.href="https://play.google.com/store/apps/details?id=uz.uzum.app"
    }
    function instagram(){
        location.href="https://www.instagram.com/uzum.market/"
    }
    function telegram(){
        location.href="https://t.me/uzum_market"
    }
    function youtube(){
        location.href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
    }
    function facebook(){
        location.href="https://www.facebook.com/uzummarket"
    }
    const images = document.querySelectorAll('.slider-img');
    const controlls = document.querySelectorAll('.controlls');
    function face(){
        location.href="https://uzum.uz/ru/category/nizkie-ceny--314";
    }
    function keshbek(){
        location.href="https://uzum.uz/ru/promo/uzcard"
    }
    function grechka(){
        location.href="https://uzum.uz/ru/product/grechka-oila-tanlovi-900-g-697953"
    }
    function stiralniy(){
        location.href="https://uzum.uz/ru/product/stiralnaya-mashina-toshiba-671072"
    }
    
    
    
    let imageIndex = 0;
    function show(index) {
        images[imageIndex].classList.remove('active');
        images[index].classList.add('active');
        imageIndex = index;
    }
    
    controlls.forEach((e) => {
        e.addEventListener('click', () => {
            if (event.target.classList.contains('prev')) {
                let index = imageIndex - 1;
    
                if (index < 0) {
                    index = images.length - 1;
                }
    
                show(index);
            } else if (event.target.classList.contains('next')) {
                let index = imageIndex + 1;
                if (index >= images.length) {
                    index = 0;
                }
                show(index);
            }
        })
    })
    
    show(imageIndex);
    
