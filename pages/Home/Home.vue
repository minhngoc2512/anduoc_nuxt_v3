<template>
  <home-content
    v-if="($store.state.loading_status==''&&$store.state.status_ssr==false)||$store.state.status_ssr==true"></home-content>
</template>

<script>
  import HomeContent from "@/components/Home/HomeContent/HomeContent.vue";
  import LoadingHome from '@/components/LoadingPage/LoadingHome/LoadingHome.vue'

  export default {
    data() {
      return {
        status_load_data: false
      }
    },
    async asyncData({store, redirect, error,route}) {
      // if(store.state.status_ssr){
      //   let date = new Date();
      //   console.log("Time:"+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds()+' '+date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear())
      // }
        store.dispatch('ACTION_LOADING_STATUS', {page: 'home'});

      let thread_1 = new Promise(async (resolve, reject) => {
        try {
           await store.dispatch('getMenuHeader');
          resolve();
        } catch (error) {
          reject(error)
        }
      });

        let thread_2 = new Promise(async (resolve, reject) => {
          try {
            await   store.dispatch('ACTION_DATA_HOME', {url: '/home',user_agent:store.state.user_agent});
            resolve();
          } catch (error) {
            reject(error)
          }
        });

        let thread_3 = new Promise(async (resolve, reject) => {
          try {
            await store.dispatch('ACTION_HOT_PRODUCT', {url: '/product/hot',user_agent:store.state.user_agent});
            resolve();
          } catch (error) {
            reject(error)
          }
        });
        console.time('||'+store.state.user_agent+'||page:'+route.fullPath);
        await Promise.all([thread_1,thread_2, thread_3])
          .then(function (res) {
            return;
          })
          .catch(function (err) {
            console.error("Promise.all error:", err);
            return error({statusCode:404,message:'Connect to api error'})
          });
        console.timeEnd('||'+store.state.user_agent+'||page:'+route.fullPath);
    },
    layout: 'default',
    name: "Home",
    components: {
      HomeContent: HomeContent,
      LoadingHome
    },
    head() {
      return {
        title: this.$store.state.HomeStore.data_main != null ? this.$store.state.HomeStore.data_main.title : '',
        meta: this.$store.state.HomeStore.data_main != null ? this.$store.state.HomeStore.data_main.meta : []
      }
    },
    mounted() {
      this.$store.dispatch('ACTION_LOADING_STATUS', {page: ''});
    }
  }
</script>
<style>
  #content {
    padding-bottom: 20px;
  }
</style>
