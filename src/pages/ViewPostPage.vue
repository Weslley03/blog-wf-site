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
    <div class="dataPost">
      <button id="buttonLike"> like </button>
      <p> {{ `${this.post.authorPost}, ${this.post.datePost}` }} </p>      
    </div>
    <div 
    class="comments-section"
    v-for="(comment, key) in this.comments"
    :key="key"
    >
      <CommentBox :srcUserImage='comment.src' :nameUser='comment.name' :userComment='comment.commentText' :isPost='false' />
      <CommentBox 
        v-if="!anonymous"
        :srcUserImage='comment.src' 
        :nameUser='comment.name' 
        :isPost='true' 
      />
    </div>
  </div>
 <br><br>
  <Footer />
</template>

<script>
import Navbar from "../layouts/Navbar/Navbar.vue";
import Footer from "../layouts/Footer/Footer.vue";
import PostBanner from "../components/PostBanner/PostBanner.vue";
import CommentBox from "../components/CommentBox/CommentBox.vue";

export default {
  components: {
    Navbar,
    Footer,
    PostBanner,
    CommentBox,
  },

  data() {
    return {
      idPost: "",
      post: "",
      user: "",
      anonymous: '',
      comments: [],
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem('user') || [])
    if(this.user.name === 'ghost') this.anonymous = true
    this.idPost = this.$route.params.idPost;
    if (this.idPost == "123456") {
      
      this.post = {
        id: "123456",
        srcImagePost: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4',
        titlePost: "Hola amigo, Como estás?",
        authorPost: "oweslley03",
        datePost: "06/09",
      }

      this.comments = [ 
      { src: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4', name: 'oweslley03', commentText: 'muito bom' },
      ]
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

  .comments-section {
    display: grid;
  }

  .dataPost {
    display: grid;
    text-align: end;
    grid-template-columns: 70px auto;
  }

  #buttonLike {
    border-radius: 30px;
  }
</style>
