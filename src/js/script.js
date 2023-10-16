$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png" alt="arrow1"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png" alt="arrow2"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                    
                }
            }
        ]
    });
});