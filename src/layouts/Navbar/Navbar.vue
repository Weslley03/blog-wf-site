<template>
  <nav class="navNavbar">
    <NavUserImage :srcImage=this.user.src />
    <NavUserName :textName=this.user.name />
  </nav>
</template>

<script>
  import NavUserImage from '../../components/NavUserImage/NavUserImage.vue';
  import NavUserName from '../../components/NavUserName/NavUserName.vue';
  export default {
    components: {
      NavUserImage,
      NavUserName,
    },

    data() {
      return {
        userToken: '',
        user: '',
      }
    },

    mounted() {
      this.userToken = localStorage.getItem('userToken');
      if(!this.userToken) {
        this.user = { src: 'https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1', name: 'ghost' }
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.user = { src: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4', name: 'oweslley' }
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    },
    
  }
</script>

<style>
  .navNavbar {
    display: grid;
    grid-template-columns: repeat(2, auto) ;
    grid-template-rows: 1, 100px;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 1rem;

    margin: 0 auto;
    max-width: 60vw;

    @media (max-width: 800px){
      margin: 10px;
      max-width: 100vw;
    }
  }
</style>
