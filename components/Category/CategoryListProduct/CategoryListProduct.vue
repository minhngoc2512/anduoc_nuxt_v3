<template>
  <div>
    <div class="box-lis-product w100 fl" v-if="$store.state.CategoryProductStore.isLoad_data_category==false">
      <category-item-product
        v-for="(data,index) in $store.state.CategoryProductStore.data_category.product.content.slice(0,25)"
        :product_item="data" v-bind:key="index"></category-item-product>

    </div>
    <div class="box-lis-product w100 fl" v-if="$store.state.CategoryProductStore.isLoad_data_category==true&&$store.state.status_ssr==false">
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
      <div class="item-product w20 padding-5 fl" style="height: 189px">
        <vue-content-loading style="width: 100%" :width="100" :height="100" :primary="'#bdc3c7'"
                             :secondary="'#95a5a6'">
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100"/>
        </vue-content-loading>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryItemProduct from '@/components/Category/CategoryItemProduct/CategoryItemProduct.vue';
  import VueContentLoading from 'vue-content-loading';
  import VlcList from 'vue-content-loading';

  export default {
    name: "category-list-product",
    components: {
      CategoryItemProduct: CategoryItemProduct,
      VueContentLoading,
      VlcList
    }
  }
</script>

