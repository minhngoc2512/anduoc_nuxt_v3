import Vuex from 'vuex'
import axios from "axios/index";
import isBot from 'isbot';
import HomeStore from './modules/Home/index';
import NewsStore from './modules/News/index';
import CategoryProductStore from './modules/CategoryProduct/index'
import DetailProductStore from "./modules/DetailProduct/index";
import DetailNewsStore from "./modules/DetailNews/index"
import CategoryNews from './modules/CategoryNews/index'
import SearchStore from './modules/Search/index'

const createStore = () => {
  return new Vuex.Store({
    state: {
      status_ssr: false,
      status_session: false,
      menu_header: null,
      login_status: false,
      keyword_search: null,
      loading_status: '',
      user_profile: null,
      user_agent: null,
    },
    mutations: {
      updateStatusSsr(state) {
        state.status_ssr = true;
      },
      updateStatusSession(state) {
        state.status_session = true;
      },
      updateMenuHeader(state, payload) {
        state.menu_header = payload.data
      },
      setStatusLogin(state, payload) {
        state.login_status = payload.data;
      },
      updateKeyWordSearch(state, payload) {
        state.keyword_search = payload.data
      },
      updateLoadingStatus(state, payload) {
        state.loading_status = payload.data
      },
      updateUserProfile(state, payload) {
        state.user_profile = payload.data
      },
      updateUserAgent(state, payload) {
        state.user_agent = payload.data
      }
    },
    actions: {
      async nuxtServerInit({commit}, {req}) {
        if (isBot(req.headers['user-agent'])) {
          commit('updateUserAgent', {data: '(' + req.headers['x-real-ip'] + ')' + req.headers['user-agent']});
          return commit('updateStatusSsr');
        }
        return;
      },
      async getMenuHeader({res, commit}) {
        await axios.get(process.env.domain_api + '/navigate', {
          cache: true
        }).then((response) => {
          commit('updateMenuHeader', {data: response.data.data});
        }).catch(error => {

        })
      },
      ACTION_LOADING_STATUS({commit}, {page}) {
        commit('updateLoadingStatus', {data: page});
      },
      ACTION_STATUS_LOGIN({commit}, {status}) {
        commit('setStatusLogin', {data: status});
      },
      ACTION_USER_PROFILE({commit}, {user}) {
        commit('updateUserProfile', {data: user});
      }
    },
    modules: {
      HomeStore: HomeStore(),
      NewsStore: NewsStore(),
      CategoryProductStore: CategoryProductStore(),
      DetailProductStore: DetailProductStore(),
      DetailNewsStore: DetailNewsStore(),
      CategoryNews: CategoryNews(),
      SearchStore: SearchStore()
    },
  })
}

export default createStore
