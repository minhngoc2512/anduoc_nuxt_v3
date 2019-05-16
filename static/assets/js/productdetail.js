// var user = {
//   'id_user': 0,
//   'name_user': '',
//   'id_object': 0,
//   'rev_type': 0,
//   'fbId_user': 0,
//   'link':'',
//   'set': function (id_user, name_user, id_object, rev_type,fbId_user,link) {
//     this.id_user = id_user;
//     this.name_user = name_user;
//     this.id_object = id_object;
//     this.rev_type = rev_type;
//     this.rev_type = rev_type;
//     this.fbId_user= fbId_user;
//     this.link=link;
//   }
// }
// $(document).ready(function () {
//   $('.btn-number').click(function (e) {
//     e.preventDefault();
//
//     var fieldName = $(this).attr('data-field');
//     var type = $(this).attr('data-type');
//     var input = $("input[name='" + fieldName + "']");
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//       if (type == 'minus') {
//         var minValue = parseInt(input.attr('min'));
//         if (!minValue) minValue = 1;
//         if (currentVal > minValue) {
//           input.val(currentVal - 1).change();
//         }
//         if (parseInt(input.val()) == minValue) {
//           $(this).attr('disabled', true);
//         }
//
//       } else if (type == 'plus') {
//         var maxValue = parseInt(input.attr('max'));
//         if (!maxValue) maxValue = 9999999999999;
//         if (currentVal < maxValue) {
//           input.val(currentVal + 1).change();
//         }
//         if (parseInt(input.val()) == maxValue) {
//           $(this).attr('disabled', true);
//         }
//
//       }
//     } else {
//       input.val(0);
//     }
//   });
//   $('.input-number').focusin(function () {
//     $(this).data('oldValue', $(this).val());
//   });
//   $('.input-number').change(function () {
//
//     var minValue = parseInt($(this).attr('min'));
//     var maxValue = parseInt($(this).attr('max'));
//     if (!minValue) minValue = 1;
//     if (!maxValue) maxValue = 9999999999999;
//     var valueCurrent = parseInt($(this).val());
//
//     var name = $(this).attr('name');
//     if (valueCurrent >= minValue) {
//       $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
//     } else {
//       alert('Sorry, the minimum value was reached');
//       $(this).val($(this).data('oldValue'));
//     }
//     if (valueCurrent <= maxValue) {
//       $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
//     } else {
//       alert('Sorry, the maximum value was reached');
//       $(this).val($(this).data('oldValue'));
//     }
//
//
//   });
//   $(".input-number").keydown(function (e) {
//     // Allow: backspace, delete, tab, escape, enter and .
//     if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//       // Allow: Ctrl+A
//       (e.keyCode == 65 && e.ctrlKey === true) ||
//       // Allow: home, end, left, right
//       (e.keyCode >= 35 && e.keyCode <= 39)) {
//       // let it happen, don't do anything
//       return;
//     }
//     // Ensure that it is a number and stop the keypress
//     if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//       e.preventDefault();
//     }
//   });
//
//   $('#quantity').change(function () {
//     value = $(this).val();
//     max_value = parseInt($('.pro-quantity').html());
//     if (value <= 1) {
//       $(this).val(1);
//     } else if (value > max_value) {
//       $(this).val(max_value);
//     }
//   });
//
//   $('#add').click(function () {
//     var update = parseInt($('#quantity').attr('value')) + 1;
//     max_value = parseInt($('.pro-quantity').html());
//     $('#quantity').attr('value', update);
//     if (update > max_value) {
//       update = max_value;
//       $('#quantity').attr('value', update);
//     } else {
//       $('#quantity').attr('value', update);
//     }
//   });
//   $('#sub').click(function () {
//     var update = parseInt($('#quantity').attr('value')) - 1;
//     if (update < 1) {
//       update = 1;
//       $('#quantity').attr('value', update);
//     } else {
//       $('#quantity').attr('value', update);
//     }
//   });
//
//   $('#rating_product>.fa').click(function (event) {
//     $('.status_rating').text($(this).attr('title'));
//   });
//   $('.product-evaluate-box #comment').focus(function (event) {
//     console.log('focus');
//     $('#brg_body').addClass('focus');
//     $(this).closest('#form_reviews').addClass('focus');
//   });
//   $('.product-evaluate-box #comment').blur(function (event) {
//     console.log('blur');
//     $(this).closest('#form_reviews').removeClass('focus');
//     $('#brg_body').removeClass('focus');
//   });
//
//   /* $('#SubmitReviews').click(function (event) {
//        event.preventDefault();
//        event.stopPropagation();
//        var point=$(this).siblings('.product-evaluate-box-rate').find('#rating_product input[type=radio]:checked').val();
//        console.log(point);
//        var content_reviews=$(this).siblings('.product-evaluate-box-content').children('#comment').val();
//        console.log(content_reviews);
//        var url      = window.location.protocol+'//'+window.location.host+'/insert_reviews' ;
//        console.log( url );
//        $.ajax({
//            url:url,
//            dataType: 'text',
//            type: 'post',
//            data: {'point':point,'content_rewiews':content_reviews},
//            success: function (data) {
//                var stateObj = {foo: "bar"};
//                var link = this.url;
//               console.log(link);
//                // $('#page-category .wrap-container').html(data);
//                // lazyLoadImg();
//            },
//            complete: function (data) {
//            }
//        })
//    });
//    $('#form_reviews').on('submit', function (event) {
//        event.preventDefault();
//        event.stopPropagation();
//
//        var content_reviews = $(this).find('.content_reviews');
//        var error = $(this).children('#error_reviews')
//        if (content_reviews.val().length <= 0) {
//            error.text('Nháº­p ná»™i dung bĂ¬nh luáº­n / nháº­n xĂ©t')
//        } else {
//            var form = $(this);
//            var data = $(this).serialize();
//            var url = window.location.protocol + '//' + window.location.host + '/reviews';
//
//            $.ajax({
//                url: url,
//                dataType: 'text',
//                type: 'post',
//                data: data,
//                success: function (data) {
//                    $('#box-reviews').prepend(data);
//                },
//                error: function () {
//                    error.text('BĂ¬nh luáº­n tháº¥t báº¡i');
//                },
//                complete: function (data) {
//                    form[0].reset();
//                    error.text('');
//                }
//            })
//        }
//
//    });
//    $('.item-reviews .reply').on('click', function (event) {
//        event.preventDefault();
//        event.stopPropagation();
//        var item_reviews= $(this).parents('.item-reviews');
//        var parent_id=item_reviews.attr('data-id');
//        var form='<form id="form-reply-rev">' +
//            '<input type="hidden" name="id_user" value="'+user.id_user+'">' +
//            '<input type="hidden" name="name_user" value="'+user.name_user+'">' +
//            '<input type="hidden" name="id_object" value="'+user.id_object+'">' +
//            '<input type="hidden" name="rev_type" value="'+user.rev_type+'">' +
//            '<input type="hidden" name="rev_parent_id"  value="'+parent_id+'" >' +
//            '<textarea name="rev-content-reply" id="rev-text-reply" class="content_reviews"  rows="5"  placeholder="Ná»™i dung tráº£ lá»i"></textarea>' +
//            '<button id="submit-reply-rev" type="submit">Tráº£ lá»i</button>' +
//            '</form>';
//
//        if(item_reviews.children('.form-reply-rev').length<=0){
//            $('#form-reply-rev').remove();
//            item_reviews.append(form);
//        }else {
//
//        }
//    });
//
//    $('#submit-reply-rev').on("submit", function (event) {
//        event.preventDefault();
//        event.stopPropagation();
//        console.log('sdfdsbvdfs');*/
//
// });
//
// $(document).on('submit','#form_reviews,#form-reply-rev', function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   var el = $(this);
//   var content_reviews = el.find('.content_reviews');
//   var error = el.find('.error_reviews');
//
//   if ($.trim(content_reviews.val()).length <= 0) {
//     error.text('Nháº­p ná»™i dung bĂ¬nh luáº­n / nháº­n xĂ©t')
//     console.log('lá»—i');
//   } else {
//
//     var form = $(this);
//     var data = $(this).serialize();
//     var url = window.location.protocol + '//' + window.location.host + '/reviews';
//     var sub=el.siblings('.sub-reviews');
//     console.log(sub.length);
//     $.ajax({
//       url: url,
//       dataType: 'text',
//       type: 'post',
//       data: data,
//       success: function (data) {
//
//         if(el[0].id=='form-reply-rev'){
//           if(sub.children('.wrap-sub-reviews').length>0){
//             el.parents('.item-reviews').find('.wrap-sub-reviews').prepend(data);
//           }else {
//             sub.prepend('<div class="wrap-sub-reviews">'+data+'</div>')
//           }
//
//         }else {
//           $('#box-reviews').prepend(data);
//         }
//       },
//       error: function () {
//         error.text('BĂ¬nh luáº­n tháº¥t báº¡i');
//       },
//       complete: function (data) {
//         if(el[0].id=='form-reply-rev'){
//           el.remove();
//         }
//         form[0].reset();
//         error.text('');
//       }
//     })
//   }
//
// });
// $(document).on('click','.item-reviews .reply',function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   var item_reviews= $(this).parents('#box-reviews>.item-reviews');/*.parent('.bottom-reviews').parent('.item-reviews');*/
//   var parent_id=item_reviews.attr('data-id');
//   var sub_rev=$(this).closest('.sub-reviews');
//   var name_rep='';
//   if(sub_rev.length>0){
//     var name_rep='<span class="tag_name" contenteditable="false">'+$(this).closest('.item-reviews').find('.name-user a').html()+'</span>';
//   }
//   var btn='';
//   if(user.id_user==0){
//     console.log(user.link);
//     btn='<a class="btn_log" href="'+user.link+'">ÄÄƒng nháº­p Ä‘á»ƒ bĂ¬nh luáº­n</a>';
//   }else {
//     btn='<button id="submit-reply-rev" type="submit">Tráº£ lá»i</button>';
//   }
//   var form='<form id="form-reply-rev">' +
//     '<input type="hidden" name="id_user" value="'+user.id_user+'">' +
//     '<input type="hidden" name="name_user" value="'+user.name_user+'">' +
//     '<input type="hidden" name="id_object" value="'+user.id_object+'">' +
//     '<input type="hidden" name="rev_type" value="'+user.rev_type+'">' +
//     '<input type="hidden" name="fbId_user" value="'+user.fbId_user+'">' +
//     '<input type="hidden" name="rev_parent_id"  value="'+parent_id+'" >' +
//     '<i class="error_reviews"></i>'+
//     '<textarea  name="content_reviews" class="content_reviews" id="rev-text-reply"></textarea>' +
//     '<button class="cancel_rep">Há»§y</button>'+
//     btn+
//     '</form>';
//
//   if(item_reviews.children('.form-reply-rev').length<=0){
//     $('#form-reply-rev').remove();
//     var bottom=$(this).parent('.bottom-reviews');
//     // item_reviews.append(form);
//     bottom.after(form);
//   }else {
//
//   }
// });
// $(document).on('click','#form-reply-rev .cancel_rep',function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   $(this).parent('#form-reply-rev').remove();
// });
// $(document).on('click','.item-reviews .more',function () {
//   event.preventDefault();
//   event.stopPropagation();
//   var el=$(this);
//   el.parent('.bottom-reviews').siblings('.sub-reviews').toggle(500);
//   el.prop("disabled", true);
//   setTimeout(function () {
//     console.log('hahah');
//     el.prop("disabled", false);
//   },1000);
// });
// // });
//
// $(document).on('keydown','textarea',function (event) {
//   $(this).css({'height':'auto'});
//   var error = $(this).siblings('.error_reviews');
//   error.text('');
//   var height=$(this)[0].scrollHeight;
//   var height_el=$(this).outerHeight();
//   if(height>height_el){
//     $(this).outerHeight(height+10);
//   }
//
// });
// function viewAllInfomationContent() {
//   $('.information-result-content').addClass('active');
//   $('a.view-all-detail').addClass('active');
// }
//
//
//
