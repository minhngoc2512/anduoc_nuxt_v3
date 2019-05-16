<template>
  <!--<div>-->
  <section id="page-category" class="content" v-if="$store.state.CategoryProductStore.data_category!=null||$store.state.status_ssr==true">
    <div class="inner-content g1180" >
      <div class="wrap-content w100 fl">
        <ul class="breadcrumbs">
          <ol class="breadcrumb-page " itemscope itemtype="http://schema.org/BreadcrumbList">
            <li class="item-breadcrumb" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
              <nuxt-link itemprop="item" title="Trang chủ"
                         to="/"><span
                itemprop="name">Trang chủ</span></nuxt-link>
              <meta itemprop="position" content="1"/>
            </li>
            <li class="item-breadcrumb" itemprop="itemListElement" itemscope
                itemtype="http://schema.org/ListItem">
              <nuxt-link itemprop="item" title="Mỹ phẩm làm đẹp"
                         :to="$store.state.CategoryProductStore.data_category.breadcrumb[0].url"><span
                itemprop="name">{{$store.state.CategoryProductStore.data_category.breadcrumb[0].name}}</span></nuxt-link>
              <meta itemprop="position" content="2"/>
            </li>
          </ol>
        </ul>
        <!--<link rel="stylesheet" href="./assets/css/sidebar.css?v=6731">-->
        <input type="checkbox" class="filter_category fa fa-filter">
        <div class="sidebar w20 fl">
          <div class="full-sidebar w100 fl">
            <div id="box_cat" class="box-category-product w100 fl" data-rewrite="my-pham-lam-dep" data-id="9">
              <div class="title-box-category-product"><h3> Danh Mục</h3></div>
              <div class="content-box-sidebar">
                <ul class="list-box-category-product">
                  <li class="item-caegory-product active">
                    <nuxt-link :title="$store.state.CategoryProductStore.data_category.sidebar.name"
                               :to="$store.state.CategoryProductStore.data_category.link_web!='undefined'?'/'+$store.state.CategoryProductStore.data_category.link_web:'#'">
                      <svg
                        class="shopee-svg-icon icon-down-arrow-right-filled shopee-category-list__main-category__caret"
                        viewBox="0 0 4 7"
                        style=" display: inline-block; width: 0.5em; height: 0.5em; fill: currentColor; position: relative; stroke: currentColor; position: absolute; left: -11px; top: 13px; ">
                        <polygon points="4 3.5 0 0 0 7"></polygon>
                      </svg>
                      {{$store.state.CategoryProductStore.data_category.sidebar.name}}
                    </nuxt-link>
                  </li>
                  <li class="item-caegory-product"
                      v-for="(data,index) in $store.state.CategoryProductStore.data_category.sidebar.child" :key="index">
                    <nuxt-link :title="data.name" :to="'/'+data.link_web">{{data.name}}</nuxt-link>
                  </li>

                </ul>
              </div>
            </div>
            <div class="box-filter-price w100 fl">
              <div class="title-box-category-product"><h3> Khoảng Giá</h3></div>
              <div class="content-box-sidebar">
                <div class="wrap-box-category-product w100 fl padding-5">
                  <p>
                    <input type="hidden" class="pricce-products"
                           :data-current-max="$store.state.CategoryProductStore.data_category.product.price_max"
                           :data-current-min="$store.state.CategoryProductStore.data_category.product.price_min"
                           :data-min="$store.state.CategoryProductStore.data_category.product.price_min"
                           :data-max="$store.state.CategoryProductStore.data_category.product.price_max" data-step="5000">
                    <label for="amount">Price range:</label>
                    <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
                  </p>

                  <div id="slider-range" v-on:click="getChangePrice()"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="full-container w80 fr">
          <div class="sort-by-options w100 fl">
            <ul class="wrap-sort-by-options w100 fl">
              <li class="item-sort-by-op options w20" id="sort-pop">
                <a data-sort="pop" data-order="desc" class="item-data-sort"
                   v-on:click="getDataOptionQuery('sortBy=pop&Order=desc')">Phổ biến</a>
              </li>
              <li id="sort-time" class="item-sort-by-op options w20">
                <a class="item-data-sort" v-on:click="getDataOptionQuery('sortBy=time&Order=desc')" data-sort="time"
                   data-order="desc">Mới nhất </a>
              </li>
              <li class="item-sort-by-op options w20" id="sort-sales">
                <a data-sort="sales" data-order="desc" v-on:click="getDataOptionQuery('sortBy=sales&Order=desc')"
                   class="item-data-sort">Bán chạy</a></li>
              <li id="sort-price" class="item-sort-by-op price options w20"><p>Giá</p>
                <ul class="sub-sort-by-op">
                  <li class="item-sort-by-op" id="sort-price-asc">
                    <a class="item-data-sort" data-sort="price"
                       v-on:click="getDataOptionQuery('sortBy=price&Order=asc')" data-order="asc">Giá: Thấp đến cao</a>
                  </li>
                  <li class="item-sort-by-op" id="sort-price-desc">
                    <a class="item-data-sort" data-sort="price"
                       v-on:click="getDataOptionQuery('sortBy=price&Order=desc')" data-order="desc">Giá: cao đến
                      thấp</a>
                  </li>
                </ul>
              </li>
              <li class="item-sort-by-op w20"><label for="shop-like"> <input id="shop-like" type="checkbox">
                <span class="checkmark"></span> Shop yêu thích </label></li>
            </ul>
          </div>
          <div  class="wrap-container w100 fl">
            <category-list-product></category-list-product>
            <div class="pagiantion-product-by-category w100 fl center">
              <span v-if="$store.state.CategoryProductStore.data_category.page.link_first!=''"
                    v-on:click="current_page=1">
                <a onclick="return false;" :href="`${$route.path}?page=1`">
                  <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                </a>
              </span>
              <span class="res_large" v-if="$store.state.CategoryProductStore.data_category.page.link_prev!=''"
                    v-on:click="current_page=current_page-1">
                <a  onclick="return false;" :href="`${$route.path}?page=${current_page-1}`">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
              </span>
              <span v-for="(data,index) in $store.state.CategoryProductStore.data_category.page.page"
                    :class="data.class"
                    v-on:click="data.title=='...'?current_page=current_page:current_page=parseInt(data.title)"
                    :key="index">
                <a onclick="return false;" :href="`${$route.path}?page=${parseInt(data.title)}`" :title="data.title">{{data.title}}</a>
              </span>
              <span class="res_large" v-if="$store.state.CategoryProductStore.data_category.page.link_next!=''"
                    v-on:click="current_page=current_page+1">
                <a onclick="return false;" :href="`${$route.path}?page=${current_page+1}`">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </span>
              <span v-if="$store.state.CategoryProductStore.data_category.page.link_last!=''"
                    v-on:click="current_page= $store.state.CategoryProductStore.data_category.page.total_page">
                <a onclick="return false;" :href="`${$route.path}?page=${$store.state.CategoryProductStore.data_category.page.total_page}`">
                  <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
    <!--<loading-category  v-if="status_load_data"></loading-category>-->
  <!--</div>-->
</template>

<script>
  import CategoryListProduct from '@/components/Category/CategoryListProduct/CategoryListProduct.vue'
  export default{
    name: "category-content",
    data() {
      return {
        option_query: '',
        current_page: this.$store.state.CategoryProductStore.data_category!=null?this.$store.state.CategoryProductStore.data_category.product.current_page:0,
        rage_price: '',
        status_load_data: false
      }
    },
    watch: {
      current_page: function () {
          this.getDataOptionQuery();
      }
    },
    components: {
      CategoryListProduct: CategoryListProduct
    },
    mounted() {
      if(!this.$store.state.status_ssr){
        this.getRagePrice();
      }
      if (typeof this.$route.query.sortBy != 'undefined') {
        if (this.$route.query.sortBy == 'pop') {
          $('#sort-pop').addClass('select');
        }
        if (this.$route.query.sortBy == 'sales') {
          $('#sort-sales').addClass('select');
        }
        if (this.$route.query.sortBy == 'time') {
          $('#sort-time').addClass('select');
        }
        if (this.$route.query.sortBy == 'price') {
          $('#sort-price').addClass('select');
          if (this.$route.query.sortBy == 'desc') {
            $('#sort-price-desc').addClass('select');
          } else {
            $('#sort-price-asc').addClass('select');
          }
        }
      }

    },
    methods: {
      getChangePrice() {
        this.option_query = this.createOptionQuery();
        this.getDataOptionQuery();
      },
      getDataOptionQuery(query = '') {
        if (query != '') {
          var price_max = typeof this.getURLParameter('price_max') != 'undefined' ? '&price_max=' + this.getURLParameter('price_max') : '';
          var price_min = typeof this.getURLParameter('price_min') != 'undefined' ? '&price_min=' + this.getURLParameter('price_min') : '';
          this.option_query = query + price_min + price_max;
        }
        $('.item-sort-by-op').click(function () {
          if ($('.item-sort-by-op').hasClass('select')) {
            $('.item-sort-by-op').removeClass('select')
          }
          $(this).addClass('select');
        });
        this.$store.dispatch('ACTION_DATA_CATEGORY',{url:'/categories/' + this.$route.params.category + '?' + this.option_query + '&page=' + this.current_page});
        window.history.pushState({}, '', '?' + this.option_query + '&page=' + this.current_page);
      },
      createOptionQuery() {
        var price_max = typeof this.getURLParameter('price_max') != 'undefined' ? '&price_max=' + this.getURLParameter('price_max') : '';
        var price_min = typeof this.getURLParameter('price_min') != 'undefined' ? 'price_min=' + this.getURLParameter('price_min') : '';
        var sortBy = typeof this.getURLParameter('sortBy') != 'undefined' ? '&sortBy=' + this.getURLParameter('sortBy') : '';
        var Order = typeof this.getURLParameter('Order') != 'undefined' ? '&Order=' + this.getURLParameter('Order') : '';
        return price_min + price_max + sortBy + Order;
      },
      getURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == sParam) {
            return sParameterName[1];
          }
        }
      },
      getRagePrice() {
        var price_max = parseInt($('.pricce-products').attr('data-max'));
        var price_min = parseInt($('.pricce-products').attr('data-min'));
        var price_step = parseInt($('.pricce-products').attr('data-step'));
        var price_current_max = parseInt($('.pricce-products').attr('data-current-max'));
        var price_current_min = parseInt($('.pricce-products').attr('data-current-min'));
        var brand_currents = $('.list-trademark').attr('data-brands');
        var rewriter_cat = $('#box_cat').attr('data-rewrite');
        var data_filter = {'ajax': 'on'};
        var rewriteObject = localStorage.getItem('rewrite_cat');
        if (rewriter_cat != rewriteObject) {
          localStorage.setItem('testObject', JSON.stringify(data_filter));
        }
        localStorage.setItem('rewrite_cat', rewriter_cat);
        var retrievedObject = localStorage.getItem('testObject');
        data_filter = JSON.parse(retrievedObject);
        $.each($('.item-data-sort'), function () {
          var sortBy = $(this).attr('data-sort');
          var sortOder = $(this).attr('data-order');
          if (sortBy == GetURLParameter('sortBy') && sortOder == GetURLParameter('Order')) {
            // console.log('44444');
            $(this).parents('.item-sort-by-op').addClass('select');
          }
        });
        function GetURLParameter(sParam) {
          var sPageURL = window.location.search.substring(1);
          var sURLVariables = sPageURL.split('&');
          for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
              return sParameterName[1];
            }
          }
        }
        if ($.type(brand_currents) != 'undefined') {
          if ((brand_currents).length != 0) {
            bra_id_test = brand_currents.split('-');
            $.each($(".item-list-trademark"), function () {
              var element = $(this)
              var id_bra = (element.children('input').attr('data-id-bra'));
              bra_id_test.map(function (id) {
                if (id_bra == id) {
                  element.children('input').prop("checked", true);
                }
              });
            });
          }
        }

        $("#slider-range").slider({
          range: true,
          min: price_min,
          max: price_max,
          step: price_step,
          values: [price_current_min, price_current_max],
          slide: function (event, ui) {
            $("#amount").val("Từ " + addCommas(ui.values[0].toString()) + "đ :" + addCommas(ui.values[1]) + "đ");
          }
        });
        $("#amount").val("Từ " + addCommas($("#slider-range").slider("values", 0).toString()) +
          "đ : " + addCommas($("#slider-range").slider("values", 1).toString()) + "đ");
        $("#slider-range").slider({
          change: function (event, ui) {
            data_filter['price_min'] = ui.values[0];
            data_filter['price_max'] = ui.values[1];
            var price_max = '&price_max=' + ui.values[1];
            var price_min = 'price_min=' + ui.values[0];
            var sortBy = typeof GetURLParameter('sortBy') != 'undefined' ? '&sortBy=' + GetURLParameter('sortBy') : '';
            var Order = typeof GetURLParameter('Order') != 'undefined' ? '&Order=' + GetURLParameter('Order') : '';
            var page = typeof GetURLParameter('page') != 'undefined' ? '&page=' + GetURLParameter('page') : '';
            window.history.pushState({}, '', '?' + price_min + price_max + Order + sortBy + page);
          }.bind()
        });

        function addCommas(nStr) {
          nStr += '';
          var x = nStr.split('.');
          var x1 = x[0];
          var x2 = x.length > 1 ? '.' + x[1] : '';
          var rgx = /(\d+)(\d{3})/;
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
          }
          return x1 + x2;
        }

      }
    },
    // destroyed(){
    //   console.log('components disable');
    //   this.$store.dispatch('ACTION_RESET_DATA_CATEGORY');
    // },
    head() {
      return {
        title: this.$store.state.CategoryProductStore.data_category!=null?this.$store.state.CategoryProductStore.data_category.title:'',
        link: [
          // {rel:"stylesheet", href:"/assets/css/layout.css?v=76"},
          // {rel:"stylesheet", href:"/component/css/jquery-ui.min.css?v=76"},
          // {rel:"stylesheet", href:"/assets/css/ver_2/categories.css"},
          // {rel:"stylesheet", href:"/assets/css/ver_2/product.css"},
          // {rel:'stylesheet',href:'/assets/css/index.css'},
        ],
        // script: [
        //   // {src:"./component/js/jquery-ui.min.js?v=1465"},
        //   {src: "/assets/js/custom.js?v=4099"},
        //   {src: "/assets/js/config.js?v=4099"},
        // ],
        meta: this.$store.state.CategoryProductStore.data_category!=null?this.$store.state.CategoryProductStore.data_category.meta:[]

      }
    }
  }
</script>
<style>
  .menu > ul {
    display: none;
  }
</style>
