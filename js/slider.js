
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


const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;
const intervalTime = 3000;
let slideInterval;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

function showNextImage() {
    let nextIndex = imageIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }
    show(nextIndex);
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        clearInterval(slideInterval); 
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('next')) {
            showNextImage();
        }
    })
})

slideInterval = setInterval(showNextImage, intervalTime);

show(imageIndex);

