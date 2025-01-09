<template>
  <Navbar />
  <div class="user_profile_main_content">
    <h1>User Profile</h1>
    <div>
      <FormButton class="user_profile_buttons" :buttonWidth="80" :buttonHeight="20" buttonText="edit profile"/> 
      <router-link to="/add-post">
        <FormButton class="user_profile_buttons" :buttonWidth="80" :buttonHeight="20" buttonText="add post" /> 
      </router-link>
    </div>
  </div>
  <div class="user_profile_posts">
    <PostCard :isProfilePage='true'/>
  </div>
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import PostCard from '../layouts/PostCard/PostCard.vue';
  import FormButton from '../components/FormButton/FormButton.vue';

  export default {
    components: {
      Navbar,
      PostCard,
      FormButton,
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
    font-size: 10px;
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