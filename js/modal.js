import { get } from "./utils.js";


let cartIcon = get(".cart_icon");
console.log(cartIcon);
 function modal() {
    let cartIcon = get(".cart_icon");
    let modalCont = get(".modal");
    let close = get(".close")

    cartIcon.addEventListener("click", function() {
        modalCont.style.display = "block";
        console.log("hello");
    });
}









// displayModal(1)