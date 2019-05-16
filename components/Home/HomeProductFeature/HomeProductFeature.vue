<template>
  <div id="slide-product" class="g1180">
    <div id="slide-product-title"><p></p>
      <p></p> <span>Sản phẩm mua nhiều</span>
      <div class="list-filter"><a href="javascipt:void(0)" v-on:click="filterAction('new', this)" id="news_pro_home"
                                  class="">Mới
        nhất</a> <a href="javascipt:void(0)" v-on:click="filterAction('hot', this)" id="hot_pro_home" class="active">Hot
        nhất</a>
      </div>
    </div>
    <div id="carousel-wraper"><span class="loading-content display-slide"></span>
      <div id="slider-play">
        <div id="hot" class="hidden-slide active">
          <ul class="product-slider">
            <div class="slicktest">
                <div class="item-product w20 padding-5 fl" v-for="(data,index) in $store.state.HomeStore.hot_product"
                     :key="index">
                  <div class="wrap-item-product w100 fl">
                    <div :title="data.name"
                         class="avatar-product w100 fl ">
                      <nuxt-link
                        :title="data.name"
                        :to="data.link_web">
                        <img src="/lazy_load/loading_v4.jpg" :title="data.name"
                             v-lazy="data.picture[0].url"
                             :alt="data.name"></nuxt-link>
                    </div>
                    <div :title="data.name"
                         class="name-product w100 fl">
                      <nuxt-link
                        :title="data.name"
                        :to="data.link_web" v-html="data.name"></nuxt-link>
                    </div>
                    <div class="product_favorite">
                      <div class="content_favorite"><span class="tick-svg-icon icon-tick"></span>
                        yêu thích
                      </div>
                    </div>
                    <div class="product-sale" v-if="data.old_price!=0">
                      <p class=" number">{{setProductSale(data.price,data.old_price)}}%</p>
                      <p class="text">{{parseInt(data.price)>parseInt(data.old_price)?'Giảm':'Tăng'}}</p>
                    </div>
                    <div class="price-shipping-product w100 fl">
                      <div class="price-product">
                        <del> ₫{{convertVND(data.old_price)}}</del>
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
                          <div class="number-rating" style="display:none;">Chưa có đánh giá
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </ul>
        </div>
        <div id="new" class="hidden-slide"></div>
        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {functionHelper} from '~/helper/mixins';

  export default {
    name: "home-product-feature",
    mixins: [functionHelper],
    serverCacheKey: ()=>{return 'home-product-feature'},
    data() {
      return {
        slickOptions: {
          slidesToShow: 5,
          slidesToScroll: 5,
          prevArrow: '<button type="button" class="slick-prev-edit"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow: '<button type="button" class="slick-prev-edit right-slick"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
        }
      }
    },
    methods: {
      setProductSale(new_price, old_price) {
        new_price = parseInt(new_price);
        old_price = parseInt(old_price);
        let value = (new_price / old_price) * 100;
        return parseInt(value);
      },
      filterAction(item, el) {
        $('.list-filter a').removeClass('active');
        item == 'new' ? $('#news_pro_home').addClass('active') : $('#hot_pro_home').addClass('active');
        this.$store.dispatch('ACTION_HOT_PRODUCT', {url: '/product/' + item});
      }
    }
  }
</script>

