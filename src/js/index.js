window.$ = window.jQuery = require('jquery');

import Swiper, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Autoplay, Navigation]);


$(document).ready(function () {

  //Mobile menu
  $('.burger-btn').on('click', function () {
    $('.menu-icon').toggleClass('opened');
    //$('body').toggleClass('no-scroll');
  })
  //

  //swiper
  const swiper = new Swiper('.header-slider.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    //autoplay 5s
    autoplay: {
      delay: 5000,
    },
    //--
    //количество слайдов в видимой области
    slidesPerView: 1,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });

  //Anchor links
  $('a').on('click', function (e) {
    e.preventDefault();
    const hh = $('.header').outerHeight();
    if (this.hash !== '') {
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - hh
      }, 300, function () {
        window.location.hash = hash - hh;
      })
    }
  })




})