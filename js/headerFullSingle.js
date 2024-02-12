import { get, menuArray } from "./utilis.js";

let cardBox = get(".singlePage__main-box");




document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    cardBox.innerHTML = `<h2>${category}</h2>`;
});