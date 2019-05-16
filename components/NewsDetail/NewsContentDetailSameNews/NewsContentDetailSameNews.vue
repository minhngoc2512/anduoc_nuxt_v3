<template>
    <div>
      <div class="new-same-cate">
        <hgroup class="title_box_category">
          <h4><nuxt-link :title="typeof $store.state.DetailNewsStore.data_detail_news.breadcrumb[1]!='undefined'? $store.state.DetailNewsStore.data_detail_news.breadcrumb[1].name:''" :to="typeof $store.state.DetailNewsStore.data_detail_news.breadcrumb[1]!='undefined'?'/'+$store.state.DetailNewsStore.data_detail_news.breadcrumb[1].url:''" class="first" v-html="typeof $store.state.DetailNewsStore.data_detail_news.breadcrumb[1]!='undefined'?$store.state.DetailNewsStore.data_detail_news.breadcrumb[1].name:''"></nuxt-link></h4>
        </hgroup>
        <div class="new-item" v-for="(item_news,index) in $store.state.DetailNewsStore.data_detail_news.news_same" :key="index">
          <p>
          </p>
          <p>
            <nuxt-link :to="item_news.link_web"
               :title="item_news.title" v-html="item_news.title"> </nuxt-link>
          </p>
          <p></p>
        </div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "news-content-detail-sameple-news"
    }
</script>

