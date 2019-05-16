<template>
  <div id="content-index">
    <home-product-feature></home-product-feature>
    <div>
    <home-list-product v-for="(list_product_category,index) in $store.state.HomeStore.data_main.main.slice(0,8)" :key="list_product_category.id" :list_product_category="list_product_category"  :class_cate_id="index" ></home-list-product>
    </div>
  </div>
</template>

<script>
  import HomeProductFeature from '@/components/Home/HomeProductFeature/HomeProductFeature.vue';
  import HomeListProduct from '@/components/Home/HomeListProduct/HomeListProduct.vue';

  export default {
    name: "home-content-product",
    data(){
      return{
        class_cate_id:0
      }
    },
    components: {
      HomeProductFeature:HomeProductFeature,
      HomeListProduct:HomeListProduct
    }

  }
</script>
