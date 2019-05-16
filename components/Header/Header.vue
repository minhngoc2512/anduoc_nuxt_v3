<template>
  <header id="header">
    <div class="wrap-header">
      <div id="top-header"><h1> Thực phẩm không già</h1>
        <div class="g1180">
          <div id="header-hotline"><p><i class="fa fa-phone"></i>Hot Line: 18008183 - 0942080080</p></div>
          <div id="account-header">
            <div class="account support"><a href="/" rel="nofollow"> Hộ trợ và giải đáp <i
              class="fa fa-caret-down"></i> </a>
              <div class="box-acc-support"><a href="#" rel="nofollow">Giới thiệu</a> <a href="#"
                                                                                        rel="nofollow">Tài
                khoản của tôi</a> <a href="#" rel="nofollow">Hướng dẫn đổi trả và bảo hành</a> <a href="#"
                                                                                                  rel="nofollow">Chỉ là merge thôi </a></div>

            </div>
          </div>
        </div>
      </div>
      <div class="fix-scr fix">
        <div id="search-header">
          <div class="g1180">
            <div class="block-logo">
              <nuxt-link to="/" rel="nofollow" class="logo-checking"><img
                src="http://dev.anduoc.vn/assets/images/store_1496111869_993.png" alt="Dược phâm khong gia"></nuxt-link>
            </div>
            <div class="block-search">
              <div class="action-top">
                <div class="notification parent-tip"><a href="#"> <i class="icon-ring" data-noti="1"></i>
                  <div>Thông báo</div>
                </a>
                  <div class="tooltip">
                    <div class="content-tip content-tip-notification">
                      <div class="title-tooltip"><strong>Thông báo</strong></div>
                      <ul>
                        <li><a href="#">
                          <div class="noti-img"><img/></div>
                          <div class="noti-content">
                            <div class="noti-teaser"><b>Võ Viết Hiểu </b>
                              <span>Đăng tin</span>span>
                              <b> Bán kho, nhà xưởng tại Xã Điện Nam </b><span>: Bán Ki Ốt và Shophouse khu phố chợ Điện Nam Bắc gần KCN Điện Nam Điện Ngọc giá gốc Chủ đầu tư </span>
                              <span>: Bán Ki Ốt và Shophouse khu phố chợ Điện Nam Bắc gần KCN Điện Nam Điện Ngọc giá gốc Chủ đầu tư </span>
                            </div>
                            <time>11/12/2018</time>
                          </div>
                        </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="$store.state.login_status&&$store.state.user_profile!=null" class="user-head parent-tip">
                  <a href="/profile/">
                    <div class="avatar-user"
                         :style="`background-image: url('${$store.state.user_profile.picture}')`"></div>
                    <div><span>{{$store.state.user_profile.name}}</span> <span>Tài khoản</span></div>
                  </a>
                  <div class="tooltip">
                    <div class="content-tip content-tip-login">
                      <ul>
                        <li><a href="/profile" rel="nofollow"> <i class="icon-account"></i> <span>Profile</span>
                        </a></li>
                        <li><a style="cursor: pointer" v-on:click="Logout()" rel="nofollow"> <i
                          class="icon-logout"></i> <span>Đăng xuất</span> </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-if="!$store.state.login_status" class="user-head parent-tip"><a
                  href="/dang-nhap.aspx?urlreturn=Lw--"> <i class="icon-user"></i>
                  <div><span>Tài khoản</span> <span>Đăng nhập</span></div>
                </a>
                  <div class="tooltip">
                    <div class="content-tip content-tip-login">
                      <ul>
                        <li><a v-on:click="LoginFacebook()"><img src="/assets/images/icon-login-facebook.png">
                        </a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="cart"><a href="#"> <i class="icon-cart"></i> <span>Giỏ hàng</span> <span
                  class="num-in-cart">0</span> </a></div>
              </div>
              <form action="/search" id="search" method="GET">
                <input name="keyword" type="text" v-model="keyword" placeholder="Tìm kiếm sản phẩm tại đây" value="">
                <nuxt-link :to="'/search?keyword='+keyword">
                  <button class="si search-submit">
                    <i class="mcon-search-bold"></i>
                  </button>
                </nuxt-link>
                <a href="/profile/dang-ban.aspx" class="btn-upload-product">
                  <i class="fa fa-cloud-upload" aria-hidden="true"></i>đăng bán</a></form>
              <div class="suggest"><p><b>Từ khóa phổ biến</b></p>
                <div class="suggest-list"><p>Giảm cân New Perfect, Rich Slim, Tăng cường sinh lý nam Ngọc Để
                  Hoàn,</p></div>
                <p class="clear-fix"></p></div>
            </div>
            <div class="clear-fix"></div>
          </div>
        </div>
      </div>
      <div class="clear-fix"></div>
      <div id="header-res" class="g1180">
        <div class="fa-menu"><a class="btn-menu" href=""> <i class="fa fa-bars"></i> </a>
          <div class="menu-res"><h4 class="title-menu"> menu </h4>
            <ul class="list-menu-res" v-if="$store.state.menu_header!=null">
              <li class="item-menu">
                <nuxt-link to="/"> Trang chủ</nuxt-link>
              </li>
              <li class="item-menu">
                <nuxt-link :to="'/tin-tuc'"> Tin tức - sự kiện</nuxt-link>
              </li>
              <li class="item-menu" v-for="category_parent in $store.state.menu_header" :key="category_parent.id">
                <nuxt-link :to="category_parent.link_web" :title="category_parent.name">{{category_parent.name}}
                </nuxt-link>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="content-sub-menu"><h4 :title="category_parent.name" class="title-menu"><i
                  class="fa fa-angle-left" aria-hidden="true"></i>{{category_parent.name}}</h4>
                  <ul class="sub-menu">
                    <li class="item-menu" v-for="category_child in category_parent.child" :key="category_child.id">
                      <nuxt-link :title="category_child.name" :to="category_child.link_web"> {{category_child.name}}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="fas-search">
          <div class="btn-search-res"><i class="fa fa-search" aria-hidden="true"></i></div>
          <form action="/search" class="search-res" method="get">
            <input name="keyword" v-model="keyword" type="text" placeholder="Tìm kiếm" class="text-search-res">
            <div class="result-search-res"></div>
          </form>
        </div>
        <div class="logo-res">
          <nuxt-link :to="'/'" title="Dược phâm khong gia"><img
            src="http://dev.anduoc.vn/assets/images/logoMobile.png"
            alt="Dược phâm khong gia"></nuxt-link>
        </div>
        <div class="fa-cart"><a href=""> <i class="fa fa-shopping-basket"></i> <span>0</span> </a></div>
        <div class="acc-res">
          <div class="btn-acc-res"><i class="fa fa-user-plus"></i></div>
          <div class="content-acc-ress"><h4 class="title-menu"> menu </h4>
            <ul class="list-acc-res">
              <li class="item-menu"><a href=""> Giỏ hàng (<b>0</b>)</a></li>
              <li class="item-menu"><a href="/profile/">
                <div class="avatar-user"
                     style="background-image: url('http://graph.facebook.com/1793976627292815/picture?type=square')"></div>
                <span>Minh Ngọc</span> </a></li>
              <li><a href="/profile" rel="nofollow"> <i class="icon-account"></i> <span>Profile</span> </a>
              </li>
              <li>
                <a style="cursor: pointer" rel="nofollow" v-on:click="Logout()"> <i class="icon-logout"></i> <span>Đăng xuất</span> </a></li>
              <li class="item-menu"><a href="">Tài khoản</a></li>
              <li class="item-menu"><a href="">Yêu thích</a></li>
              <li class="item-menu"><a href="">Đã xem</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-menu-fix">
        <div id="list-menu" class="g1180">
          <div id="slimScrollDiv">
            <nav id="menu" class="menu" v-if="$store.state.menu_header!=null"><p class="cate-menu"><i
              class="fa fa-bars"></i>
              <span>Danh mục sản phẩm</span></p>
              <ul class="menu-detail-pro"
                  :style="$route.name=='Home'&&$store.state.loading_status==''?'display:block;margin-top:10px':''">
                <li v-for="category_parent in $store.state.menu_header.slice(0,7)" :key="category_parent.id">
                  <nuxt-link :title="category_parent.name" :to="'/'+category_parent.link_web">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                    {{category_parent.name}}
                  </nuxt-link>
                  <ul class="sub-menu">
                    <p class="title-sub-menu">
                      <nuxt-link :to="'/'+category_parent.link_web" :title="category_parent.name">
                        {{category_parent.name}}
                      </nuxt-link>
                    </p>
                    <li v-for="category_child in category_parent.child" :key="category_child.id" class="">
                      <nuxt-link :to="'/'+category_child.link_web" :title="category_child.name">
                        {{category_child.name}}
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li class="news-active"></li>
              </ul>
            </nav>
          </div>
          <div id="policy-header">
            <nuxt-link to="/tin-tuc" title="Tin tức - Sự kiện">Tin tức - sự kiện</nuxt-link>
            <a href="" class="si nth1">Giao hàng
              toàn quốc</a> <a href="" class="si nth3">Đổi trả trong 10 ngày</a></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        keyword: '',
        event_delay_search: null,
      }
    },
    serverCacheKey: ()=>{return 'Header'},
    watch: {
      keyword: function () {
        if (this.$route.path == '/search') {
          if (this.event_delay_search != null) {
            clearTimeout(this.event_delay_search);
          }
          this.event_delay_search = setTimeout(function () {
            window.history.pushState({}, '', '?keyword=' + this[1]);
            this[0].commit('updateKeyWordSearch', {data: this[1]});
            this[0].dispatch('ACTION_DATA_SEARCH', {url: '/search?keyword=' + this[1]});
          }.bind([this.$store, this.keyword]),1000);

        }
      }
    },
    methods: {
      async LoginFacebook() {
        await FB.login(function (response) {
          let id= response.authResponse.userID;
          console.log(FB.getAuthResponse());
          FB.api(`/${id}?fields=email,name,picture{url}`,function(res){
            console.log(res);
            if(!this.$cookie.get('login_cookie')){
              let Profile = JSON.stringify({name:res.name,picture:res.picture.data.url});
              this.$cookie.set('login_cookie',Profile,{expires:'1M'});
            }
            this.$store.dispatch('ACTION_USER_PROFILE',{user:JSON.parse(this.$cookie.get('login_cookie'))});
            this.$store.dispatch('ACTION_STATUS_LOGIN',{status:true});
          }.bind({$store:this.$store,$cookie:this.$cookie}))
        }.bind({$store:this.$store,$cookie:this.$cookie }), {scope: 'email'});
      },
      Logout(){
        FB.logout()
        this.$store.dispatch('ACTION_STATUS_LOGIN',{status:false});
        this.$store.dispatch('ACTION_USER_PROFILE',{user:null});
        this.$cookie.delete('login_cookie');
        console.log('delete cookie ok');
      }
      , getData() {
        this.$store.dispatch('getMenuHeader');
      },
      getProfile(){
        if(this.$cookie.get('login_cookie')){
          this.$store.dispatch('ACTION_USER_PROFILE',{user:JSON.parse(this.$cookie.get('login_cookie'))});
          this.$store.dispatch('ACTION_STATUS_LOGIN',{status:true});
        }
      }
    },
    mounted() {
      if (!this.$store.state.status_ssr) {
        this.getData();
        this.getProfile();
      }
      $(document).ready(function () {
        /*$('.item-caegory-product.active').prepend("<i class='fa fa-angle-right' aria-hidden='true'></i>");*/

        function resize_win() {
          var menu = $('#header-res .menu-res');
          var sub_menu = $('#header-res .content-sub-menu');
          var acc = $('#header-res .content-acc-ress');
          var body = $('body');
          var width_menu = menu.width();
          var width_acc = acc.width();
          var header = $('.wrap-header');
          var width_window = $(this).width();
          if ($('#header-res .btn-menu').hasClass('active')) {
            body.css({'left': width_menu + 'px'});
            header.css({'left': width_menu + 'px'});
            sub_menu.width(width_menu);
            // sub_menu.css('right','-'+width_menu+'px');
          }
          else {

          }
          if ($('#header-res .btn-acc-res ').hasClass('active')) {
            body.css({'right': width_acc + 'px'});
            header.css({'right': width_acc + 'px'});
          }
          if (width_window >= 992) {
            header.css({'left': '0px'});
            $('#header-res .btn-menu').removeClass('active');
            $('#header-res .btn-acc-res').removeClass('active');
            menu.removeAttr("style");
            acc.removeAttr("style");

            body.removeAttr("style");

          }
        }

        $(window).on('resize scroll', resize_win);
        $(window).trigger('resize');

        $('#header-res .btn-menu').click(function (event) {
          event.preventDefault();
          var menu = $('#header-res .menu-res');
          var body = $('body');
          var width_menu = menu.width();
          var header = $('.wrap-header');

          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            menu.animate({'left': -width_menu + 'px'}, 400, function (event) {
              $(this).attr('style', '');
            });
            body.animate({'left': '0px', 'top': '0'}, 400, function () {
              $(this).attr('style', '');
            });
            header.animate({'left': '0px'}, 400, function () {
              $(this).attr('style', '');
            });


          }
          else {
            $(this).addClass('active');
            header.animate({'left': width_menu + 'px', 'width': '100%'}, 400);
            menu.animate({'left': '0px'}, 400);
            body.css({'position': 'fixed'});
            body.animate({'left': width_menu + 'px', 'width': '100%', 'top': '0'}, 400);

          }

        });
        $('#header-res .btn-acc-res').click(function (event) {
          event.preventDefault();
          var acc = $('#header-res .content-acc-ress');
          var body = $('body');
          var width_acc = acc.width();
          var header = $('.wrap-header');

          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            acc.animate({'right': -width_acc + 'px'}, 400, function () {
              acc.attr('style', '');
            });
            body.animate({'right': '0px', 'top': '0'}, 400, function () {
              body.attr('style', '');
            });
            header.animate({'right': '0px'}, 400);

          }
          else {
            $(this).addClass('active');
            acc.animate({'right': '0px'}, 400);
            header.css({'left': 'auto'});
            header.animate({'right': width_acc + 'px', 'width': '100%'}, 400);
            body.css({'position': 'fixed'});
            body.animate({'right': width_acc + 'px', 'width': '100%', 'top': '0', 'left': 'auto'}, 400);

          }

        });
        $('.list-menu-res>.item-menu .fa').click(function (event) {
          $(this).siblings('.content-sub-menu').animate({'left': '0'}, 400);
          $('#header-res .menu-res').css({'overflow': 'hidden'});
        });
        $('.list-menu-res .content-sub-menu>.title-menu').click(function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent('.content-sub-menu').animate({'left': '440px'}, 400);
          $('#header-res .menu-res').css({'overflow': 'scroll'});
        });

        $('.btn-search-res').click(function () {
          $('.search-res').slideToggle(300);
        });

        // scroll top responsvie index
        $('.fas-search').click(function () {
          $('from#search-header-res').slideToggle();
        });

        if ($(window).width() < 1199) {
          /*scroll Menu responsive*/
          $(window).scroll(function () {
            var height_scroll = $('html, body').scrollTop();
            if (height_scroll > 50) {
              $('.scroll-top').css('right', '10px');
            } else {
              $('.scroll-top').css('right', '-90px');
            }
          });
        } else {
          /*scroll Menu-search*/
          $(window).scroll(function () {
            var height_scroll = $('html, body').scrollTop();
            if (height_scroll > 150) {
              $('#search-header').addClass('fix-search-header');
            } else {
              $('#search-header').removeClass('fix-search-header');
            }
          });
        }

        var duration = 400;
        $('#menuRight .scrollTop').click(function () {
          $('html, body').animate({scrollTop: 0}, duration);
        });

        $('.scroll-top').click(function () {
          $('html, body').animate({scrollTop: 0}, duration);
        });

        $('body').append('<div id="loadding_bar"><span></span></div>');
        $(document).ajaxStart(function () {
          $('#loadding_bar').addClass('start');
        }).ajaxSend(function () {
          $('#loadding_bar').addClass('send');
        }).ajaxSuccess(function () {
          $('#loadding_bar').addClass('success');
        }).ajaxComplete(function () {
          $('#loadding_bar').addClass('complete');
        }).ajaxStop(function () {
          setTimeout(function () {
            $('#loadding_bar').addClass('hide');
            setTimeout(function () {
              $('#loadding_bar').removeAttr('class');
            }, 1000);
          }, 1000);
        }).ajaxError(function () {
          setTimeout(function () {
            $('#loadding_bar').addClass('hide');
            setTimeout(function () {
              $('#loadding_bar').removeAttr('class');
            }, 1000);
          }, 1000);

        });


      });
    }
  }
</script>
