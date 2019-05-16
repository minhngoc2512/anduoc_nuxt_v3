<template>
  <div>
  <div class="item-product w20 padding-5 fl" data_pro_id="132">
    <div class="wrap-item-product w100 fl">
      <div :title="product_item.name" class="avatar-product w100 fl ">
        <nuxt-link :title="product_item.name" :to="product_item.link_web">
          <img :title="product_item.name"
               src="/lazy_load/loading_v4.jpg"
               v-lazy="typeof product_item.picture[0] !='undefined'?product_item.picture[0].url:'/assets/images/default.jpg'"
               :alt="product_item.name">
        </nuxt-link>
      </div>
      <div :title="product_item.namel" class="name-product w100 fl">
        <nuxt-link :title="product_item.name" :to="product_item.link_web"> {{product_item.name}}</nuxt-link></div>
      <div class="product_favorite">
        <div class="content_favorite"><span class="tick-svg-icon icon-tick"></span> yêu
          thích
        </div>
      </div>
      <div class="price-shipping-product w100 fl">
        <div class="price-product">
          <ins>₫{{product_item.price}}</ins>
        </div>
        <div class="shipping-svg-icon icon-free-shipping"></div>
      </div>
      <div class="rating-like">
        <div class="rating-like__wrap">
          <div class="like">
            <div class="shopee-svg-icon icon-like-2"></div>
            <div class="number-like">99</div>
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
            <div class="number-rating">(99)</div>
            <div class="number-rating" style="display:none;">Chưa có đánh giá</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "cateogory-item-product",
    props:['product_item']
  }
</script>

