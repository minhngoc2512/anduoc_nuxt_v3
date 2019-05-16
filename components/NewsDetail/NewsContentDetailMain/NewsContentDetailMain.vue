<template>
  <div class="new-content">
    <h1 v-html="$store.state.DetailNewsStore.data_detail_news.title"></h1>
    <p>
      <i class="fa fa-clock-o">{{$store.state.DetailNewsStore.data_detail_news.detail.date}}
      </i></p>
    <div class="new-content-detail">
      <p>
        <strong v-html="$store.state.DetailNewsStore.data_detail_news.detail.teaser"></strong>
      </p>
    <div class="short_desc" v-html="$store.state.DetailNewsStore.data_detail_news.detail.description">

    </div>
      <div class="social-network-box">

        <iframe :src="'https://www.facebook.com/plugins/like.php?href='+domain_website+'/'+$store.state.DetailNewsStore.data_detail_news.detail.link_web+'&width=112&layout=button&action=like&size=small&show_faces=true&share=true&height=65&appId=914235252058138'" width="112" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true">

        </iframe>
        <div class="fb-comments" data-href="https://www.facebook.com/hoanglinh5.12.96" data-numposts="5"></div>

      </div>


    </div>


  </div>
</template>

<script>
    export default {
        name: "news-content-detail-main",
      data(){
        return{
          domain_website:process.env.domain_website
        }
      }

    }
</script>

