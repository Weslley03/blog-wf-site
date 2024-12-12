<template>
  <img 
    id="postBannerImage"
    :src=srcImage
  />
</template>

<script>
  export default {
    props: {
      srcImage: {
        type: String,
        require: true,
      }
    }
  }
</script>

<style>
  #postBannerImage {
    width: 300px;
    height: 300px;
    border-radius: 10px; 
    padding-top: 1rem;
  }
</style>