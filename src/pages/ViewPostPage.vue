<template>
  <Navbar />

  <div class="view-post">
    <section class="section-view-post">
      <PostBanner :srcImage="post.srcImagePost" />
      <h2>{{ post.titlePost }}</h2>
    </section>
    <section>
      <span class="spanTextPost">
      Lorem Ipsum <br> <br> é simplesmente uma simulação de texto da indústria tipográfica
      e de impressos, e vem sendo utilizado desde o século XVI, quando um
      impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
      fazer um livro de modelos de tipos. Lorem Ipsum <br> <br> sobreviveu não só a cinco
      séculos, como também ao salto para a editoração eletrônica, permanecendo
      essencialmente inalterado. Se popularizou na década de 60, quando a
      Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou <br> <br> a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser inte<br> <br> grado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser <br> <br> integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente  <br> <br> quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. passagens de Lorem Ipsum, e mais
      recentemente quando passou a ser integrado a softwares de editoração
      eletrônica como Aldus PageMaker. <br> <br>
      </span>
    </section>
  </div>

  <Footer />
</template>

<script>
import Navbar from "../layouts/Navbar/Navbar.vue";
import Footer from "../layouts/Footer/Footer.vue";
import PostBanner from "../components/PostBanner/PostBanner.vue";

export default {
  components: {
    Navbar,
    Footer,
    PostBanner,
  },

  data() {
    return {
      idPost: "",
      post: "",
    };
  },

  mounted() {
    this.idPost = this.$route.params.idPost;
    if (this.idPost == "123456") {
      this.post = {
        id: "123456",
        srcImagePost:
          "https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4",
        titlePost: "Hola amigo, Como estás?",
        authorPost: "oweslley03",
        datePost: "06/09",
      };
    } else {
      alert("post não encontrado");
    }
  },
};
</script>

<style>
  .view-post {
    min-height: 90vh;
    justify-content: center;

    margin: 0 auto;
    max-width: 40vw;

    @media (max-width: 800px){
      max-width: 90vw;
    }
  }

  .section-view-post {
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .spanTextPost {
    font-size: 20px;
  }
</style>
