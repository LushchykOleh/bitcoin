window.$ = window.jQuery = require('jquery');



$(document).ready(function (){

//Mobile menu
$('.burger-btn').on('click', function() {
    $('.menu-icon').toggleClass('opened');
    //$('body').toggleClass('no-scroll');
})


//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      //draggable: true
    },
  });


//Anchor links
$('a').on('click', function (e) {
    e.preventDefault();
     const hh = $('.header').outerHeight();
     if(this.hash !== '') {
         const hash = this.hash;
         $('html, body').animate({
             scrollTop: $(hash).offset().top - hh
         }, 300, function () {
             window.location.hash = hash - hh;
         })
     }
 })




})
