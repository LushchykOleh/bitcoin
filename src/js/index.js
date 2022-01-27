window.$ = window.jQuery = require('jquery');

//Swiper-1-header
import Swiper, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);
//---import marquee from 'jquery.marquee';

$(document).ready(function () {

    //Mobile menu
    $('.burger-btn').on('click', function () {
        $('.menu-icon').toggleClass('opened');
        //$('body').toggleClass('no-scroll');
    })

    //search
    // let search = document.querySelector(".search")
    // let btn = document.querySelector(".search-button")
    // let input = document.querySelector(".input")
    // btn.addEventListener('click',()=>{
    //         search.classList.toggle('active');
    //         input.focus()
    //


    //swiper
    // About slider
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.header-slider .swiper-button-next',
            prevEl: '.header-slider .swiper-button-prev',
        },
    });

    // resti slider
    //Client slider
    const client_swiper = new Swiper('.client_swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        // autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

    });

    //Video-button
    const videoPlayer = $('.video video');

    function playPause() {
        if (videoPlayer.paused)
            videoPlayer.play();
        else
            videoPlayer.pause();
    }
    //EndVideoButton

    // const videoPlayer = document.getElementById("video1");

    // function playPause() {
    //     if (video.paused)
    //         video.play();
    //     else
    //         Video.pause();
    // }

    //--
    $('.video__play').on('click', function () {
        const videoPlayer = $('#video');
        $(this).toggleClass('paused');
        const video = videoPlayer.get(0);
        if (video.paused)
            video.play();
        else
            video.pause();
    })
    //--

    //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
})

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