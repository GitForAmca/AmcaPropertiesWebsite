/*item Slider*/
$(document).ready(function () {
    $(".itemSlider").owlCarousel({
        items: 3,
        autoplay: false,
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                loop: true,
                margin: 0,
                nav: false,
                items: 2,
                left: 70
            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1366: {
                items: 3,
            },
            1440: {
                items: 3,
            },
            1680: {
                items: 3,
            },
        }
    });
});

/*Testimnilas Slider*/
$('.testimonials-cr').owlCarousel({
    stagePadding: 50,
    loop: true,
    item: 3,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})