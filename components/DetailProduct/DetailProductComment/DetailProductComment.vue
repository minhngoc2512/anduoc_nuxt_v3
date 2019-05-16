<template>
  <div class="product-evaluate">
    <div class="product-evaluate-title">
      <h3>Đánh giá sản phẩm</h3>
    </div>

    <div class="product-evaluate-content">
      <!--<script>-->
        <!--user.set(8, 'Minh Ngọc', 772, 1, 1793976627292815, '/dang-nhap.aspx?urlreturn=L251b2MtZXAtaG9uLWhvcC1yYXUtdmEtdHJhaS1jYXktdG9uZy1ob3AtdGlwY28taG9wLTEtbC1wNzcyLmh0bWw-');-->
      <!--</script>-->
      <div class="result_rating w40">
        <div class="wrap_star_reviews w40">
          <div class="start_review"><i class="mcon-star"></i><span class="point-review">{{$store.state.DetailProductStore.data_detail_product.reviews.average}}</span></div>
          <div class="text_star_reviews">
            Sản phẩm như mô tả <br>
            ({{$store.state.DetailProductStore.data_detail_product.reviews.total}} đánh giá)
          </div>
        </div>
        <div class="content_detail_star_reviews w60">
          <div class="item_detail_star_reviews">
            <span class="number_star">5 <i class="mcon-star"></i></span>
            <span class="percent_bar">
                                           <span :style="`width: ${convertRage(5)}%`"></span>
                                       </span>
            <span class="percent_star">{{convertRage(5)}}%</span>
          </div>
          <div class="item_detail_star_reviews">
            <span class="number_star">4 <i class="mcon-star"></i></span>
            <span class="percent_bar">
                                           <span :style="`width: ${convertRage(4)}%`"></span>
                                       </span>
            <span class="percent_star">{{convertRage(4)}}%</span>
          </div>
          <div class="item_detail_star_reviews">
            <span class="number_star">3 <i class="mcon-star"></i></span>
            <span class="percent_bar">
                                           <span :style="`width: ${convertRage(3)}%`"></span>
                                       </span>
            <span class="percent_star">{{convertRage(3)}}%</span>
          </div>
          <div class="item_detail_star_reviews">
            <span class="number_star">2 <i class="mcon-star"></i></span>
            <span class="percent_bar">
                                           <span :style="`width: ${convertRage(2)}%`"></span>
                                       </span>
            <span class="percent_star">{{convertRage(2)}}%</span>
          </div>
          <div class="item_detail_star_reviews">
            <span class="number_star">1 <i class="mcon-star"></i></span>
            <span class="percent_bar">
                                           <span :style="`width: ${convertRage(1)}%`"></span>
                                       </span>
            <span class="percent_star">{{convertRage(1)}}%</span>
          </div>

        </div>
      </div>
      <div class="product-evaluate-box">
        <form id="form_reviews" class=" w100">
          <div class="message-eval">
            <span>Bạn đánh giá sản phẩm này được mấy  <i class="mcon-star" aria-hidden="true"></i></span>
          </div>
          <input type="hidden" name="id_user" value="8">
          <input type="hidden" name="name_user" value="Minh Ngọc">
          <input type="hidden" name="id_object" value="772">
          <input type="hidden" name="rev_type" value="1">
          <input type="hidden" name="fbId_user" value="1793976627292815">
          <div class="tab_rev product-evaluate-box-rate">
            <p>Đánh giá: </p>

            <section id="rating_product" class="rating">
              <input type="radio" id="star5" name="rating" value="5">
              <label class="mcon" for="star5" title="Tuyệt vời"></label>
              <input type="radio" id="star4" name="rating" value="4">
              <label class="mcon" for="star4" title="Hài lòng"></label>
              <input type="radio" id="star3" name="rating" value="3">
              <label class="mcon" for="star3" title="Bình thường"></label>
              <input type="radio" id="star2" name="rating" value="2">
              <label class="mcon" for="star2" title="Không hài lòng"></label>
              <input type="radio" id="star1" name="rating" value="1">
              <label class="mcon" for="star1" title="Tồi tệ"></label>
            </section>
            <p class="status_rating">Mức độ hài lòng!</p>

          </div>
          <div id="SubmitReviews" class="btnLogin">

            <button type="submit">Đăng</button>
          </div>
          <div class="tab_rev product-evaluate-box-content">
            <i class="error_reviews"></i>
            <!--                                <p> --><!--</p>-->
            <textarea id="comment" class="content_reviews" name="content_reviews" spellcheck="false"
                      placeholder="Nhập nội dung đánh giá (tối thiểu 30 ký tự)" style=""></textarea>
          </div>
        </form>
      </div>
    </div>
    <div class="product-facebook-comment">
      <div class="product-facebook-comment-content">
        <div id="box-reviews">

          <div class="item-reviews" v-for="(item_comment,index) in $store.state.DetailProductStore.data_detail_product.reviews.child" :key="index" :id="`reviews-${item_comment.rev_id}`" :data-id="item_comment.rev_id">
            <div class="ava-user-rev" :style="`background-image: url('http://graph.facebook.com/${item_comment.rev_fbId_user}/picture?type=square')`"></div>
            <div class="reviews_main">
              <h4 class="name-user">
                <span class="avat-cm">
                    <div class="avatar-user" :style="`background-image: url('http://graph.facebook.com/${item_comment.rev_fbId_user}/picture?type=square')`"></div>
                </span>
                <div class="box-user-rev">
                  <a :href="`http://facebook.com/${item_comment.rev_fbId_user}`" target="_blank">{{item_comment.rev_use_name}}</a>
                  <div class="rating_user" >
                    <i v-for="n in 5" :key="n"  :class="n<=parseInt(item_comment.rev_point)?'mcon-star active':'mcon-star'"></i>
                    <span>11 ngày trước</span>
                  </div>
                </div>
              </h4>

              <p class="content-reviews">
                <span>{{item_comment.rev_content}}</span>
              </p>
            </div>
            <div class="bottom-reviews">
              <a class="reply">Trả lời</a>
              <a class="more" v-if="item_comment.rev_has_child!=0" v-on:click="getListSubReviews(item_comment.rev_id)" href="javascript:void(0)">Xem thêm {{parseInt(item_comment.rev_total_child)}} phản hồi</a>
            </div>

            <div class="sub-reviews " :id="`sub-reviews-${item_comment.rev_id}`">
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail-product-comment",
    data(){
      return{
        total_reviews:this.$store.state.DetailProductStore.data_detail_product.reviews.total
      }
    },
    mounted(){
      let user = {
        'id_user'   : 0,
        'name_user' : '',
        'id_object' : 0,
        'rev_type'  : 0,
        'fbId_user' : 0,
        'link'      : '',
        'set'       : function (id_user, name_user, id_object, rev_type, fbId_user, link) {
          this.id_user = id_user;
          this.name_user = name_user;
          this.id_object = id_object;
          this.rev_type = rev_type;
          this.rev_type = rev_type;
          this.fbId_user= fbId_user;
          this.link=link;
        }
      };

      $(document).ready(function () {
        $('#rating_product>.fa').click(function (event) {
          $('.status_rating').text($(this).attr('title'));
        });

        $('.product-evaluate-box #comment').focus(function (event) {
          $('#brg_body').addClass('focus');
          $(this).closest('#form_reviews').addClass('focus');
        });

        $('#brg_body').click(function () {
          $(this).closest('#form_reviews').removeClass('focus');
          $('#brg_body').removeClass('focus');
        });

        /*$('.product-evaluate-box #comment').blur(function (event) {
            $(this).closest('#form_reviews').removeClass('focus');
            $('#brg_body').removeClass('focus');
        });*/

        $('#form_reviews .btnLogin button').hover(function () {
          sta1 = $('#star1').is(':checked');
          sta2 = $('#star2').is(':checked');
          sta3 = $('#star3').is(':checked');
          sta4 = $('#star4').is(':checked');
          sta5 = $('#star5').is(':checked');
          if (sta1 || sta2 || sta3 || sta4 || sta5) {

          } else {
            $('#form_reviews .message-eval').addClass('message-eval-active');
          }
        });

        $('#rating_product').click(function () {
          $('#form_reviews .message-eval').removeClass('message-eval-active');
        });
      });

      $(document).on('submit','#form_reviews, #form-reply-rev', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var el = $(this);
        var content_reviews = el.find('.content_reviews');
        var error = el.find('.error_reviews');

        if ($.trim(content_reviews.val()).length <= 0) {
          $('#form_reviews #SubmitReviews button').removeAttr('disabled');
          $('#form-reply-rev #submit-reply-rev').removeAttr('disabled');
          error.text('Nhập nội dung bình luận / nhận xét');
        } else {
          var form = $(this);
          var data = $(this).serialize();
          var url  = window.location.protocol + '//' + window.location.host + '/reviews';
          var sub  = el.siblings('.sub-reviews');
          // close box comment
          $(this).closest('#form_reviews').removeClass('focus');
          $('#brg_body').removeClass('focus');

          //
          $('#form_reviews .message-eval').removeClass('message-eval-active');

          $.ajax({
            url         : url,
            dataType    : 'text',
            type        : 'post',
            data        : data,
            beforeSend  : function () {
              $('#form_reviews #SubmitReviews button').attr('disabled', 'disabled');
              $('#form-reply-rev #submit-reply-rev').attr('disabled', 'disabled');
              $('#box-reviews').find('.item-reviews').first().removeClass('active');
              sub.find('.item-reviews').first().removeClass('active');
            },
            success     : function (data) {
              //console.log(data);
              if(el[0].id == 'form-reply-rev'){
                if(sub.children('.wrap-sub-reviews').length > 0){
                  el.parents('.item-reviews').find('.wrap-sub-reviews').prepend(data);
                }else {
                  sub.prepend('<div class="wrap-sub-reviews">'+ data +'</div>')
                }
                sub.find('.item-reviews').first().addClass('active');
              }else {
                $('#box-reviews').prepend(data);
                $('#box-reviews').find('.item-reviews').first().addClass('active');
              }
            },
            error       : function () {
              error.text('Bình luận thất bại');
            },
            complete    : function () {
              setTimeout(function () {
                $('#box-reviews').find('.item-reviews').first().removeClass('active');
                sub.find('.item-reviews').first().removeClass('active');
              }, 10000);

              $('#form_reviews #SubmitReviews button').removeAttr('disabled');
              $('#form-reply-rev #submit-reply-rev').removeAttr('disabled');
              if(el[0].id == 'form-reply-rev'){
                el.remove();
              }
              form[0].reset();
              error.text('');
            }
          })
        }
      });

      $(document).on('click','.item-reviews .reply',function (event) {
        event.preventDefault();
        event.stopPropagation();
        var item_reviews= $(this).parents('#box-reviews>.item-reviews');/*.parent('.bottom-reviews').parent('.item-reviews');*/
        var parent_id=item_reviews.attr('data-id');
        var sub_rev=$(this).closest('.sub-reviews');
        var name_rep='';
        if(sub_rev.length>0){
          var name_rep='<span class="tag_name" contenteditable="false">'+$(this).closest('.item-reviews').find('.name-user a').html()+'</span>';
        }
        var btn='';
        if(user.id_user==0){
          btn='<a class="btn_log" href="'+user.link+'">Đăng nhập để bình luận</a>';
        }else {
          btn='<button id="submit-reply-rev" type="submit">Trả lời</button>';
        }
        var form='<form id="form-reply-rev">' +
          '<input type="hidden" name="id_user" value="'+user.id_user+'">' +
          '<input type="hidden" name="name_user" value="'+user.name_user+'">' +
          '<input type="hidden" name="id_object" value="'+user.id_object+'">' +
          '<input type="hidden" name="rev_type" value="'+user.rev_type+'">' +
          '<input type="hidden" name="fbId_user" value="'+user.fbId_user+'">' +
          '<input type="hidden" name="rev_parent_id"  value="'+parent_id+'" >' +
          '<i class="error_reviews"></i>'+
          '<textarea  name="content_reviews" class="content_reviews" id="rev-text-reply"></textarea>' +
          '<button class="cancel_rep">Hủy</button>'+
          btn+
          '</form>';

        if(item_reviews.children('.form-reply-rev').length<=0){
          $('#form-reply-rev').remove();
          var bottom=$(this).parent('.bottom-reviews');
          // item_reviews.append(form);
          bottom.after(form);
        }else {

        }
      });

      $(document).on('click','#form-reply-rev .cancel_rep',function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent('#form-reply-rev').remove();
      });

      // $(document).on('click','.item-reviews .more',function () {
      //     event.preventDefault();
      //     event.stopPropagation();
      //     var el=$(this);
      //     el.parent('.bottom-reviews').siblings('.sub-reviews').toggle(500);
      //     el.prop("disabled", true);
      //     setTimeout(function () {
      //         el.prop("disabled", false);
      //     },1000);
      // });

      $(document).on('keydown','textarea',function (event) {
        $(this).css({'height':'auto'});
        var error = $(this).siblings('.error_reviews');
        error.text('');
        var height=$(this)[0].scrollHeight;
        var height_el=$(this).outerHeight();
        if(height>height_el){
          $(this).outerHeight(height+10);
        }
      });

      function getListSubReviews(_id) {
        var _url         = window.location.protocol + '//' + window.location.host + '/reviews/get-sub-reviews';
        var _idHtml      = $('#sub-reviews-'+_id);
        var _htmlLoadGif =  '<div class="sub-load-reviews"></div>';
        var _parent      = (_idHtml.parent())[0].id;
        if (_idHtml.children().length == 0) {
          $.ajax({
            url         : _url,
            type        : "get",
            dataType    :"text",
            data        : { id : _id },
            beforeSend  : function () {
              $('#'+_parent+' .bottom-reviews').append(_htmlLoadGif);
            },
            success     : function (data) {
              $('#'+_parent+' .bottom-reviews .sub-load-reviews').remove();
              _idHtml.html(data);
              _idHtml.slideToggle(500);
            }
          });
        } else {
          _idHtml.slideToggle(500);
        }
      }

      function getListReviews(_el, _total, _pro_id) {
        var _page = $(_el).attr('data-page');
        var _html = $('#box-reviews');
        var _htmlLoadGif =  '<div class="sub-load-reviews"></div>';
        _page = parseInt(_page);
        _total = parseInt(_total);
        _pro_id = parseInt(_pro_id);
        var _url = window.location.protocol + '//' + window.location.host + '/reviews/ajax-get-list-review';
        $(_el).css('display', 'none');
        $.ajax({
          url : _url,
          type        : "get",
          dataType    : "text",
          data        : { page : _page,  total : _total, pro_id : _pro_id},
          beforeSend  : function () {
            $(_el).parent().append(_htmlLoadGif);
          },
          success     : function (data) {
            $('.view-more-rev .sub-load-reviews').remove();
            $(_el).css('display', 'block');
            var _page_new = _page + 1;
            $(_el).attr('data-page', _page_new);
            _html.append(data);
          },
          complete    : function () {
            var _count_el = _html.children().length;
            if (parseInt(_count_el) === _total) {
              $(_el).remove();
            }
          }
        });
      }

      function expandCommentChild(_el) {
        var parent = $(_el).parents('.content-reviews');
        var _htmlEnbale = $(parent).siblings('.content-reviews-expand');
        $(_el).parent().remove();
        _htmlEnbale.addClass('enable');
      }

      function expandCommentSubChild(_el) {
        var parent = $(_el).parents('.content-reviews_sub');
        var _htmlEnbale = $(parent).siblings('.content-reviews_sub_expand');
        $(_el).parent().remove();
        _htmlEnbale.addClass('enable');
      }

    },
    methods:{
      getListSubReviews(_id) {
        var _url         = 'http://dev.anduoc.vn/reviews/get-sub-reviews';
        var _idHtml      = $('#sub-reviews-'+_id);
        var _htmlLoadGif =  '<div class="sub-load-reviews"></div>';
        var _parent      = (_idHtml.parent())[0].id;
        if (_idHtml.children().length == 0) {
          $.ajax({
            url         : _url,
            type        : "get",
            dataType    :"text",
            data        : { id : _id },
            beforeSend  : function () {
              $('#'+_parent+' .bottom-reviews').append(_htmlLoadGif);
            },
            success     : function (data) {
              $('#'+_parent+' .bottom-reviews .sub-load-reviews').remove();
              _idHtml.html(data);
              _idHtml.slideToggle(500);
              console.log('tag 2')
            }
          });
        } else {
          console.log('tag 1');
          _idHtml.slideToggle(500);
        }
      },
      convertRage(index){
        if(this.$store.state.DetailProductStore.data_detail_product.reviews.count_el[index]){
          let value = this.$store.state.DetailProductStore.data_detail_product.reviews.count_el[index] / this.total_reviews;
          value = value*100;
          return Math.round(value);
        }
          return 0;

      }
    }
  }
</script>

