<template>
  <search-content
    v-if="($store.state.loading_status==''&&$store.state.status_ssr==false)||$store.state.status_ssr==true"></search-content>
  <!--<loading-default v-if="$store.state.SearchStore.isLoad_data_search==true&&$store.state.status_ssr==false"></loading-default>-->
</template>

<script>
  import SearchContent from '@/components/SearchContent/SearchContent.vue';
  import LoadingDefault from '@/components/LoadingPage/LoadingDefault/LoadingDefault.vue';


  export default {
    name: "search",
    async asyncData({route, store, redirect}) {
      try {
        store.dispatch('ACTION_LOADING_STATUS', {page: route.name});
        console.time('||'+store.state.user_agent+'||page:'+route.fullPath);
        await store.dispatch('ACTION_DATA_SEARCH', {url: route.fullPath,user_agent:store.state.user_agent})
        console.timeEnd('||'+store.state.user_agent+'||page:'+route.fullPath);
      } catch (er) {
        store.dispatch('ACTION_LOADING_STATUS', {page: ''});
        return redirect('/error/404');
      }
    },
    components: {
      SearchContent: SearchContent,
      LoadingDefault: LoadingDefault
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
</style>
