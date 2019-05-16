<template>
  <footer>
    <div class="footer-border">
      <div id="boder-footer">
        <div class="inner-boder g1180"><span> </span></div>
      </div>
      <div class="footer-content">
        <div class="footer-content-top">
          <div class="g1180">
            <div class="w25 fl box-footer-left">
              <div id="logo-footer"><img src="http://dev.anduoc.vn/assets/images/store_1496111869_993.png"
                                         alt="Dược phâm khong gia"></div>
              <h3 class="company"> An Dược</h3>
              <p class="address-footer">102 Thái Thịnh, Quận Đống Đa, TP. Hà Nội</p></div>
            <div class="w75 fl box-footer-right">
              <ul v-if="$store.state.menu_header!=null">
                <li   v-for="(data,index) in $store.state.menu_header.slice(0,5)" :key="index">
                  <h6><nuxt-link :to="data.link_web"><span>{{data.name}}</span></nuxt-link></h6>
                  <nuxt-link v-for="(data_2, index) in data.child.slice(0,10)" :key="index" :to="data_2.link_web" :title="data_2.name"> <span>{{data_2.name}}</span></nuxt-link>

                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content-bottom">
        <div class="g1180"><span>© Copyright 2008-2018</span></div>
      </div>
    </div>
    <div id="apendMenuRight">
      <ul id="menuRight">
        <li class="drag-cart"><a href=""><p><i class="si"></i> Giỏ hàng <span class="change-I-cart">0</span></p></a>
        </li>
        <li class="taikhoan"><a href=""><p><i class="si"></i> Tài khoản </p></a></li>
        <li class="yeuthich"><a href=""><p><i class="si"></i> Yêu thích </p></a></li>
        <li class="daxem"><a href=""><p><i class="si"></i> Đã xem </p></a></li>
        <li class="scrollTop"><p><i class="si"></i></p></li>
      </ul>
    </div>
    <div class="scroll-top"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i></div>
    <div id="call-me"><a href="tel:18008183" class="btn-call-now"><i class="fa fa-phone-square"></i>Gọi miễn phí</a>
    </div>
  </footer>
</template>

<script>
  export default {
    name:"Footer",
    serverCacheKey: ()=>{return 'Footer'},
  }
</script>
