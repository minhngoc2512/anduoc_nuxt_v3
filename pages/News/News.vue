<template>
  <news-content
    v-if="($store.state.loading_status==''&&$store.state.status_ssr==false)||$store.state.status_ssr==true"></news-content>

</template>
<script>
  import NewsContent from '@/components/News/NewsContent/NewsContent.vue';
  import LoadingNews from '@/components/LoadingPage/LoadingNews/LoadingNews.vue';

  export default {
    async asyncData({params, store, redirect,route}) {
      try {
        console.time('||'+store.state.user_agent+'||page:' + route.fullPath);
        store.dispatch('ACTION_LOADING_STATUS', {page: 'news'});
        await store.dispatch('ACTION_DATA_NEWS', {url: '/news',user_agent:store.state.user_agent});
        console.timeEnd('||'+store.state.user_agent+'||page:' + route.fullPath);
      } catch (er) {
        store.dispatch('ACTION_LOADING_STATUS', {page: ''});
        return redirect('/error/404');
      }
    },
    name: "news",
    components: {
      LoadingNews: LoadingNews,
      NewsContent: NewsContent
    },
    head() {
      return {
        title: this.$store.state.NewsStore.data_news != null ? this.$store.state.NewsStore.data_news.title : '',
        meta: this.$store.state.NewsStore.data_news != null ? this.$store.state.NewsStore.data_news.meta : []
      }
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
