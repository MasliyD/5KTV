$(document).ready(function(){
    $('.slider').slick({
        // speed: 300,
        // easing: 'ease',
        // variableWidth: true
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        //centerMode: true,
        variableWidth: true
    });

    $('.intro__slider').slick({
        speed: 1200, 
        easing: 'ease',
        //infinite: false,
        //waitForAnimate: false,
        //variableWidth: true,
        //autoplay: true,
        autoplaySpeed: 3500
    });

    $('.goods__slider').slick({
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        //autoplay: true,
        autoplaySpeed: 6000,
        //waitForAnimate: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
        
    });
});