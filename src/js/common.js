'use strict';

import './../scss/common.scss';

import $ from 'jquery';
import 'slick-carousel';
import 'jquery-snowfall';

window.$ = window.jQuery = $;

window.addEventListener('DOMContentLoaded', () => {


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