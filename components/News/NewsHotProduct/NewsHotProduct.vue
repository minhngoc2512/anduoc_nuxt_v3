<template>
  <div class="hot-product">
    <div class="product-hot-item" v-for="(data,index) in $store.state.NewsStore.data_news.product" v-if="data.name.toString().length>3" :key="index">
      <div class="pro-hot-item-image">
        <img data-src="" src="/lazy_load/loading_v4.jpg" v-lazy="typeof data.picture[0] !='undefined'?data.picture[0].url:'/assets/images/default.jpg'"
             onerror=""/>
      </div>
      <div class="pro-hot-item-text">
        <h4>
          <nuxt-link :title="data.name"
             :to="data.link_web" v-html="data.name">
          </nuxt-link>
        </h4>
        <p class="price-same">
          {{data.price!=0?convertVND(data.price)+' VNĐ':'Liên hệ'}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import {functionHelper} from '~/helper/mixins';
    export default {
        name: "news-hot-product",
      mixins:[functionHelper]
    }
</script>

