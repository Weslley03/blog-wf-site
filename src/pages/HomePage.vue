<template>
  <div>
    <Navbar />
    <h1 class="homePageTitle">Welcome!</h1>
    <div class="posts">
      <PostCard />
    </div>
  </div>
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import PostCard from '../layouts/PostCard/PostCard.vue';

  export default {
    components: {
      Navbar,
      PostCard,
    }
  }
</script> 

<style>
  .homePageTitle {
    text-align: center;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(4, auto) ;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 900px){
      grid-template-columns: repeat(1, auto) ;
    }
  }
</style>