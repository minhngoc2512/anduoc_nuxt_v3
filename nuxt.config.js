const pkg = require('./package');
const webpack = require('webpack')
const config_env = require("./app/config/env");
const router = require("./router/index");
const config_head = require("./app/config/head");


module.exports = {
  mode: 'universal',
  env: config_env.env(),

  /*
  ** Headers of the page
  */
  // head: {
  //   title: pkg.name,
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: pkg.description }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

  head: config_head.head(),

  router: {
    middleware: "init",
    extendRoutes(routes, resolve) {
      let arrayRouter = router.arrayRouter();
      arrayRouter.map(item => routes.push(item));
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "red",
    height: "2px",
    duration: 5000
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#05ff60",
    background: "white"
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: "~/plugins/facebook_auth.js", ssr: false},
    {src: "~/plugins/vue-cookie.js", ssr: false},
    {src: "~/plugins/vue-lazy-load.js", ssr: false},
    {src: "~/plugins/vue-slick.js", ssr: false},
    {src: "~/plugins/jquery-ui.js", ssr: false},
    {src: "~/plugins/google_analytics.js", ssr: false},
    // {src: "~/plugins/axios_cache.js", ssr: true}
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: './static/assets/css_all_v2.css',
    // }),
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/pwa',
    // // '@nuxtjs/axios',
    // '@nuxtjs/component-cache',
    //
    // // With options
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 * 24 }],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    extend(config, ctx) {
    }
  }
}
