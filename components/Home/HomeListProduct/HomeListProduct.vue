<template>
  <div id="showCate" class="g1180">
    <div :id="'cate-item-'+class_cate_id" class="show-cate-item">
      <div class="title-cate">
        <h2>
          <nuxt-link :title="list_product_category.name" :to="'/'+list_product_category.link_web">
            <span><i>{{class_cate_id+1}}</i></span> {{list_product_category.name}}<i class="fa fa-caret-right"></i>
          </nuxt-link>
        </h2>
        <div class="review-buy">
          <nuxt-link :title="list_product_category.name" :to="'/'+list_product_category.link_web"><i
            class="si"></i><span class="sp-l1">Mua nhiều</span></nuxt-link>
          <span></span>
          <nuxt-link
            :title="list_product_category.name" :to="'/'+list_product_category.lick_web"><i class="si buy-hot"></i><span
            class="sp-l1">Xem nhiều</span></nuxt-link>
        </div>
        <div class="list-item-cate">
          <nuxt-link v-for="(data,index) in list_product_category.child" :to="'/'+data.link_web" v-bind:key="index"
                     :title="data.name">
            <i class="fa fa-angle-right"></i>
            {{data.name}}
          </nuxt-link>
        </div>
      </div>
      <no-ssr>
      <div class="olw-pro-cate">
        <ul>
          <div class="owl-wrapper">
              <li class="olw-item-pro" v-for="(item_slider_cate,index) in list_product_category.picture" :key="index">
                <nuxt-link :title="list_product_category.name" :to="'/'+list_product_category.link_web">
                  <img src="/lazy_load/loading_v4.jpg" :alt="list_product_category.name" v-lazy="item_slider_cate.url">
                </nuxt-link>
              </li>
          </div>
        </ul>
        <div class="clear-fix"></div>
      </div>
      </no-ssr>
      <div class="list-product">

        <div class="item-product w30 padding-5 fl" v-for="(data,index) in list_product_category.product" :key="index">
          <div class="wrap-item-product w100 fl">
            <div :title="data.name"
                 class="avatar-product w100 fl ">
              <nuxt-link
                :title="data.name"
                :to="data.link_web"><img
                src="/lazy_load/loading_v4.jpg"
                :title="data.name"
                v-lazy="typeof data.picture[0]!='undefined' ?data.picture[0].url:'/assets/images/default.jpg' "
                :alt="data.name"></nuxt-link>
            </div>
            <div :title="data.name" class="name-product w100 fl">
              <nuxt-link :title="data.name"
                         :to="data.link_web" v-html="data.name"></nuxt-link>
            </div>
            <div class="product_favorite">
              <div class="content_favorite"><span class="tick-svg-icon icon-tick"></span> yêu thích
              </div>
            </div>
            <div class="price-shipping-product w100 fl">
              <div class="price-product">
                <ins>₫{{convertVND(data.price)}}</ins>
              </div>
              <div class="shipping-svg-icon icon-free-shipping"></div>
            </div>
            <div class="rating-like">
              <div class="rating-like__wrap">
                <div class="like">
                  <div class="shopee-svg-icon icon-like-2"></div>
                  <div class="number-like">10</div>
                </div>
                <div class="rating">
                  <div class="shopee-rating-stars">
                    <div class="shopee-rating-stars__stars">
                      <div class="shopee-rating-stars__star-wrapper">
                        <div class="shopee-rating-stars__lit"><i></i></div>
                        <div class="shopee-rating-stars__lit"><i></i></div>
                        <div class="shopee-rating-stars__lit"><i></i></div>
                        <div class="shopee-rating-stars__lit"><i></i></div>
                        <div class="shopee-rating-stars__lit"><i></i></div>
                      </div>
                    </div>
                  </div>
                  <div class="number-rating">(10)</div>
                  <div class="number-rating" style="display:none;">Chưa có đánh giá</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nuxt-link class="view-all" :to="'/'+list_product_category.link_web" :title="list_product_category.name">Xem tất
          cả
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {functionHelper} from '~/helper/mixins';

  export default {
    props: ['list_product_category', 'class_cate_id'],
    name: "home-list-product",
    mixins: [functionHelper],
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          dotsClass: 'slick-dots-edit',
          dots: true
        }
      }
    }
  }
</script>

