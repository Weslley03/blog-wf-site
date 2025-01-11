<template>
  <Navbar />
  <div class="add_post_main">
    <div class="post_preview_section">
      <PostCardPreview />
    </div>
  </div>
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import PostCardPreview from '../layouts/PostCardPreview/PostCardPreview.vue';

  export default {
    components: {
      Navbar,
      PostCardPreview,
    }
  }
</script>

<style>
  .add_post_main {
    align-items: center;
    margin-bottom: 10px;
  }

  .post_preview_section {
    margin: 0 auto;
    
    height: 300px;
    width: 90vw;
  }
</style>