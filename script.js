'use strict';
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const carrousel = document.querySelector('.carrousel');
let CarrouselIndex = 1;

next.addEventListener('click',()=>{
    if (CarrouselIndex == 2) CarrouselIndex = -1;
    carrousel.style.transform = `translateX(calc((-100%/3)*${CarrouselIndex+1}))`;
    CarrouselIndex++;
    console.log(CarrouselIndex);
})
previous.addEventListener('click', ()=>{
    if (CarrouselIndex == 0) CarrouselIndex = 3;
    carrousel.style.transform = `translateX(calc((-100%/3)*${CarrouselIndex-1}))`;
    CarrouselIndex--;
    console.log(CarrouselIndex);
})