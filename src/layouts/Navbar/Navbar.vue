<template>
  <nav>
    <NavUserImage srcImage='https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4' />
    <NavUserName textName='oweslley03' />
  </nav>
  <h1>Welcome!</h1>
</template>

<script>
  import NavUserImage from '../../components/NavUserImage/NavUserImage.vue';
  import NavUserName from '../../components/NavUserName/NavUserName.vue';
  export default {
    components: {
      NavUserImage,
      NavUserName,
    }
  }
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: repeat(2, auto) ;
    grid-template-rows: 1, 100px;
    margin: 10px;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 1rem;
  }

  h1{
    text-align: center;
  }
</style>
