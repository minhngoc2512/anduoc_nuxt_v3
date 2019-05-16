import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad,{
  preload: 1.3,
  error: '/lazy_load/loading_v4.jpg',
  loading:'/lazy_load/loading_v4.jpg',
  attempt:1
})
