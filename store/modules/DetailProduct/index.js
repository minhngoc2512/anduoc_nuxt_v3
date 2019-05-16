import {ApiConnect} from '~/app/api/index';
 const DetailProductStore=()=>{
   return {
     state:{
       data_detail_product:null,
       isLoad_data_detail_product:false
     },
     mutations:{
       SET_DATA_DETAIL_PRODUCT(state,payload){
         state.data_detail_product = payload.data;
         state.isLoad_data_detail_product = false;
       }
     },
     actions:{
       async ACTION_DATA_DETAIL_PRODUCT({commit,state},{url,user_agent}){
         state.isLoad_data_detail_product = true;
         url = process.env.domain_api + url;
         let api = new ApiConnect({commit: commit, key_action: 'SET_DATA_DETAIL_PRODUCT',user_agent:user_agent});
         await api.get(url)
       }
     }
   }
 }
 export default DetailProductStore
