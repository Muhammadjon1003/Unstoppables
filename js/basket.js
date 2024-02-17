import { header } from "./header.js"
import {footer} from "./footer.js"
header()
footer()

 let cartStorage = [
  {
    id: 1,
    title: "Парфюмерная вода Avon Incandessence Soleil, 50 мл",
    category: ["perfume"],
    price: 30,
    discountprice: 50
  },
  {
    id: 2,
    title: "Парфюмерная вода Avon Incandessence Soleil, 50 мл",
    category: ["perfume"],
    price: 10,
    discountprice: 50

  },
  {
    id: 3,
    title: "Парфюмерная вода Avon Incandessence Soleil, 50 мл",
    category: ["perfume"],
    price: 20,
    discountprice: 50
  }
]

let cartProducts = document.querySelector('.cart_products')
function displayProducts(){
cartStorage.map(product =>{
  const {id, title, price, category, discountprice} = product
  let producthtml = `
  <hr class="hr">
  <div class="cart_product" id="${id}">
    <input type="checkbox" class="checkbox">
    <img src="https://cdn.dummyjson.com/product-images/2/1.jpg" alt="Product 3">
    <div class="product_info">
      <div class="product_title">
        <p>${title}</p>
        <button class="remove_cart"><i class="fa-solid fa-trash-can fa-lg"></i> Удалить</button>
      </div>
      <div class="product_price">
        <p>Category: ${category}</p>
        <div class="product_price_count">
          <div class="product_count">
            <div class="count">
              <button class="decrement-btn"><i class="fa-solid fa-minus"></i></button>
              <span class="quantity">0</span>
              <button class="increment-btn"><i class="fa-solid fa-plus"></i></button>
            </div>
            <p> ${price*1000} sum/per</p>
          </div>
          <div class="price">
            <p><span class="product_price1">${price*1000} som</span></p>
            <p><span class="product_price2">${discountprice*1000} som</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  // let productHTML = producthtml.join('')
  cartProducts.innerHTML += producthtml
})
}
displayProducts()
document.addEventListener("DOMContentLoaded", function() {
  const incrementButtons = document.querySelectorAll(".increment-btn");
  const decrementButtons = document.querySelectorAll(".decrement-btn");
  const quantities = document.querySelectorAll(".quantity");
  const regularPriceElements = document.querySelectorAll(".product_price1"); // Selecting regular price elements
  const discountPriceElements = document.querySelectorAll(".product_price2"); // Selecting discount price elements
  const regularTotalPriceElement = document.getElementById("totalPrice");
  const discountTotalPriceElement = document.getElementById("currentPrice");
  const individualCheckboxes = document.querySelectorAll(".checkbox");
  const selectAllCheckbox = document.getElementById("all_checkbox");
  const differenceOfTotals = document.getElementById('difference');
  let regularTotalPrice = 0;
  let discountTotalPrice = 0;
  const initialCheckedState = Array.from(individualCheckboxes).map(checkbox => checkbox.checked); // Initial state of checkboxes

  function calculateTotalPrice() {
      regularTotalPrice = 0;
      discountTotalPrice = 0;

      individualCheckboxes.forEach((checkbox, index) => {
          if (checkbox.checked) {
              let count = parseInt(quantities[index].textContent);
              regularTotalPrice += parseFloat(regularPriceElements[index].textContent) * count;
              discountTotalPrice += parseFloat(discountPriceElements[index].textContent) * count;
          }
      });

      regularTotalPriceElement.textContent = regularTotalPrice.toFixed(2);
      discountTotalPriceElement.textContent = discountTotalPrice.toFixed(2);

      let difference = discountTotalPrice - regularTotalPrice;
      differenceOfTotals.textContent = difference.toFixed(2);
  }

  function initializeProductListeners(index) {
      // Define increment and decrement handlers
      function incrementHandler() {
          let count = parseInt(quantities[index].textContent);
          count++;
          quantities[index].textContent = count;
          calculateTotalPrice();
      }

      function decrementHandler() {
          let count = parseInt(quantities[index].textContent);
          count--;
          if (count >= 0) {
              quantities[index].textContent = count;
              calculateTotalPrice();
          }
      }

      // Add event listeners
      incrementButtons[index].addEventListener('click', incrementHandler);
      decrementButtons[index].addEventListener('click', decrementHandler);
  }

  individualCheckboxes.forEach((checkbox, index) => {
      checkbox.checked = true; // Set all checkboxes to be checked by default
      initializeProductListeners(index);

      checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
              initializeProductListeners(index);
              calculateTotalPrice();
          } else {
              // Remove event listeners when checkbox is unchecked
              incrementButtons[index].removeEventListener('click', null);
              decrementButtons[index].removeEventListener('click', null);
              calculateTotalPrice();
          }
      });
  });

  // Add event listener to "select all" checkbox
  selectAllCheckbox.checked = true; // Set "Select All" checkbox to be checked by default
  selectAllCheckbox.addEventListener('change', function() {
      individualCheckboxes.forEach((checkbox, index) => {
          checkbox.checked = selectAllCheckbox.checked;
          if (selectAllCheckbox.checked) {
              initializeProductListeners(index);
          } else {
              // Remove event listeners when "select all" checkbox is unchecked
              incrementButtons[index].removeEventListener('click', null);
              decrementButtons[index].removeEventListener('click', null);
              calculateTotalPrice();
          }
      });
      calculateTotalPrice();
  });

  calculateTotalPrice();
});







