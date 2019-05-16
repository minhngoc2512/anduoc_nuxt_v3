import {ApiConnect} from '~/app/api/index';
const SearchStore=()=>{
  return{
    state:{
      data_search:null,
      isLoad_data_search:false
    },
    mutations:{
      SET_DATA_SEARCH(state,payload){
        state.data_search = payload.data;
        state.isLoad_data_search = false;
      }
    },
    actions:{
      async ACTION_DATA_SEARCH({commit,state},{url,user_agent}){
        state.isLoad_data_search = true;
        url = process.env.domain_api + url;
        let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_SEARCH',user_agent:user_agent});
        await api.get(url)
      }
    }
  }
}

export  default SearchStore
