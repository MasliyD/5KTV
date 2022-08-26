$(document).ready(function(){
    $('.slider').slick({
        // speed: 300,
        // easing: 'ease',
        // infinite: true,
        // variableWidth: true
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        //centerMode: true,
        variableWidth: true
    });

    $('.intro__slider').slick({
        speed: 1800, 
        easing: 'ease',
        //infinite: false,
        //waitForAnimate: false,
        //variableWidth: true,
        //autoplay: true,
        autoplaySpeed: 3500
    });
});