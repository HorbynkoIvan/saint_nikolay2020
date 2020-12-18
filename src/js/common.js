'use strict';

import './../scss/common.scss';

import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

window.addEventListener('DOMContentLoaded', () => {
    openMore();
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
        window.location.href='https://parfums.ua/promotions/dostavka-krasoti';
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