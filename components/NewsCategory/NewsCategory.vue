<template>

  <section id="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <div class="clear-fix"></div>
        <div class="new_content">
          <div class="new_top">
            <ul class="breadcrumbs" style="height: 36px">
              <ol class="breadcrumb-page " itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem"><a itemprop="item" title="Trang chủ"
                                                             href="http://dev.anduoc.vn"><span
                  itemprop="name">Trang chủ</span></a>
                  <meta itemprop="position" content="1">
                </li>
                <li v-for="(data,index) in $store.state.CategoryNews.data_category_news.breadcrumb" :key="index"
                    class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem">
                  <nuxt-link itemprop="item" :title="data.name" :to="data.url">
                    <span itemprop="name" v-html="data.name"></span>
                  </nuxt-link>
                  <meta itemprop="position" :content="index+2">
                </li>

              </ol>
            </ul>
            <div class="new_top">
              <div class="new_top-left">

                <div class="content">
                  <nuxt-link :to="$store.state.CategoryNews.data_category_news.new_first.link_web"
                             :title="$store.state.CategoryNews.data_category_news.new_first.title">
                    <img  src="/lazy_load/loading_v4.jpg"  v-lazy="$store.state.CategoryNews.data_category_news.new_first.picture" alt="" onerror="">
                  </nuxt-link>
                  <h4>
                    <nuxt-link :to="$store.state.CategoryNews.data_category_news.new_first.link_web"
                               :title="$store.state.CategoryNews.data_category_news.new_first.title"
                               v-html="$store.state.CategoryNews.data_category_news.new_first.title"></nuxt-link>
                  </h4>
                  <p v-html="$store.state.CategoryNews.data_category_news.new_first.teaser"></p>
                </div>

              </div>
              <div class="new_top-right">
                <ul>
                  <li>

                    <div class="content" v-for="(data,index) in $store.state.CategoryNews.data_category_news.news_hot"
                         :key="index">
                      <div class="new_top-right-image">
                        <img  src="/lazy_load/loading_v4.jpg"  v-lazy="data.picture" :alt="data.title"
                             :title="data.title" width="45%" height="90px"
                             onerror="">
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
          </div>
          <div class="new-bottom">
            <div class="list-cat">
              <div class="list-cat-item" v-for="(data,index) in $store.state.CategoryNews.data_category_news.news.child"
                   :key="index">
                <div class="detail">
                  <div class="top">
                    <div class="image">
                      <img  src="/lazy_load/loading_v4.jpg"  v-lazy="data.picture" :alt="data.title"
                           :title="data.title"
                           onerror="">
                    </div>
                    <div class="teaser">
                      <h3>
                        <nuxt-link :to="data.link_web"
                                   :title="data.title" v-html="data.title"></nuxt-link>
                      </h3>
                      <p v-html="data.teaser"></p>
                      <p class="date-news-cate">
                        <i class="fa fa-clock-o">

                        </i>{{data.date}}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="pagiantion-product-by-category w100 fl center">
              <span v-if="$store.state.CategoryNews.data_category_news.page.link_first!=''" v-on:click="current_page=1">
                <a>
                  <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                </a>
              </span>
              <span class="res_large" v-if="$store.state.CategoryNews.data_category_news.page.link_prev!=''"
                    v-on:click="current_page=current_page-1">
                <a>
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
              </span>
              <span v-for="(data,index) in $store.state.CategoryNews.data_category_news.page.page"
                    :class="data.class"
                    v-on:click="data.title=='...'?current_page=current_page:current_page=parseInt(data.title)"
                    :key="index">
                <a :title="data.title">{{data.title}}</a>
              </span>
              <span class="res_large" v-if="$store.state.CategoryNews.data_category_news.page.link_next!=''"
                    v-on:click="current_page=current_page+1">
                <a>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </span>
              <span v-if="$store.state.CategoryNews.data_category_news.page.link_last!=''"
                    v-on:click="current_page= $store.state.CategoryNews.data_category_news.page.total_page">
                <a>
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="hot-product">
          <div class="product-hot-item" v-for="(data,index) in $store.state.CategoryNews.data_category_news.product"
               :key="index">
            <div class="pro-hot-item-image">
              <img v-lazy="typeof data.picture[0]!='undefined'?data.picture:'/assets/images/default.jpg'"
                   src="/lazy_load/loading_v4.jpg"
                   onerror="">
            </div>
            <div class="pro-hot-item-text">
              <h4>
                <nuxt-link :title="data.name" :to="data.link_web" v-html="data.name"></nuxt-link>
              </h4>
              <p class="price-same">
                {{convertVND(data.price)}} VNĐ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End content-index-->
  </section>
</template>

<script>
  import {functionHelper} from '~/helper/mixins'
  export default {
    name: "news-category",
    mixins: [functionHelper],
    data() {
      return {
        current_page: this.$store.state.CategoryNews.data_category_news != null ? this.$store.state.CategoryNews.data_category_news.news.current_page : 0,
        id_cate: 0
      }
    },
    mounted() {
      this.getIdCategory();
    },
    watch: {
      current_page: function () {
        console.log(this.current_page);
        this.getDataNews();
      }
    },
    methods: {
      getDataNews() {
        this.$store.dispatch('ACTION_DATA_CATEGORY_NEWS', {url: '/news/categories/' + this.id_cate + '?page=' + this.current_page});
        window.history.pushState({}, '', '?' + 'page=' + this.current_page);
      },
      getIdCategory() {
        let id_category_news = this.$route.params.category.split('-')[this.$route.params.category.split('-').length - 1];
        this.id_cate = id_category_news.slice(2, id_category_news.length);
      }
    },
    head() {
      return {
        title: this.$store.state.CategoryNews.data_category_news != null ? this.$store.state.CategoryNews.data_category_news.title : '',
        meta: this.$store.state.CategoryNews.data_category_news != null ? this.$store.state.CategoryNews.data_category_news.meta : []
      }
    }
  }
</script>

<style>
  body {
    background: #f5f5f5;
  }

</style>
<style scoped>
  .pagiantion-product-by-category {
    padding-bottom: 20px;
  }
</style>
