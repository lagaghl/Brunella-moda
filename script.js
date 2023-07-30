'use strict';
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const carrousel = document.querySelector('.carrousel');
const hamburger = document.querySelector('.nav__hamburger-container');
const navUlPhone = document.querySelector('.nav__ul-phone');
const logo = document.querySelector('.nav__logo');
const navUl = document.querySelector('.nav__ul');
const options = document.querySelectorAll('.product__options');
const catalog = document.getElementById('catalog');
let CarrouselIndex = 0;
let scrollPos = 0;

//Functions:
const updateFavorites = (parent)=>{
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let index = favorites.indexOf(parent.id);
    if (index==-1) {
        favorites.push(parent.id);
    }else{
        favorites.splice(index,1);
    }
    localStorage.setItem('favorites',JSON.stringify(favorites));
}
const showFavorites = ()=>{
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.length == 0) return undefined;
    for (const favorite of favorites) {
        const parent = document.getElementById(favorite);
        const heart = document.querySelector(`#${favorite} .product__save`);
        fillHeart(heart);
        catalog.prepend(parent);
    }
}
const fillHeart = (heart)=>{
    heart.src = 'images/logos/corazon-lleno.svg';
    heart.classList.add('clicked');

}
const toggleSaved = (heart)=>{
    const parent = heart.parentNode.parentNode;
    if (heart.classList.contains('clicked')) {
        heart.src = 'images/logos/corazon-vacio.svg';
        heart.classList.remove('clicked');
    } else{
        fillHeart(heart)
        catalog.prepend(parent);
    }
    updateFavorites(parent);
}
const addToCart = (id)=>{
    console.log('estamos trabajando en eso XD');
}
//Mostrar los favoritos:

showFavorites();

//EventListeners:

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
    parent.addEventListener('focus',()=>{
        option.classList.add('product__options-visible');
    })
    parent.addEventListener('blur',()=>{
        option.classList.remove('product__options-visible');
    })
    option.addEventListener('click',(e)=>{
        const parentId = parent.id;
        const target = e.target;
        if (target.classList.contains('product__buy')) {
            addToCart(parentId);
        }else if(target.classList.contains('product__save')){
            toggleSaved(target);
        }
    })
}