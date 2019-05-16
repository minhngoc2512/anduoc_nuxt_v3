<template lang="html">
  <div>
    <h1>Loading...........</h1>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {
      start () {
        // this.$store.commit('updateLoadingStatus',{data:true})
      },
      finish () {
        // this.$store.dispatch('ACTION_LOADING_STATUS',{page:''});
        // this.$store.commit('updateLoadingStatus',{data:false})
      }
    }
  }
</script>
