import {ApiConnect} from '~/app/api/index';
const NewsStore=()=>{
  return{
    state:{
      data_news:null,
      isLoad_data_news:true
    },
    mutations:{
      SET_DATA_NEWS(state,payload){
        state.data_news = payload.data;
        state.isLoad_data_news = false;
      },
    },
    actions:{
      async ACTION_DATA_NEWS({commit,state},{url,user_agent}){
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_NEWS',user_agent:user_agent});
        await api.get(url)
      }
    }
  }
}
export default NewsStore
