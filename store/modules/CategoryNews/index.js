import {ApiConnect} from '~/app/api/index';
const CategoryNews=()=>{
  return{
    state:{
      data_category_news:null,
      isLoad_data_category_news:false
    },
    mutations:{
      SET_DATA_CATEGORY_NEWS(state,payload){
        state.data_category_news = payload.data;
        state.isLoad_data_category_news = false;
      }
    },
    actions:{
      async ACTION_DATA_CATEGORY_NEWS({commit,state},{url,user_agent}){
        state.isLoad_data_category_news = true;
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_CATEGORY_NEWS',user_agent:user_agent});
        await api.get(url)
      }
    }
  }
}

export  default CategoryNews
