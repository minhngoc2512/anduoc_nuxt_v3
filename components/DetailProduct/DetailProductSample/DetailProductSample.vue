<template>
  <div class="same-pro-right">
    <div class="similar-product">
      <h3>Sản phẩm tương tự</h3>

      <div class="similar-product-item"
           v-for="(data,index) in $store.state.DetailProductStore.data_detail_product.product_same" :key="index">
        <nuxt-link :title="data.name" :to="data.link_web">
          <img :src="$store.state.status_ssr?data.picture[0].url:''" :alt="data.name" class="img-pro-same"  v-lazy="data.picture[0].url"/>
        </nuxt-link>
        <!--<img class="img-pro-hot-same" src="../assets/images/hot.gif"/>-->
        <p class="price-same">
          {{convertVND(data.price)}} VNĐ </p>
        <h4>
          <nuxt-link :title="data.name" :to="data.link_web" v-html="data.name">
          </nuxt-link>
        </h4>
      </div>

    </div>
    <div class="lastProductView">
    </div>
  </div>
</template>

<script>
  import {functionHelper} from '~/helper/mixins/'

  export default {
    name: "detail-product-sample",
    mixins: [functionHelper]
  }
</script>

<style scoped>
  @charset "UTF-8";
  /*start menu-bar */
  #content .wrap-content {
    margin-bottom: auto;
  }

  body.bd-prodetail {
    background: #fff;
  }

</style>
