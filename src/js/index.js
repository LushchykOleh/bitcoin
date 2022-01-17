window.$ = window.jQuery = require('jquery');

// import Swiper, {
//   Autoplay,
//   Navigation,
//   Pagination
// } from 'swiper';
import Swiper from 'swiper';
// import 'swiper/css';

const swiper = new Swiper('#header-slider.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

// //-----swiper
// $(document).ready(function () {
//   /* Инициализация swiper, когда документ загрузился */
//   var mySwiper = new Swiper('.swiper-container', {
//     /* Параметры */

//     loop: true
//   })

//   window.onload = function () {

//     var swiper = new Swiper('.swiper-container', {
//       pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//       },
//     });
//   }
// });
//---end swiper

$(document).ready(function () {

  //Mobile menu
  $('.burger-btn').on('click', function () {
    $('.menu-icon').toggleClass('opened');
    //$('body').toggleClass('no-scroll');
  })


  //swiper
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   //direction: 'vertical',
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     //draggable: true
  //   },
  // });


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