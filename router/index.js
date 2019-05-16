const arrayRouter = [
  {
    path: '/',
    name: 'Home',
    component: ('~/pages/Home/Home.vue'),
  },
  {
    path: '/tin-tuc',
    name: 'news',
    component: ('~/pages/News/News.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: ('~/pages/Search/Search.vue')
  }, {
    path: '/error/500',
    name: 'error 500',
    component: ('~/pages/Error/Error500.vue')
  },
  {
    path: '/:category',
    name: 'category',
    component: ('~/pages/SwitchPage/SwitchPage.vue')
  },
  {
    name: 'custom',
    path: '*',
    component: ('~/pages/Error/Error.vue')
  }
];

module.exports = {
  arrayRouter() {
    return  arrayRouter;
  }
}
