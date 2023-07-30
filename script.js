'use strict';
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const carrousel = document.querySelector('.carrousel');
const hamburger = document.querySelector('.nav__hamburger-container');
const navUl = document.querySelector('.nav__ul-phone');
let CarrouselIndex = 0;

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
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
        navUl.style.display = 'flex';
        navUl.style.animation = 'appear 0.3s forwards'
    }else{
        navUl.style.animation = 'desappear 0.3s forwards'
        setTimeout(()=>{
            navUl.style.display = 'none';
        },300)
    }
})