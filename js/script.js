$(function () {
    $('.testimony__rev-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 6000,
    })
})

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const button = document.querySelector('.header__button');
const body = document.body;

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    e.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    button.classList.toggle("active");
    body.classList.toggle("lock");
}