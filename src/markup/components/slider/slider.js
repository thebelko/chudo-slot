import "slick-carousel/slick/slick";

$(document).ready(function(){
    $('.slider__slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});


