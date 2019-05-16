import axios from 'axios';

export class ApiConnect {
  constructor({commit, key_action,user_agent,cache}) {
    this.commit = commit ? commit : null;
    this.key_action = key_action ? key_action : null;
    this.user_agent = user_agent?user_agent:'';
    this.cache = cache?true:false;

  }


  async get(url) {
      console.time('||'+this.user_agent+'||api:'+url);
      await axios.get(url, {
        cache: this.cache
      }).then(response => {
        if(response.data.status!=200){
          throw 'Not found url api '+url;
        }
        this.commit( this.key_action,{data: response.data.data});
        console.timeEnd('||'+this.user_agent+'||api:'+url);
      }).catch(error => {
        console.log('||'+this.user_agent+'||api_error:' + error);
        throw error;
      });
  }


  setConfigApi() {
    return {
      timeout: 30000,
      responseType: 'json',
      Authorization: "Basic Y2xpZW50OnNlY3JldA=="
    }
  }
}
