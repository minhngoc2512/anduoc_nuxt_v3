<template>
  <div id="backgroundMenu">
    <div id="homeSlide" class="g1180">
      <div class="jsSlide">
        <div class="carousel-slide">
          <ul class="layer-slide">
            <!--<slick-carousel ref="slick" :options="slickOptions">-->
              <li class="slide-item" v-for="(data,index) in $store.state.HomeStore.data_main.banner_home" :key="index"
                  v-if="data.type=='anduoc.slide_home'">
                <nuxt-link :to="data.url" :title="data.name">
                  <img src="/lazy_load/loading_v4.jpg" v-lazy="data.picture" :alt="data.name">
                </nuxt-link>
              </li>
            <!--</slick-carousel>-->
          </ul>
        </div>
        <div id="bnRight">
          <div v-for="(data,index) in $store.state.HomeStore.data_main.banner_home" :key="index"
               v-if="data.type=='anduoc.ban_home'">
            <nuxt-link :to="data.url">
              <img src="/lazy_load/loading_v4.jpg" v-lazy="data.picture" :alt="data.name"></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div id="hommPolicy"><p><i class="si"></i> Giao hàng toàn quốc </p>
      <p><i class="si"></i> Thanh toán khi nhận hàng </p>
      <p><i class="si"></i> Đổi trả trong 10 ngày </p>
      <p>
        <nuxt-link to="/tin-tuc" style="color: #333"><i class="si"></i> Tin tức - Sự kiện</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-slider",
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          adaptiveHeight: true,
          dotsClass: 'slick-dots-edit slide',
          dots: true
        }
      }
    },
    mounted() {
      // console.log(this.$store.state.HomeStore)
    }
  }
</script>

