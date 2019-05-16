<template>
  <div class="image_error">
    <img src="/assets/images/500.jpg"/>
  </div>
</template>

<script>
  export default {
    layout:'default',
    name: "error"
  }
</script>

<style scoped>
  .image_error{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 40px;
  }
</style>
