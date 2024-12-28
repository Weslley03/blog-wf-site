<template>
  <Navbar />
  <div class="user_profile_main_content">
    <h1>User Profile</h1>
    <div>
      <button class="user_profile_buttons"> edit profile</button>
      <button class="user_profile_buttons"> add post</button>
    </div>
  </div>
  <div class="user_profile_posts">
    <PostCard :isProfilePage='true'/>
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
  .user_profile_main_content {
    text-align: center;
    margin-bottom: 10px;
  }

  .user_profile_buttons {
    margin: 5px;
  }
  
  .user_profile_posts {
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