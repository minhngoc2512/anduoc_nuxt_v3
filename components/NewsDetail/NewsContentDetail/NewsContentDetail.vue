<template>
    <section id="content"  >
      <div class="inner-content g1180">
        <div class="wrap-content w100 fl">
          <div class=" content-detail">

            <ul class="breadcrumbs">
              <ol class="breadcrumb-page " itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem"><a itemprop="item" title="Trang chủ"
                                                             href="http://dev.anduoc.vn"><span
                  itemprop="name">Trang chủ</span></a>
                  <meta itemprop="position" content="1">
                </li>
                <li class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem"><a itemprop="item" title="Tin tức-sự kiện"
                                                             href="http://dev.anduoc.vn/tin-tuc"><span itemprop="name">Tin tức-sự kiện</span></a>
                  <meta itemprop="position" content="2">
                </li>
                <li class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem"><a itemprop="item" title="Sức khỏe"
                                                             href="http://dev.anduoc.vn/suc-khoe-nc65"><span
                  itemprop="name">Sức khỏe</span></a>
                  <meta itemprop="position" content="3">
                </li>
                <li class="item-breadcrumb" itemprop="itemListElement" itemscope=""
                    itemtype="http://schema.org/ListItem"><a itemprop="item"
                                                             title="3 Lý do thuyết phục bạn nên tập bơi ngay bây giờ"
                                                             href="http://dev.anduoc.vn/3-ly-do-thuyet-phuc-ban-nen-tap-boi-ngay-bay-gio.html-news181.html"><span
                  itemprop="name">3 Lý do thuyết phục bạn nên tập bơi ngay bây giờ</span></a>
                  <meta itemprop="position" content="4">
                </li>
              </ol>
            </ul>
            <div class="clear-fix"></div>

       <news-content-detail-main></news-content-detail-main>
          </div>

          <div class="hot-product-new">
           <news-content-detail-product></news-content-detail-product>
         <news-content-detail-same-news></news-content-detail-same-news>
          </div>
        </div>
      </div>
      <!--End content-index-->
      <div class="clear-fix"></div>
    </section>
</template>

<script>
  import NewsContentDetailMain from '@/components/NewsDetail/NewsContentDetailMain/NewsContentDetailMain.vue';
  import NewsContentDetailProduct from '@/components/NewsDetail/NewsContentDetailProduct/NewsContentDetailProduct.vue';
  import NewsContentDetailSameNews from '@/components/NewsDetail/NewsContentDetailSameNews/NewsContentDetailSameNews.vue';
  export default {
    name: "news-content-detail",
    components:{
      NewsContentDetailMain: NewsContentDetailMain,
      NewsContentDetailProduct: NewsContentDetailProduct,
      NewsContentDetailSameNews: NewsContentDetailSameNews
    },
    data(){
      return {
        // status_load_data: false
      }
    },
    head(){
      return{
        title:this.$store.state.DetailNewsStore.data_detail_news!=null?this.$store.state.DetailNewsStore.data_detail_news.title:'',
        meta:this.$store.state.DetailNewsStore.data_detail_news!=null?this.$store.state.DetailNewsStore.data_detail_news.meta:[]
      }
    },
  }
</script>

<style scoped>
  #content{
    background: #f5f5f5;
  }
</style>
