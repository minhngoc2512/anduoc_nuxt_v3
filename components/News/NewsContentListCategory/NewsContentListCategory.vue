<template>
  <div class="new-bottom">
    <div class="new-category">
      <div class="new-category-item" v-for="(cate_news,index) in $store.state.NewsStore.data_news.cate_news" :key="index">
        <h3>
          <nuxt-link :to="cate_news.link_web" :title="cate_news.title" v-html="cate_news.title"></nuxt-link>
        </h3>
        <div class="new-category-item-first-image" v-if="typeof cate_news.child[0] !='undefined'">
          <nuxt-link :to="cate_news.child[0].link_web"
             :title="cate_news.child[0].title">
            <img  src="/lazy_load/loading_v4.jpg"  v-lazy="cate_news.child[0].picture" alt="" onerror="">
          </nuxt-link>
        </div>
        <div class="new-category-item-first-text"  v-if="typeof cate_news.child[0] !='undefined'">
          <h4>
            <nuxt-link :to="cate_news.child[0].link_web"
                 :title="cate_news.child[0].title" v-html="cate_news.child[0].title"></nuxt-link>
          </h4>
          <p v-html="cate_news.child[0].teaser"></p>
        </div>
        <ul>
          <li v-for="(item_news_child,index) in cate_news.child.slice(1,5)" :key="index">
            <div class="new-category-item-image">
              <nuxt-link :to="item_news_child.link_web" :title="item_news_child.title">
                <img  src="/lazy_load/loading_v4.jpg" v-lazy="item_news_child.picture" :alt="item_news_child.title"
                     onerror="">
              </nuxt-link>
            </div>
            <div class="new-category-item-title">
              <nuxt-link :to="item_news_child.link_web"
                 :title="item_news_child.title" v-html="item_news_child.title"> </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news-content-list-category"
    }
</script>

