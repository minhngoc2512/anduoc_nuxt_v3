<template>
    <section id="content" class="content">
      <div class="inner-content g1180" >

        <div class="wrap-content w100 fl">
          <div class="breadcrumbs">
            <ol class="breadcrumb-page " itemscope itemtype="http://schema.org/BreadcrumbList">
              <li class="item-breadcrumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <nuxt-link itemprop="item" title="Trang chủ" to="/">
                  <span itemprop="name">Trang chủ</span>
                </nuxt-link>
                <meta itemprop="position" content="1"/>
              </li>
              <li v-for="(data,index) in $store.state.DetailProductStore.data_detail_product.breadcrumb" :key="index" class="item-breadcrumb"
                  itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <nuxt-link itemprop="item" :title="data.name" :to="data.url">
                  <span itemprop="name" v-html="data.name"></span></nuxt-link>
                <meta itemprop="position" :content="index+2"/>
              </li>
            </ol>
          </div>
          <detail-product-introduct></detail-product-introduct>
          <detail-product-sample></detail-product-sample>
          <!--sample item-->
        </div>
      </div>
    </section>

</template>
<script>
  import DetailProductIntroduct from '@/components/DetailProduct/DetailProductIntroduct/DetailProductIntroduct.vue';
  import DetailProductSample from '@/components/DetailProduct/DetailProductSample/DetailProductSample.vue';
  export default {
    name: "detail-product-content",
    components: {
      DetailProductIntroduct: DetailProductIntroduct,
      DetailProductSample: DetailProductSample
    },
    data(){
      return {
      }
    },
    head() {
      return {
        title: this.$store.state.DetailProductStore.data_detail_product != null ? this.$store.state.DetailProductStore.data_detail_product.title : '',
        meta: this.$store.state.DetailProductStore.data_detail_product != null ? this.$store.state.DetailProductStore.data_detail_product.meta : []
      }
    },
  }
</script>

<style scoped>
  @charset "UTF-8";
  /*start menu-bar */
  .menu > ul {
    display: none;
  }

  #content .wrap-content {
    margin-bottom: auto;
  }

  body {
    background: #fff;
  }

  .breadcrumbs {
    height: 46px;
    line-height: 46px;
  }

  .breadcrumbs ul li a {
    color: #666;
    display: block;
  }

  .breadcrumbs ul {
    display: inline-flex;
    list-style-type: circle;
  }

  .breadcrumbs ul li {
    margin-left: 5px;
  }

  .breadcrumbs ul li:last-child {
    font-weight: bold;
    color: #666;
  }

  .breadcrumbs ul span {
    margin-left: 5px;
  }

  /*sop menu-bar*/
  .introduce-product {
    width: 80%;
    float: left;
    margin-bottom: 15px;
  }

  .same-pro-right {
    width: 20%;
    float: left;
    /* margin-top: 30px; */
  }

  #comment {
    width: 100%;
    height: 42px;
  }

  /*first product view  */
  .fistProductView {
    width: 43.5%;
    float: left;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .productImage {
    border: 1px solid #f5f5f5;
    overflow: hidden;
    width: 100%;
    height: 393px;
  }

  .productImage img {
    width: 100%;
    /* height: 393px; */
    height: 100%;
    object-fit: contain;
  }

  .productImageZoomItem {
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
  }

  .productImageZoomItem img {
    width: 60px;
    height: 60px;
    border: 1px solid #f5f5f5;
    margin-left: 38px;
    cursor: pointer;
  }

  .productTag {
    margin-left: 26px;
  }

  .productTag a {
    margin-right: 5px;
  }

  .productTag span {
    background-color: #f2f2f2;
    border-radius: 20px;
    color: #999;
    padding: 2px 5px;
  }

  .productTag span:hover {
    color: #fff;
    background-color: #c8ced8;
  }

  .social-network {
    margin-top: 12px;
    margin-left: 17px;
  }

  .social-network ul {
    display: inline-flex;

  }

  .social-network ul li {
    margin-left: 20px;
    text-align: center;

  }

  .social-network ul li p {
    background-color: #4267b2;
    color: white;
    border: white;
    border-radius: 3px;
    height: 20px;
    padding: 0 0px;
    width: 72px;
    font-size: 11px;
    line-height: 20px;
    font-weight: bold;
    display: inline-block;

  }

  /*middle Product View*/
  .middleProductView {
    width: 56.5%;
    float: left;
    /* padding-right: 10px; */
    box-sizing: border-box;
  }

  .middleProductView::after {
    content: "";
    width: 100%;
    clear: both;
  }

  .info-product {
    float: left;
    width: 100%;
    /* padding-right: 10px; */
    box-sizing: border-box;
    line-height: 24px;
    margin-top: 10px;
  }

  a.view-all-detail {
    display: none;
  }

  .info-product img {
    max-width: 100% !important;
    /* width: 100% !important; */
    max-height: 100% !important;
  }

  .productRate {
    width: 100%;
    /* margin-top: 30px; */
  }

  .productRate h1 {
    width: 100%;
    float: left;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .productRate .code-product {
    color: #61bc48;
    font-size: 17px;
    padding-top: 5px;
    width: 100%;
    float: left;
  }

  .productRate .like-product {
    font-size: 11px;
    float: left;
    width: 100%;
    margin-top: 10px;
  }

  .productRate .like-product a span {
    font-weight: bold;
  }

  .vote-view {
    margin-top: 15px;
    display: inline-flex;
  }

  .vote-view li {
    margin-right: 35px;
  }

  .vote-view li span {
    font-size: 11px;
    color: #747474;
  }

  .vote-view li span.large {
    font-weight: bold;
    font-size: 15px;
    color: #3c974f;
  }

  .vote-view li span.large.large-34 {
    color: #3388c0;
  }

  .vote-view li i {
    color: #e5e5e5;
  }

  .BillInformation {
    /* border: 1px solid #61BC48; */
    margin-top: 15px;
    /* padding: 20px; */
  }

  .BillInformation h1 {
    font-weight: normal;
  }

  .BillInformation p {
    font-size: 12px;
    color: #333;
    line-height: 22px;
    margin-top: 5px;
  }

  .BillInformation p.save-prodetail {
    color: #000;
  }

  p.price-pro {
    font-size: 25px;
    line-height: 19px;
    color: #f04e23;
    font-weight: normal;
    /* margin-bottom: 5px; */
    font-weight: bold;
  }

  .ProductInformation {
    margin-top: 15px;
  }

  .ProductInformation > h3 {
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #000;
    /* border-bottom: 1px solid #000; */
    padding-bottom: 5px;
    font-size: 15px;
  }

  .ProductInformation table {
    border-spacing: 0;
    width: 100%;
    border-collapse: collapse;
  }

  .ProductInformation table tr {
    line-height: 25px;
    box-sizing: border-box;
  }

  .ProductInformation table td.bold {
    background-color: #fafafa;
    width: 30%;
    font-weight: bold;
    border: 1px solid transparent;
  }

  .ProductInformation table td {
    border: 1px solid #f2f2f2;
    padding: 2px 15px !important;
    width: 70%;
  }

  tr {
    border: 1px solid #3848eb;
  }

  td {
    /*text-align: center;*/
    border: 1px solid #fafafa;
    line-height: 24px;
    padding-left: 19px;
    font-size: 12px;

  }

  .SaleProduct {
    width: 100%;
    float: left;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .SaleProduct {
    width: 100%;
    float: left;
  }

  .SaleProduct ul {
    display: inline-flex;
  }

  .SaleProduct ul li {
    height: 30px;
    margin-right: 22px;
    line-height: 30px;
    margin-left: 0;
  }

  .SaleProduct ul li input {
    height: 34px;
    border-radius: 0px 3px 3px 0px;
    border: 1px solid #eee;
    padding-left: 5px;
    box-sizing: border-box;
    width: 60px;
    border-right: none;
  }

  .SaleProduct ul li h1 {
    font-weight: normal;
    font-size: 14px;
    line-height: 34px;
  }

  .plus {
    font-size: 15px;
    cursor: pointer;
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #e8e8e8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    line-height: 13px;
    margin-left: 45px;
    margin-top: -34px;

  }

  .minus {
    font-size: 15px;
    cursor: pointer;
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #e8e8e8;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    line-height: 13px;
    margin-left: 45px;
    margin-top: -15px;

  }

  .btn-number {
    width: 21px;
    background-color: #e8e8e8;
    border: none;
    color: white;
    cursor: pointer;
  }

  .dathang {
    position: relative;
  }

  .dathanghover {
    display: block;
    background-color: #2b2b2b;
    width: 100px;
    height: 30px;
    display: none;
    margin-top: -43%;
    position: relative;
    color: white;
    padding: 4px 6px;
    text-align: center;
    border-radius: 3px;
    transition: 0.4s all;
  }

  .dathang:hover .dathanghover {
    background: black;
    display: block;
    width: 100%;
  }

  .dathang:hover .dathanghover::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    top: 20px;
    left: 91px;
    background: black;
    z-index: -1;

    transform: rotate(-45deg);
  }

  .thanhtoan {
    position: relative;
  }

  .thanhtoanhover {
    display: block;
    background-color: #2b2b2b;
    width: 100px;
    height: 30px;
    display: none;
    margin-top: -43%;
    position: relative;
    color: white;
    padding: 4px 6px;
    text-align: center;
    border-radius: 3px;
    transition: 0.4s all;
  }

  .thanhtoan:hover .thanhtoanhover {
    background: black;
    display: block;
    width: 100%;
  }

  .thanhtoan:hover .thanhtoanhover::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    top: 20px;
    left: 91px;
    background: black;
    z-index: -1;

    transform: rotate(-45deg);
  }

  .support-online {
    border-top: 1px solid #f2f2f2;
    margin-top: 10px;
    padding-top: 7px;
    /* margin-left: 15px; */
  }

  .support-online h2 {
    font-size: 14px;
    line-height: 20px;
  }

  .support-online p {
    line-height: 22px;
  }

  .support-online p i {
    margin-right: 5px;
  }

  .add-to-cart button {
    width: 180px;
    height: 40px;
    background-color: #f25220;
    margin-right: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    transition: 0.8s;
    border: 1px solid transparent;
  }

  .add-to-cart button i {
    color: white;
    line-height: 40px;
    padding: 0 10px;
    border-right: 1px solid #fff;
    float: left;
  }

  .add-to-cart button span {
    line-height: 40px;
    font-weight: bold;
  }

  .lastProductView {
    width: 20%;
    float: left;
  }

  .address-kho {
    width: 100%;
  }

  .address-kho i {
    opacity: 0.5;
    color: #2f3dc7;
    margin-right: 5px;
  }

  .address-hover:hover {
    padding-left: 5px;

  }

  .address-hover {
    color: black;
    padding: 11px 0;
    border-bottom: 1px dashed #cccccc;
    line-height: 22px;
  }

  .address-hover span {
    font-weight: bold;
  }

  .policys {
    width: 100%;
    float: left;
    margin-top: 5px;
  }

  .policys p {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 10px;
  }

  .information-result {
    width: 100%;
    float: left;
  }

  .information-result p {
    line-height: 24px;
  }

  .information-result-title {
    height: 39px;
    background-color: #fafafa;
    border-bottom: 1px solid #cccccc9e;
    margin-bottom: 10px;
    line-height: 39px;
  }

  .information-result-title span {
    background: white;
    margin-left: 15px;
    border-top: 2px solid #61bc48;
    float: left;
    padding: 0 20px;
    font-size: 14px;
    cursor: pointer;
  }

  .information-result-title > span.active {
    background: #fff;
    border-color: #f04e23 #ccc;
  }

  .information-result-content {
    float: left;
    width: 100%;
  }

  .information-result-content-image {
    margin-left: 349px;

  }

  .information-result-content-image img {
    width: 243px;
    height: 252px;
  }

  .information-result-content-Information-out {

  }

  .information-result-content-Information-out p {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 30px;
  }

  .product-evaluate {
    width: 100%;
    float: left;
    margin-top: 10px;
  }

  .product-evaluate-title {
    /*float: left;*/
    /*height: 39px;*/
    /*background-color: #eee;*/
    /*border-bottom: 1px solid #ccc;*/
    /*width: 100%;*/
  }

  /*.product-evaluate-title h3 {*/
  /*float: left;*/
  /*padding: 11px 15px;*/
  /*background-color: #fff;*/
  /*margin-left: 15px;*/
  /*border-top: 2px solid #61bc48;*/
  /*}*/

  .product-evaluate-content {
    width: 100%;
    float: left;
  }

  /*.product-evaluate-box {*/
  /*background-color: #edf1f3;*/
  /*!* height: 318px; *!*/
  /*margin-top: 22px;*/
  /*float: left;*/
  /*width: 100%;*/
  /*padding: 64px 64px 20px 64px;*/
  /*box-sizing: border-box;*/
  /*}*/

  /*.product-evaluate-box-rate {*/
  /*padding: 64px 64px 10px;*/
  /*}*/

  /*.product-evaluate-box-rate p {*/
  /*color: #61bc48 !important;*/
  /*font-weight: bold;*/

  /*}*/

  .product-evaluate-box-rate p span {
    color: #cccccc;
  }

  .product-evaluate-box-rate p i {
    color: #ccc;
  }

  .product-evaluate-box-rate p a:hover i {
    color: #61bc48;
  }

  /*.product-evaluate-box-content {*/
  /*padding: 20px 64px 15px 64px;*/
  /*!*text-align: center;*!*/
  /*}*/

  /*.product-evaluate-box-content p {*/
  /*color: #61bc48 !important;*/
  /*font-weight: bold;*/
  /*margin-bottom: 50px;*/
  /*}*/
  .product-evaluate-box-content textarea {
    padding: 10px;
    font-size: 14px;
  }

  .product-evaluate-box .btnLogin button, .product-evaluate-box .btnLogin a {
    /*height: 50px;*/
    /*line-height: 32px;*/
    /*display: inline-block;*/
    /*background-color: #61bc48 !important;*/
    /*color: white;*/
    /*font-size: 14px;*/
    /*font-family: Arial, sans-serif;*/
    /*text-align: center;*/
    /*padding: 10px;*/
    /*margin-top: 10px;*/
    /*border: none;*/
    /*outline: none;*/
    /*cursor: pointer;*/
  }

  .btnLogin {
    text-align: center;
  }

  .product-facebook-comment-title {
    height: 39px;
    background-color: #eee;
    border-bottom: 1px solid #ccc;
  }

  .product-facebook-comment-title h3 {
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    padding: 11px 15px;
    background-color: #fff;
    margin-left: 15px;
    border-top: 2px solid #61bc48;
  }

  .product-facebook-comment-content {
    display: block;
  }

  .product-facebook-comment-content h3 {
    border-bottom: 3px solid #61bc48;
    margin-top: 25px;
  }

  .similar-product {
    float: left;
    width: 100%;
    margin-left: 16px;
  }

  .search-fix {
    margin-left: 0;
  }

  .results-search {
    margin-top: 40px;
    margin-bottom: 15px;
    margin-left: 5px;
    font-size: 15px;
  }

  .results-search p span {
    font-weight: bold;
  }

  .similar-product h3 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 24px;
    padding-left: 8px;
  }

  .similar-product-item {
    width: 220px;
    height: 270px;
    border: 1px solid #f2f2f2;
    position: relative;
    margin: 5px 0;
    display: inline-block;
    overflow: hidden;
    transition: 0.4s;
  }

  .search-fix .similar-product-item {
    width: calc(20% - 14px);
    display: block;
    float: left;
    margin: 15px 0 0 0;
    margin-right: 15px;
  }

  .search-fix .similar-product-item:nth-child(5n) {
    margin-right: 0;
  }

  .img-pro-hot-same {
    position: absolute;
    top: -6px;
    left: -6px;
    width: 65px;
    height: 65px;
    margin: 0;
    z-index: 16;
  }

  .similar-product-item:hover {
    border: 1px solid #61bc48 !important;
  }

  .similar-product-item p {
    text-align: center;
  }

  p.price-same {
    display: block;
    font-weight: bold;
    color: #f04e23;
    padding: 3px 0;
    font-size: 14px;
    margin-top: 10px;
    height: 26px;
    overflow: hidden;
  }

  .similar-product-item p {
    font-size: 14px;
  }

  .similar-product-item p span.pro_old {
    font-size: 12px;
    color: #666;
    text-decoration: line-through;
  }

  .similar-product-item > a {
    height: 175px;
    display: block;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .similar-product-item h4 {
    color: #188bb8;
    text-transform: none;
    text-align: center;
    height: 45px;
    overflow: hidden;
    font-size: 14px;
  }

  .similar-product-item h4 a {
    color: #188bb8;
    font-weight: normal;
    line-height: 17px;
    padding: 10px;
    display: block;
  }

  img.img-pro-same {
    width: 100%;
    /* max-height: 100%; */
    height: 100%;
    object-fit: contain;
  }

  .product-seen {
    width: 100%;
    float: left;
    margin-bottom: 45px;
  }

  .product-seen .similar-product-item {
    margin-top: 10px;
  }

  .product-seen h3 {
    border-bottom: 3px solid #61bc48;
    margin-top: 25px;
    width: 100%;
    float: left;
  }

  .product-seen ul {
    display: inline-flex;
  }

  .product-seen ul li {
    margin-left: 10px;
    margin-top: 18px;
  }

  @media only screen and (max-width: 1024px) {
    * {
    }

    .search-fix .item-product.w16.padding-5.fl {
      width: 20%;
    }

    .results-search {
      margin-top: 20px;
    }

    .similar-product-item {
      width: calc(33.3333333% - 15px);
    }

    .similar-product-item {
      margin: 5px;
    }

    .productRate {
      margin-top: 0;
    }

    .productRate h1 {
      font-size: 17px;
    }

    .similar-product h3 {
      font-size: 15px;
      padding-left: 0;
    }

    .introduce-product {
      width: 100%;
    }

    .same-pro-right {
      margin-top: 0;
      width: 100%;
    }

    .breadcrumbs ul li {
      font-size: 14px;
    }

    .breadcrumbs ul {
      /* margin: 10px 0; */
    }

    .breadcrumbs {
      width: 100%;
      /* border-bottom: 3px solid #ebebeb; */
      height: 46px;
    }

    .fistProductView {
      /* width: 50%; */
    }

    .productImage {
      border: none;
      margin-top: 0;
    }

    .productImage img {
      /* margin-left: 15%; */
      max-width: 100%;
      max-height: 100%;
    }

    .productImageZoomItem {
      /* display: none; */
    }

    .add-to-cart button {
      display: block;
      /* width: 100%; */
      margin-top: 3%;
    }

    .add-to-cart button i {
      display: none;
    }

    .support-online {
      display: none;
    }

    .lastProductView {
      width: 100%;
      border-top: 3px solid #ebebeb;
      border-bottom: 3px solid #ebebeb;
      margin-top: 2%;
      padding-top: 2%;
      /* padding-left: 4%; */
    }

    .info-product {
      width: 100%;
      /* padding-left: 3%; */
    }

    .similar-product, .product-seen {
      /* display: none; */
      width: auto;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    * {
    }

    .search-fix .item-product.w16.padding-5.fl {
      width: 25%;
    }

    .similar-product-item p span.pro_old {
      font-size: 11.5px;
    }

    p.price-same {
      font-size: 13px;
    }

    a {
    }

    .ProductInformation > h3 {
      font-size: 14px;
    }

    .ProductInformation {
      margin-top: 10px;
    }

    .same-pro-right {
      width: 100%;
    }

    .introduce-product {
      width: 100%;
    }

    .vote-view {
      display: block;
    }

    .vote-view li {
      display: inline-block;
      margin-right: 5px;
      margin-top: 10px;
    }

    .middleProductView {
      width: 55%;
    }

    .similar-product-item {
      width: calc(33.3333333% - 10px);
      box-sizing: border-box;
      height: 275px;
    }

    .search-fix .similar-product-item {
      width: calc(33.3333333333% - 10px);
    }

    .search-fix .similar-product-item:nth-child(5n) {
      margin-right: 15px;
    }

    .search-fix .similar-product-item:nth-child(3n) {
      margin-right: 0;
    }

    #header-res {
      width: 768px;
      margin-left: 0px;

    }

    #header-hotline {
      width: 768px;

    }

    .breadcrumbs ul li {

      font-size: 14px;

    }

    .breadcrumbs ul {
      /* margin: 10px 0; */
      /* display: flex; */
    }

    .breadcrumbs {
      width: 100%;
      /* border-bottom: 3px solid #ebebeb; */
      /* margin-top: -3%; */
    }

    .fistProductView {
      width: 45%;
    }

    .productImage {
      border: none;
      width: 100%;
      overflow: hidden;
    }

    .productImage img {
      /* margin-left: 15%; */
      width: 100%;
    }

    .productImageZoomItem {
      /* display: none; */
    }

    .add-to-cart button {
      display: block;
      width: calc(50% - 5px);
      margin-top: 0;
    }

    .add-to-cart button i {
      display: none;
    }

    .support-online {
      display: none;
    }

    .lastProductView {
      width: 100%;
      border-top: 3px solid #ebebeb;
      border-bottom: 3px solid #ebebeb;
      margin-top: 2%;
      padding-top: 2%;
      padding-left: 0%;
      display: none;
    }

    .info-product {
      width: 100%;
      /* padding-left: 3%; */
    }

    .similar-product, .product-seen {
      /* display: none; */
      width: auto;
      font-size: 0;
    }

    #comment {
      width: 100%;
    }
  }

  @media only screen and (max-width: 414px) {
    * {
    }

    .results-search {
      margin-left: 0;
    }

    a.view-all-detail {
      display: block;
      color: #0C81F6;
      font-size: 13px;
      text-align: center;
    }

    a.view-all-detail.active {
      display: none;
    }

    a.view-all-detail::after {
      content: '›';
      margin: 0 0 0 5px;
      transform: rotate(90deg);
      position: absolute; /* font-size: 15px; */
    }

    .information-result-content {
      height: 100px;
      overflow: hidden;
    }

    .information-result-content.active {
      height: auto;
    }

    .similar-product-item > a {
      height: 140px;
    }

    .similar-product-item {
      width: calc(50% - 10px);
      height: 238px;
    }

    .search-fix .similar-product-item {
      width: calc(50% - 7.5px);
    }

    .search-fix .similar-product-item:nth-child(3n) {
      margin-right: 15px;
    }

    .search-fix .similar-product-item:nth-child(2n) {
      margin-right: 0;
    }

    .info-product {
      padding: 0;
      margin-top: 15px;
    }

    .middleProductView {
      width: 100%;
    }

    .fistProductView {
      padding: 0;
      width: 100%;
    }

    div#top-header {
      width: 414px;
    }

    #header-res {
      width: 414px;
    }

    .breadcrumbs ul li {

      font-size: 14px;

      float: left;

    }

    .breadcrumbs ul {
      height: 46px;
      display: block;
      line-height: 24px;
      padding: 10px 0;
    }

    .breadcrumbs {
      width: 100%;
      height: auto;
    }

    .productImage img {
      width: 100%;
      height: 100%;
    }

    .productImageZoomItem {
      display: none;
    }

    .similar-product, .product-seen {
      /* display: none; */
    }

    .productTag {
      display: none;
    }

    .social-network {
      display: none;

    }

    .productRate h1 {
      font-size: 15px;
    }

    .productRate .code-product {
      font-size: 13px;
    }

    .vote-view {
      display: block;
    }

    .BillInformation {

      width: 100%;

      box-sizing: border-box;

    }

    .SaleProduct {
      padding: 15px 0;
    }

    .SaleProduct input {
      /* width: 43%; */
      /* display: inline-flex; */
    }

    .add-to-cart {

    }

    .information-result-content-image {
      margin-left: 0%;
    }

  }

  @media only screen and (max-width: 375px) {
    * {
    }

    div#top-header {
      width: 375px;
    }

    #header-res {
      width: 375px;
    }

    .breadcrumbs ul li {

      font-size: 14px;

    }

    .breadcrumbs ul {
      /* margin: 10px 0; */
      min-height: 50px;
    }

    .breadcrumbs {
      width: 100%;

    }

    .productImage img {
      width: 100%;
      height: 100%;
    }

    .productImageZoomItem {
      display: none;
    }

    .similar-product, .product-seen {
      /* display: none; */
    }

    .productTag {
      display: none;
    }

    .social-network {
      display: none;

    }

    .productRate h1 {
      font-size: 14px;
    }

    .productRate .code-product {
      font-size: 13px;
    }

    .vote-view {
      display: block;
    }

    .BillInformation {

      width: 100%;

      /* margin-top: 20%; */

      /* margin-left: -98%; */

    }

    .SaleProduct {
      width: 100%;
      /* margin-left: -70%; */
    }

    .add-to-cart {
      /* margin-left: -89%; */
    }

    .information-result-content-image {
      margin-left: 0%;
    }

  }

  @media only screen and (max-width: 320px) {
    * {
    }

    .similar-product-item > a {
      height: 105px;
    }

    a {
    }

    .similar-product-item {
      height: 205px;
    }

    div#top-header {
      width: 320px;
    }

    #header-res {
      width: 320px;
    }

    .breadcrumbs ul li {

      font-size: 14px;

    }

    .breadcrumbs ul {

    }

    .breadcrumbs {
      width: 100%;

    }

    .productImage img {
      width: 100%;
      height: 100%;
    }

    .productImageZoomItem {
      display: none;
    }

    .similar-product, .product-seen {
      /* display: none; */
    }

    .productTag {
      display: none;
    }

    .social-network {
      display: none;
    }

    .middleProductView {
      width: 100%;
    }

    .productRate h1 {
      font-size: 14px;
    }

    .productRate .code-product {
      font-size: 13px;
    }

    .vote-view {
      display: block;
    }

    .BillInformation {
      width: 100%;
    }

    .SaleProduct {
      width: 100%;

    }

    .add-to-cart {

    }

    .information-result-content-image {
      margin-left: 0%;
    }
  }

  /*Extra small mobile less than 320px*/

  * {
  }

  .search-fix .price-product {
    margin-top: 0;
  }

  .search-fix .name-product a {
    font-size: 1.2rem;
  }

  .avatar-product {
    height: 150px;
  }

  .bag {
    margin-right: 10px;
  }

  .add-to-cart #buy-btn {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    /* margin-left: 15px; */
  }

  div#buy-btn #cart {
    background: #fff;
    color: #f25220;
    border: 1px solid #f44f00;
    text-overflow: ellipsis;
    margin-right: 0;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: inherit;
    transition: 0.4s;
  }

  div#buy-btn #buy:hover {
    color: #f25220;
    background: #fff;
    border: 1px solid #f44f00;
    transition: 0.6s;
  }

  div#buy-btn #cart:hover {
    background: #f2522014;
  }

  .SaleProduct .head {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* margin-bottom: 5px; */
    /* margin-top: 10px; */
    text-transform: initial;
    color: #494949;
    line-height: 32px;
    margin-right: 10px;
    /* margin-left: 15px; */
  }

  .head.head-pro {
    margin-left: 10px;
  }

  .pick input#quantity {
    border-bottom: 1px solid rgba(0, 0, 0, .09);
    border-top: 1px solid rgba(0, 0, 0, .09);
    width: 50px;
    height: 30px;
    max-width: 50px;
    text-align: center;
    line-height: 24px;
    border-left: none;
    border-right: none;
    display: block;
    color: #f04e23;
    font-size: 16px;
    font-weight: bold;
  }

  .pick div#sub, .pick div#add {
    border: 1px solid rgba(0, 0, 0, .09);
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    font-size: 17px;
    color: rgba(86, 85, 85, 0.7);
  }

  .pick {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }

  @media (max-width: 767.99px) and (min-width: 576px) {
    .search-fix .item-product.w16.padding-5.fl {
      width: 33.333333%;
    }
  }

  @media (max-width: 575.99px) {
    .search-fix .item-product.w16.padding-5.fl {
      width: 50%;
    }
  }

  .rating {
    /*float:left;*/
    position: relative;
    display: inline-block;
  }

  /* :not(:checked) is a filter, so that browsers that don’t support :checked don’t
     follow these rules. Every browser that supports :checked also supports :not(), so
     it doesn’t make the test unnecessarily selective */
  .rating:not(:checked) > input {
    position: absolute;
    top: 0;
    clip: rect(0, 0, 0, 0);
  }

  .rating:not(:checked) > label {
    float: right;
    width: 1em;
    padding: 0 .1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 17px;
    line-height: 1.2;
    color: #ddd;
    /*text-shadow:1px 1px #bbb, 2px 2px #666, .1em .1em .2em rgba(0,0,0,.5);*/
  }

  .rating:not(:checked) > label:before {
    content: '\f005';
  }

  .rating > input:checked ~ label {
    color: #ea0;
    /*text-shadow:1px 1px #c60, 2px 2px #940, .1em .1em .2em rgba(0,0,0,.5);*/
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    color: gold;
    /*text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);*/
  }

  .rating > input:checked + label:hover,
  .rating > input:checked + label:hover ~ label,
  .rating > input:checked ~ label:hover,
  .rating > input:checked ~ label:hover ~ label,
  .rating > label:hover ~ input:checked ~ label {
    color: gold;
    /*text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);*/
  }

  .rating > label:active {
    position: relative;
    /*top:2px;*/
    /*left:2px;*/
  }

</style>
<!--<link rel="stylesheet" href="./assets/css/content.css?v=6107">-->

<!--<script src="./component/js/jquery-3.2.1.min.js"></script>-->
<!--<script type="text/javascript" src="./assets/js/config.js?v=3922"></script>-->
<!--<script src="./assets/js/productdetail.js?v=4440"></script>-->
