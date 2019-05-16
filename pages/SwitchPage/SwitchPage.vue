<template>
  <div v-if="($store.state.loading_status==''&&$store.state.status_ssr==false)||$store.state.status_ssr==true">
    <detail-product v-if="type_page == 'product'"></detail-product>
    <category-content v-if="type_page == 'category'"></category-content>
    <news-content-detail v-if="type_page =='news'"></news-content-detail>
    <news-category v-if="type_page == 'news_category'"></news-category>
  </div>
</template>
<script>
  import NewsCategory from '@/components/NewsCategory/NewsCategory.vue';
  import CategoryContent from '@/components/Category/CategoryContent/CategoryContent.vue';
  import DetailProduct from '@/components/DetailProduct/DetailMain/DetailMain.vue';
  import NewsContentDetail from '@/components/NewsDetail/NewsContentDetail/NewsContentDetail.vue';

  export default {
    data() {
      return {
        type_page: null
      }
    },
    async asyncData({store, params, route, redirect}) {
      try {
        console.time('||'+store.state.user_agent+'||page:' + route.fullPath);

        if (params.category.indexOf('__webpack_hmr') != -1) {
          return false;
        }
        if (params.category.indexOf('.html') != -1) {
          let slug = params.category.slice(0, -5);
          let id = slug.split('-')[slug.split('-').length - 1];
          if (id.indexOf('p') != -1) {
            id = id.slice(1, id.length);
            store.dispatch('ACTION_LOADING_STATUS', {page: 'detail_product'});
            await store.dispatch('ACTION_DATA_DETAIL_PRODUCT', {url: '/product/' + id,user_agent:store.state.user_agent});
            console.timeEnd('||'+store.state.user_agent+'||page:' + route.fullPath);
            return {type_page: 'product'}
          } else if (id.indexOf('news') != -1) {
            id = id.slice(4, id.length);
            store.dispatch('ACTION_LOADING_STATUS', {page: 'detail_news'});
            await store.dispatch('ACTION_DATA_DETAIL_NEWS', {url: '/news/' + id,user_agent:store.state.user_agent});
            console.timeEnd('||'+store.state.user_agent+'||page:' + route.fullPath);
            return {type_page: 'news'}
          }
          throw '404';
          return;
        }
        let id_category_news = params.category.split('-')[params.category.split('-').length - 1];
        if (id_category_news.indexOf('nc') != -1) {
          id_category_news = id_category_news.slice(2, id_category_news.length);
          store.dispatch('ACTION_LOADING_STATUS', {page: 'news-category'});
          await store.dispatch('ACTION_DATA_CATEGORY_NEWS', {url: '/news/categories/' + id_category_news,user_agent:store.state.user_agent});
          console.timeEnd('||'+store.state.user_agent+'||page:' + route.fullPath);
          return {type_page: 'news_category'}
        }
        store.dispatch('ACTION_LOADING_STATUS', {page: 'category'});
        await store.dispatch('ACTION_DATA_CATEGORY', {url: '/categories' + route.fullPath,user_agent:store.state.user_agent});
        console.timeEnd('||'+store.state.user_agent+'||page:' + route.fullPath);
        return {type_page: 'category'}
      } catch (er) {
        store.dispatch('ACTION_LOADING_STATUS', {page: ''});
        return redirect('/error/404');
      }

    },
    name: "switch-page",
    components: {
      CategoryContent: CategoryContent,
      DetailProduct: DetailProduct,
      NewsContentDetail: NewsContentDetail,
      NewsCategory: NewsCategory
    },
    mounted() {
      this.$store.dispatch('ACTION_LOADING_STATUS', {page: ''});
    }
  }
</script>

<style>
  .menu > ul {
    display: none;
  }

  #content {
    padding-bottom: 20px;
  }
</style>
