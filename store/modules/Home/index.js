import {ApiConnect} from '~/app/api/index';

const HomeStore =()=>{
  return{
    state: {
      data_main: null,
      hot_product: null,
      isLoad_data_main:false,
      isLoad_hot_product:false
    },
    mutations: {
      SET_DATA_HOME(state, payload) {
        state.data_main = payload.data
        state.isLoad_data_main = false

      },
      SET_HOT_PRODUCT(state, payload) {
        state.hot_product = payload.data
        state.isLoad_hot_product= false
      }
    },
    actions: {
      async ACTION_DATA_HOME({commit,state}, {url,user_agent}) {
        state.isLoad_data_main = true
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_HOME',user_agent:user_agent});
        await api.get(url)
      },
      async ACTION_HOT_PRODUCT({commit,state}, {url,user_agent}) {
        state.isLoad_hot_product= true
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_HOT_PRODUCT',user_agent:user_agent,cache:true});
        await  api.get(url)

      }
    }

  }
}

export  default HomeStore
