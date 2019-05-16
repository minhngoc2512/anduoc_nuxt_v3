import {ApiConnect} from '~/app/api/index';
const CategoryProductStore=()=>{
  return{
    state:{
      data_category:null,
      isLoad_data_category:false
    },
    mutations:{
      SET_DATA_CATEGORY(state,payload){
        state.isLoad_data_category = false;
        state.data_category = payload.data;

      },
      RESET_DATA_CATEGORY(state){
        state.data_category = null
      }
    },
    actions:{
      async ACTION_DATA_CATEGORY({commit,state},{url,user_agent}){
        state.isLoad_data_category = true;
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_CATEGORY',user_agent:user_agent});
        await  api.get(url)
      },
      ACTION_RESET_DATA_CATEGORY({commit}){
        commit('RESET_DATA_CATEGORY');
      }
    }
  }
}
export  default CategoryProductStore
