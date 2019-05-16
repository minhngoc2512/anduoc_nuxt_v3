$(document).ready(function() {

    $('.layer-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        dotsClass : 'slick-dots-edit slide',
        dots : true
    });

    $('.owl-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        dotsClass : 'slick-dots-edit',
        dots : true
    });

    if ($('body').width() > 1024) {
        $('.slicktest').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            prevArrow : '<button type="button" class="slick-prev-edit"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow : '<button type="button" class="slick-prev-edit right-slick"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
        });
    }

});


