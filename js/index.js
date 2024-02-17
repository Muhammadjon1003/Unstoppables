import { header } from "./header.js";
import { main } from "./main.js";
import { menuArray } from "./utils.js";
import displayModal from "./modal.js";
import { slider } from "./slider.js";

header()
main()
slider()


let cartIcons = document.querySelectorAll(".cart_icon")
cartIcons.forEach(cartIcon =>{
    cartIcon.addEventListener('click', function(){
        let cartIconId = cartIcon.id
       displayModal(cartIconId)          
    })
})
