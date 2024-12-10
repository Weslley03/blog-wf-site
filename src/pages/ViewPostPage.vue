<template>
  <div class="view-post">
    <Navbar />
    <section class="section-view-post">
      <img :src="post.srcImagePost">
      <p> {{ post.titlePost }} </p>
    </section>
  </div>
  <Footer />
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import Footer from '../layouts/Footer/Footer.vue';
  
  export default {
    
    components: {
      Navbar,
      Footer,
    },
  
    data() {
      return {
        idPost: '',
        post: '',
      }
    },

    mounted() {
      this.idPost = this.$route.params.idPost;
      if(this.idPost == '123456') {
        this.post = { id: '123456', srcImagePost: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4', titlePost: 'Hola amigo, Como estás?', authorPost: 'oweslley03', datePost: '06/09'}
      } else {
        alert('post não encontrado');
      }
    }
}
</script>

<style>
  .view-post {
    min-height: 90vh;
  }

  .section-view-post {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center
  }
</style>
