<template>
  <div class="product-hot-col">
    <hgroup class="title_box_category_product">
      <h4><a title="xem nhiều nhất" href=":;" class="first">Sản phẩm hot</a></h4>
    </hgroup>


    <div class="product-hot-item" v-for="(item_product,index) in $store.state.DetailNewsStore.data_detail_news.product"
         :key="index" v-if="item_product.name.length>3">

      <div class="pro-hot-item-image">
        <img data-src="/1/assets/images/noimage.png"
             :src="$store.state.status_ssr&&typeof item_product.picture[0]!='undefined'?item_product.picture[0].url:''"
             v-lazy="typeof item_product.picture[0]!='undefined'?item_product.picture[0].url:''"
             onerror="">
      </div>

      <div class="pro-hot-item-text">


        <h4>
          <nuxt-link :title="item_product.name" :to="item_product.link_web" v-html="item_product.name"></nuxt-link>
        </h4>


        <p class="price-same">
          Liên hệ </p>


      </div>


    </div>

  </div>
</template>

<script>
  export default {
    name: "news-content-detail-product"
  }
</script>
