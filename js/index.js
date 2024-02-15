import { header } from "./header.js";
import { main } from "./main.js";
import { footer } from "./footer.js";
import { menuArray } from "./utils.js";

header()
main()
footer()

function displayModal(productId){
    const product = menuArray.find(item => item.id === productId);
    let modalElement = document.querySelector(".modal");
    let modalImg = document.querySelector(".modal-img");
    let modalTitle = document.querySelector(".modal-title");
    let modalPrice = document.querySelector(".modal-price");
    let modalColorImg = document.querySelector(".modal-color-img");
    let modalProductAmt = document.querySelector(".modal-amt-product");
    let modalProductRemove = document.querySelector(".fa-solid .fa-minus");
    let modalProductAdd = document.querySelector(".fa-solid .fa-plus");

    modalElement.style.display = "block";
    modalImg.src  = product.image;
    modalTitle.textContent = product.title;
    modalColorImg.src = product.image;
    modalPrice.textContent = formatPrice(product.price * 1000);
    modalProductAmt.textContent = 1;

    // modalProductRemove.addEventListener('click', function(){
    //     let currentValue = parseInt(modalProductAmt.textContent);
    //     if (currentValue > 1) {
    //         currentValue -= 1;
    //         modalProductAmt.textContent = currentValue;
    //     }
    // });
    
    // modalProductAdd.addEventListener('click', function(){
    //     let currentValue = parseInt(modalProductAmt.textContent);
    //     currentValue += 1;
    //     modalProductAmt.textContent = currentValue;
    // });
    

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    

    let close = document.querySelector(".close");
    close.addEventListener('click', function(){
        modalElement.style.display = 'none';
    })
}
displayModal(1)
