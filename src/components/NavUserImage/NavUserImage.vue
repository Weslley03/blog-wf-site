<template>
  <div>
    <img class="userImage" 
      :src=srcImage
    />    
  </div>
</template>

<script>
  export default {
    props: {
      srcImage: {
        type: String,
        require: true,
      },
    }
  }
</script>

<style>
  .userImage {
    cursor: pointer;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
  }
</style>  