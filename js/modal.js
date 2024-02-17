import { get } from "./utils.js";

export function modal() {
    let cartIcon = get(".cart_icon");
    let modalCont = get(".modal");
    let close = get(".close")

    cartIcon.addEventListener("click", function() {
        modalCont.style.display = "block";
    });
}