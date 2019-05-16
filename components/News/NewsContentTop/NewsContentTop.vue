<template>
  <div class="new_top">
    <div class="new_top-left">
      <div class="content">
        <nuxt-link :to="$store.state.NewsStore.data_news.first_new.link_web"
                   :title="$store.state.NewsStore.data_news.first_new.title">
          <img data-source=""
               v-lazy="$store.state.NewsStore.data_news.first_new.picture" onerror=""/>
        </nuxt-link>
        <h4 class="new-lead">
          <nuxt-link :to="$store.state.NewsStore.data_news.first_new.link_web"
                     :title="$store.state.NewsStore.data_news.first_new.title"
                     v-html="$store.state.NewsStore.data_news.first_new.title">
          </nuxt-link>
        </h4>
        <p v-html="$store.state.NewsStore.data_news.first_new.teaser"></p>
      </div>
    </div>
    <div class="new_top-right">
      <ul>
        <li v-for="(data,index) in $store.state.NewsStore.data_news.news" :key="index">
          <div class="content">
            <div class="new_top-right-image">
              <img v-lazy="data.picture"
                   src="/lazy_load/loading_v4.jpg"
                   :alt="data.title"
                   :title="data.title"/>
            </div>
            <div class="content-text">
              <h4>
                <nuxt-link :to="data.link_web"
                           :title="data.title" v-html="data.title"></nuxt-link>
              </h4>
              <p v-html="data.teaser"></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news-content-top",
    mounted() {
      // console.log( this.$store.state.NewsStore.data_news);
    },
  }
</script>

