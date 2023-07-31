'use strict';
const hamburger = document.querySelector('.nav__hamburger-container');
const navUlPhone = document.querySelector('.nav__ul-phone');
const logo = document.querySelector('.nav__logo');
const navUl = document.querySelector('.nav__ul');
let CarrouselIndex = 0;
let scrollPos = 0;

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
