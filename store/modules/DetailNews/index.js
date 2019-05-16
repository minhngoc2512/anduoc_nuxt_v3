import {ApiConnect} from '~/app/api/index';
const DetailNewsStore=()=>{
  return{
    state:{
      data_detail_news:null,
      isLoad_data_detail_news:false
    },
    mutations:{
      SET_DATA_DETAIL_NEWS(state,payload){
        state.data_detail_news = payload.data;
        state.isLoad_data_detail_news = false;
      }
    },
    actions:{
      async ACTION_DATA_DETAIL_NEWS({commit,state},{url,user_agent}){
        state.isLoad_data_detail_news = true;
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_DETAIL_NEWS',user_agent:user_agent});
        await  api.get(url)
      }
    }
  }
}
export  default DetailNewsStore
