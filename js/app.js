$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        variableWidth: true
    });

    $('.intro__slider').slick({
        speed: 800, 
        easing: 'ease',
        //waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 3500
    });

    $('.goods__slider').slick({
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 2,
        //autoplay: true,
        //autoplaySpeed: 6000,
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

    $('.advant__slider').slick({
        speed: 400,
        slidesToShow: 4,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    dots: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 585,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
    });

    $('.descript__slider').slick ({
        speed: 800
    });
    $('.contact__slider').slick ({
        speed: 800,
        slidesToShow: 3
    });
});