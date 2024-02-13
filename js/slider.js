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
