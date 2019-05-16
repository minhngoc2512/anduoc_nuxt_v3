$(document).ready(function () {
    // var price_max = parseInt($('.pricce-products').attr('data-max'));
    // var price_min = parseInt($('.pricce-products').attr('data-min'));
    // var price_step = parseInt($('.pricce-products').attr('data-step'));
    // var price_current_max = parseInt($('.pricce-products').attr('data-current-max'));
    // var price_current_min = parseInt($('.pricce-products').attr('data-current-min'));
    // var brand_currents = $('.list-trademark').attr('data-brands');
    // var rewriter_cat = $('#box_cat').attr('data-rewrite');
    // var data_filter = {'ajax': 'on'};
    // var rewriteObject = localStorage.getItem('rewrite_cat');
    // if (rewriter_cat != rewriteObject) {
    //     localStorage.setItem('testObject', JSON.stringify(data_filter));
    // }
    // localStorage.setItem('rewrite_cat', rewriter_cat);
    // var retrievedObject = localStorage.getItem('testObject');
    // // data_filter = JSON.parse(retrievedObject);
    // $.each($('.item-data-sort'),function () {
    //     var sortBy = $(this).attr('data-sort');
    //     var sortOder = $(this).attr('data-order');
    //    if(sortBy==GetURLParameter('sortBy') && sortOder==GetURLParameter('Order')){
    //        // console.log('44444');
    //        $(this).parents('.item-sort-by-op').addClass('select');
    //    }
    // });
    //
    // if ($.type(brand_currents) != 'undefined') {
    //     if ((brand_currents).length != 0) {
    //         bra_id_test = brand_currents.split('-');
    //         $.each($(".item-list-trademark"), function () {
    //             var element = $(this)
    //             var id_bra = (element.children('input').attr('data-id-bra'));
    //             bra_id_test.map(function (id) {
    //                 if (id_bra == id) {
    //                     element.children('input').prop("checked", true);
    //                 }
    //             });
    //         });
    //     }
    // }
    //
    // $("#slider-range").slider({
    //     range: true,
    //     min: price_min,
    //     max: price_max,
    //     step: price_step,
    //     values: [price_current_min, price_current_max],
    //     slide: function (event, ui) {
    //         $("#amount").val("Từ " + addCommas(ui.values[0].toString()) + "đ :" + addCommas(ui.values[1]) + "đ");
    //     }
    // });
    // $("#amount").val("Từ " + addCommas($("#slider-range").slider("values", 0).toString()) +
    //     "đ : " + addCommas($("#slider-range").slider("values", 1).toString()) + "đ");
    // $("#slider-range").slider({
    //     change: function (event, ui) {
    //         data_filter['price_min'] = ui.values[0];
    //         data_filter['price_max'] = ui.values[1];
    //         console.log(data_filter);
    //         // filter_product(data_filter);
    //     }
    // });
    //
    //
    // var bra_id = [];
    // $(".item-list-trademark input").change(function (event) {
    //     if ($.type(data_filter.brands) != 'undefined') {
    //         bra_id = data_filter.brands.split('-');
    //     }
    //     event.preventDefault();
    //     event.stopPropagation();
    //     var id = $(this).attr('data-id-bra');
    //     if ($(this).is(':checked')) {
    //         bra_id.push(id);
    //         $.unique(bra_id);
    //         bra_id_str = bra_id.join('-');
    //         data_filter['brands'] = bra_id_str;
    //     } else {
    //         bra_id.splice($.inArray(id, bra_id), 1);
    //         bra_id_str = bra_id.join('-');
    //         data_filter['brands'] = bra_id_str;
    //         if (bra_id.length === 0) {
    //             delete data_filter.brands;
    //         }
    //     }
    //     filter_product(data_filter);
    // });
    //
    // $(".item-data-sort").click(function () {
    //
    //     var sortBy = $(this).attr('data-sort');
    //     var sortOder = $(this).attr('data-order');
    //     $('.item-sort-by-op').removeClass('select')
    //     $(this).parent('.item-sort-by-op').addClass('select');
    //     $(this).parents('.item-sort-by-op').addClass('select');
    //     $(this).parents('.wrap-sort-by-options>.item-sort-by-op').addClass('select');
    //     data_filter['sortBy'] = sortBy;
    //     data_filter['Order'] = sortOder;
    //     filter_product(data_filter);
    //
    // });
    //
    // function filter_product(data_filter) {
    //     // var top_list_pro=$('.wrap-container').offset().top;
    //     // $(document).scrollTop(top_list_pro-40);
    //     $('html, body').animate({
    //         scrollTop: $("#page-category").offset().top - 40
    //     }, 500);
    //     var rewriter_cat = $('#box_cat').attr('data-rewrite');
    //
    //     localStorage.setItem('testObject', JSON.stringify(data_filter));
    //     $.ajax({
    //         url: rewriter_cat,
    //         dataType: 'text',
    //         type: 'get',
    //         data: data_filter,
    //         success: function (data) {
    //             var stateObj = {foo: "bar"};
    //             var link = this.url;
    //             link = link.replace("ajax=on&", '');
    //             link = link.replace("ajax=on", '');
    //             history.pushState(stateObj, "page 2", link);
    //             $('#page-category .wrap-container').html(data);
    //             lazyLoadImg();
    //         },
    //         complete: function (data) {
    //         }
    //     })
    // }
    //
    // function addCommas(nStr) {
    //     nStr += '';
    //     x = nStr.split('.');
    //     x1 = x[0];
    //     x2 = x.length > 1 ? '.' + x[1] : '';
    //     var rgx = /(\d+)(\d{3})/;
    //     while (rgx.test(x1)) {
    //         x1 = x1.replace(rgx, '$1' + ',' + '$2');
    //     }
    //     return x1 + x2;
    // }
    //
    // function GetURLParameter(sParam) {
    //     var sPageURL = window.location.search.substring(1);
    //     var sURLVariables = sPageURL.split('&');
    //     for (var i = 0; i < sURLVariables.length; i++) {
    //         var sParameterName = sURLVariables[i].split('=');
    //         if (sParameterName[0] == sParam) {
    //             return sParameterName[1];
    //         }
    //     }
    // }
});
