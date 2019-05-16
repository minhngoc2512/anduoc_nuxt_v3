$(document).ready(function () {
    /*$('.item-caegory-product.active').prepend("<i class='fa fa-angle-right' aria-hidden='true'></i>");*/

    function resize_win() {
        var menu = $('#header-res .menu-res');
        var sub_menu = $('#header-res .content-sub-menu');
        var acc = $('#header-res .content-acc-ress');
        var body = $('body');
        var width_menu = menu.width();
        var width_acc = acc.width();
        var header = $('.wrap-header');
        var width_window = $(this).width();
        if ($('#header-res .btn-menu').hasClass('active')) {
            body.css({'left': width_menu + 'px'});
            header.css({'left': width_menu + 'px'});
            sub_menu.width(width_menu);
            // sub_menu.css('right','-'+width_menu+'px');
        }
        else {

        }
        if ($('#header-res .btn-acc-res ').hasClass('active')) {
            body.css({'right': width_acc + 'px'});
            header.css({'right': width_acc + 'px'});
        }
        if (width_window >= 992) {
            header.css({'left': '0px'});
            $('#header-res .btn-menu').removeClass('active');
            $('#header-res .btn-acc-res').removeClass('active');
            menu.removeAttr("style");
            acc.removeAttr("style");

            body.removeAttr("style");

        }
    }

    $(window).on('resize scroll', resize_win);
    $(window).trigger('resize');

    $('#header-res .btn-menu').click(function (event) {
        event.preventDefault();
        var menu = $('#header-res .menu-res');
        var body = $('body');
        var width_menu = menu.width();
        var header = $('.wrap-header');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            menu.animate({'left': -width_menu + 'px'}, 400, function (event) {
                $(this).attr('style', '');
            });
            body.animate({'left': '0px', 'top': '0'}, 400, function () {
                $(this).attr('style', '');
            });
            header.animate({'left': '0px'}, 400, function () {
                $(this).attr('style', '');
            });


        }
        else {
            $(this).addClass('active');
            header.animate({'left': width_menu + 'px', 'width': '100%'}, 400);
            menu.animate({'left': '0px'}, 400);
            body.css({'position': 'fixed'});
            body.animate({'left': width_menu + 'px', 'width': '100%', 'top': '0'}, 400);

        }

    });
    $('#header-res .btn-acc-res').click(function (event) {
        event.preventDefault();
        var acc = $('#header-res .content-acc-ress');
        var body = $('body');
        var width_acc = acc.width();
        var header = $('.wrap-header');

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            acc.animate({'right': -width_acc + 'px'}, 400, function () {
                acc.attr('style', '');
            });
            body.animate({'right': '0px', 'top': '0'}, 400, function () {
                body.attr('style', '');
            });
            header.animate({'right': '0px'}, 400);

        }
        else {
            $(this).addClass('active');
            acc.animate({'right': '0px'}, 400);
            header.css({'left': 'auto'});
            header.animate({'right': width_acc + 'px', 'width': '100%'}, 400);
            body.css({'position': 'fixed'});
            body.animate({'right': width_acc + 'px', 'width': '100%', 'top': '0', 'left': 'auto'}, 400);

        }

    });
    $('.list-menu-res>.item-menu .fa').click(function (event) {
        $(this).siblings('.content-sub-menu').animate({'left':'0'},400);
        $('#header-res .menu-res').css({'overflow':'hidden'});
    });
    $('.list-menu-res .content-sub-menu>.title-menu').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent('.content-sub-menu').animate({'left':'440px'},400);
        $('#header-res .menu-res').css({'overflow':'scroll'});
    });

    $('.btn-search-res').click(function () {
        $('.search-res').slideToggle(300);
    });

    // scroll top responsvie index
    $('.fas-search').click(function() {
        $('from#search-header-res').slideToggle();
    });

    if ($(window).width() < 1199) {
        /*scroll Menu responsive*/
        $(window).scroll(function () {
            var height_scroll = $('html, body').scrollTop();
            if (height_scroll > 50) {
                $('.scroll-top').css('right', '10px');
            } else {
                $('.scroll-top').css('right', '-90px');
            }
        });
    }else {
        /*scroll Menu-search*/
        $(window).scroll(function () {
            var height_scroll = $('html, body').scrollTop();
            if (height_scroll > 150) {
                $('#search-header').addClass('fix-search-header');
            } else {
                $('#search-header').removeClass('fix-search-header');
            }
        });
    }

    var duration = 400;
    $('#menuRight .scrollTop').click(function () {
        $('html, body').animate({scrollTop: 0}, duration);
    });

    $('.scroll-top').click(function () {
        $('html, body').animate({scrollTop: 0}, duration);
    });

    $('body').append('<div id="loadding_bar"><span></span></div>');
    $( document ).ajaxStart(function(){
        $('#loadding_bar').addClass('start');
    }).ajaxSend(function(){
        $('#loadding_bar').addClass('send');
    }).ajaxSuccess(function(){
        $('#loadding_bar').addClass('success');
    }).ajaxComplete(function(){
        $('#loadding_bar').addClass('complete');
    }).ajaxStop(function(){
        setTimeout(function(){
            $('#loadding_bar').addClass('hide');
            setTimeout(function(){
                $('#loadding_bar').removeAttr('class');
            },1000);
        },1000);
    }).ajaxError(function(){
        setTimeout(function(){
            $('#loadding_bar').addClass('hide');
            setTimeout(function(){
                $('#loadding_bar').removeAttr('class');
            },1000);
        },1000);

    });


});

// function img_error(el) {
//     var _el=$(el);
//     _el.attr( "src", "/assets/images/default.jpg" );
// }



function filterAction(item, el) {
    $('.list-filter a').removeClass('active');
    $(el).addClass('active');
    $('#slider-play > div').removeClass('active');
    $('#'+item).addClass('active');
    if ( $('#'+item).children().length == 0) {
        $.ajax({
            url: 'loadProSlider/' + item,
            beforeSend: function () {
                var height_wrap_slide = $('#slider-play').height();
                if (height_wrap_slide == 0) {
                    $('#'+item).html('<span class="loading-content"></span>');
                    $('.loading-content').height(257);
                } else {
                    $('#'+item).html('<span class="loading-content"></span>');
                    $('.loading-content').height(height_wrap_slide);
                }
            },
            success: function (data) {
                $('#'+item).html(data);
                lazyLoadImg();
            },
            complete: function () {
                $('#'+item+' .slicktest').slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    prevArrow: '<button type="button" class="slick-prev-edit"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                    nextArrow: '<button type="button" class="slick-prev-edit right-slick"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
                });
            }
        });
    } else {
        $('span.loading-content.display-slide').css('display', 'block');
        setTimeout(function(){ $('span.loading-content.display-slide').css('display', 'none'); }, 500);
    }
}

function image_error() {

}

function img_error(e){}

function lazyLoadImg() {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });
}
