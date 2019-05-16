<template>
  <div>
    <div id="brg_body" class=""></div>
    <app-header></app-header>
    <loading-home v-if="$store.state.loading_status=='home'&&$store.state.status_ssr==false"></loading-home>
    <loading-category v-if="$store.state.loading_status=='category'&&$store.state.status_ssr==false"></loading-category>
    <loading-detail-product v-if="$store.state.loading_status=='detail_product'&&$store.state.status_ssr==false"></loading-detail-product>
    <loading-news v-if="$store.state.loading_status=='news'&&$store.state.status_ssr==false"></loading-news>
    <loading-detail-news v-if="$store.state.loading_status=='detail_news'&&$store.state.status_ssr==false"></loading-detail-news>
    <nuxt/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header.vue';
  import Footer from '@/components/Footer/Footer.vue';
  import LoadingHome from '@/components/LoadingPage/LoadingHome/LoadingHome.vue';
  import LoadingDefault from '@/components/LoadingPage/LoadingDefault/LoadingDefault.vue'
  import LoadingCategory from '@/components/LoadingPage/LoadingCategory/LoadingCategory.vue'
  import LoadingDetailProduct from '@/components/LoadingPage/LoadingDetailProduct/LoadingDetailProduct.vue';
  import LoadingNews from '@/components/LoadingPage/LoadingNews/LoadingNews.vue';
  import LoadingDetailNews from '@/components/LoadingPage/LoadingDetailNews/LoadingDetailNews.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
      LoadingHome,
      LoadingDefault,
      LoadingCategory,
      LoadingDetailProduct,
      LoadingNews,
      LoadingDetailNews
    }
  }
</script>


