window.$ = window.jQuery = require('jquery');

//Mobile menu
$('.header__navigation-button').on('click', function() {
    $('.header__navigation').toggleClass('opened');
    $('body').toggleClass('no-scroll');
})

$(document).ready(function (){

})



//Anchor links
// $('a').on('click', function (e) {
//     e.preventDefault();
//     const hh = $('.header').outerHeight();
//     if(this.hash !== '') {
//         const hash = this.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top - hh
//         }, 300, function () {
//             window.location.hash = hash - hh;
//         })
//     }
// })



