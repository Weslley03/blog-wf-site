<template>
  <div class="homepage">
    <Navbar />
    <h1 class="homePageTitle">Welcome!</h1>
    <div class="posts">
      <PostCard />
    </div>
  </div>
  <Footer />
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import PostCard from '../layouts/PostCard/PostCard.vue';
  import Footer from '../layouts/Footer/Footer.vue';

  export default {
    components: {
      Navbar,
      PostCard,
      Footer,
    }
  }
</script> 

<style>
  .homepage {
    min-height: 90vh;
  }

  .homePageTitle {
    text-align: center;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 900px){
      grid-template-columns: repeat(1, auto) ;
    }
  }
</style>