'use strict';

import './../scss/common.scss';

import $ from 'jquery';
import 'slick-carousel';
import 'jquery-snowfall';

window.$ = window.jQuery = $;

window.addEventListener('DOMContentLoaded', () => {
    openMore();
    $(".saint_nikolay2020").snowfall({
        image: "https://cdn.parfums.ua/public/upload/newAdminUpload/Landing/NYvichy89/flake1.png",
        minSize: 10,
        maxSize: 32
    });
    // $(".saint_nikolay2020").snowfall({
    //     minSize: 5,
    //     maxSize: 10,
    //     round: true,
    //     shadow: true,
    //     flakeCount: 100,
    //     maxSpeed: 5
    // });
    function openMore() {
        const $btnMore = $('#btn_more');
        const $shadow = $('.about_top .shadow');
        const $aboutBottom = $('.about_bottom');

        $btnMore.on('click', function () {
            $(this).find('span').text(function (i, text) {
                return text === "Читати повністю" ? "Згорнути" : "Читати повністю";
            })

            $aboutBottom.slideToggle();
            $shadow.fadeToggle()
        })
    }

    $('.banner .inner').click(function(){
        window.location.href='https://parfums.ua/ua/promotions/dostavka-krasoti';
    });

    $('.js-bestsellers__slider').slick(
        {
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
            ]
        }
    );
})