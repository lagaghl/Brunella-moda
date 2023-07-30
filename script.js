'use strict';
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const carrousel = document.querySelector('.carrousel');
const hamburger = document.querySelector('.nav__hamburger-container');
const navUlPhone = document.querySelector('.nav__ul-phone');
const logo = document.querySelector('.nav__logo');
const navUl = document.querySelector('.nav__ul');
const options = document.querySelectorAll('.product__options');
let CarrouselIndex = 0;
let scrollPos = 0;

next.addEventListener('click',()=>{
    if (CarrouselIndex == 2) CarrouselIndex = -1;
    carrousel.style.transform = `translateX(calc((-100%/3)*${CarrouselIndex+1}))`;
    CarrouselIndex++;
})
previous.addEventListener('click', ()=>{
    if (CarrouselIndex == 0) CarrouselIndex = 3;
    carrousel.style.transform = `translateX(calc((-100%/3)*${CarrouselIndex-1}))`;
    CarrouselIndex--;
})
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open');
    if (hamburger.classList.contains('open')) {
        navUlPhone.style.display = 'flex';
        navUlPhone.style.animation = 'appear 0.3s forwards'
    }else{
        navUlPhone.style.animation = 'desappear 0.3s forwards'
        setTimeout(()=>{
            navUlPhone.style.display = 'none';
        },300)
    }
})

addEventListener('scroll',()=>{
    let currentScroll = window.scrollY;
    if (currentScroll>scrollPos) { //Fue hacia abajo
        logo.style.margin = '2px 45px';
        navUl.style.margin = '15px 45px 0px';
        navUlPhone.style.top = '50px'
    }else{
        logo.style.margin = '15px 45px';
        navUl.style.margin = '25px 45px 0px';
        navUlPhone.style.top = '80px'
    }
    scrollPos=currentScroll;
})
for (const option of options) {
    const parent =  option.parentNode;
    parent.addEventListener('click',()=>{
        option.classList.add('product__options-visible');
    })
    parent.addEventListener('blur',()=>{
        option.classList.remove('product__options-visible');
    })
    option.addEventListener('click',(e)=>{
        const parentId = parent.id;
        let target = e.target;
        if (target.classList.contains('product__options-buy__img')) {
            agregarAlCarrito(parentId);
        }else if(target.classList.contains('product__options-save__img')){
            console.log(typeof(target.src));
            if (target.src == 'images/logos/corazon-vacio.svg') target.src = 'images/logos/corazon-lleno.svg';
            else target.src = 'images/logos/corazon-vacio.svg';
        }
    })
}