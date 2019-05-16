const config_head_default = {
  title: 'Dược phẩm An dược',
  meta: [
    {charset: 'utf-8'},
    {
      name: 'viewport',
      content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
    },
    {hid: 'description', name: 'description', content: 'anduoc.vn'},
    {name: "DC.language", content: "scheme=utf-8 content=vi"},
    {name: "google-site-verification", content: "meta_google_site_verification"}
  ],
  link: [
    {href: "/assets/images/icon_page.png", alt: "logo", rel: "shortcut icon", type: "image/vnd.microsoft.icon"},
    // {rel: 'stylesheet', href: '/assets/css/slick/slick.min.css'},
    // {rel: 'stylesheet', href: '/assets/css/slick/slick-theme.min.css'},
    {rel: 'stylesheet', href: '/assets/fonts/font-awesome/css/font-awesome.min.css'},
    {rel: 'stylesheet', href: '/assets/css/layout.css'},
    {rel: 'stylesheet', href: '/assets/css/custom.css'},
    {rel: 'stylesheet', href: '/assets/css/css_all_v3.css?v=591'},
    {rel: 'stylesheet', href: '/assets/css/menu-res.css'},
    {rel: "stylesheet", href: "/component/css/jquery-ui.min.css?v=76"},
    // {rel:"stylesheet", href:"/assets/css/ver_2/product.css"},
    {rel: "stylesheet", href: "/assets/css/ver_2/categories.css"},
    // {rel:"stylesheet", href:"/assets/css/content.css"}
  ],
  script: [
    // {src: '/component/js/jquery-3.2.1.min.js'},
    // {src: '/component/js/slick.min.js'},
    // {src: '/component/js/jquery-ui.min.js'},
  ]

};
module.exports = {
  head() {
    return config_head_default
  }
}
