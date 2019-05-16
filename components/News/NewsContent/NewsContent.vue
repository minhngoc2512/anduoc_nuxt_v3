<template>
  <section id="content">
    <div class="inner-content g1180" >
      <div class="wrap-content w100 fl">
        <div class="clear-fix"></div>
        <div class="new_content">
          <ul class="breadcrumbs">
            <ol class="breadcrumb-page " itemscope itemtype="http://schema.org/BreadcrumbList">
              <li class="item-breadcrumb" itemprop="itemListElement" itemscope
                  itemtype="http://schema.org/ListItem">
                <nuxt-link itemprop="item" title="Trang chủ" to="/">
                <span itemprop="name">Trang chủ</span>
                </nuxt-link>
                <meta itemprop="position" content="1"/>
              </li>
              <li v-for="(data,index) in $store.state.NewsStore.data_news.breadcrumb" :key="index" class="item-breadcrumb" itemprop="itemListElement" itemscope >
                <nuxt-link itemprop="item" :title="data.name" :to="'/'+data.url">
                  <span itemprop="name" v-html="data.name"></span>
                </nuxt-link>
                <meta itemprop="position" :content="index+2"/>
              </li>
            </ol>
          </ul>
          <news-content-top></news-content-top>
          <news-content-list-category></news-content-list-category>
        </div>
        <news-hot-product></news-hot-product>
      </div>
    </div>
    <!--End content-index-->
    <div class="clear-fix"></div>
  </section>
    <!--<loading-news v-if="status_load_data"></loading-news>-->
</template>

<script>
  import NewsContentListCategory from '@/components/News/NewsContentListCategory/NewsContentListCategory.vue';
  import NewsContentTop from '@/components/News/NewsContentTop/NewsContentTop.vue';
  import NewsHotProduct from '@/components/News/NewsHotProduct/NewsHotProduct.vue';
  export default {
    name: "news-content",
    components: {
      NewsContentListCategory: NewsContentListCategory,
      NewsContentTop: NewsContentTop,
      NewsHotProduct: NewsHotProduct
    },
    data(){
      return{
        // status_load_data:false
      }
    },
    methods:{
      // getData(){
      //   this.status_load_data = true;
      //    axios.get(process.env.domain_api + '/news').then(response => {
      //     if (response.data.status != 200) {
      //       console.log('error server - news page:' + response.data.status);
      //       return window.location = '/error/404'
      //     }
      //     this.$store.commit('updateNewsPage', {data: response.data.data});
      //      this.status_load_data = false;
      //   }).catch(error => {
      //     console.log('api news page: error:' + error);
      //     return window.location = '/error/500'
      //   });
      // }
    }
  }
</script>

<style scoped>
  #content{
    background: #f5f5f5;
  }
</style>
