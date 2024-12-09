<template>
  <section 
  class="postCardSection"
  v-for="(post, index) in posts"
  :key="index"
  >
    <img class="postCardImg" :src="post.srcImagePost">
    <div class="textBox">
      <p> {{ post.titlePost }} </p>
      <p> {{ post.authorPost }}, {{ post.datePost }} </p>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        posts: [
          { srcImagePost: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4', titlePost: 'Hola amigo, Como estás?', authorPost: 'oweslley03', datePost: '06/09'},
          { srcImagePost: 'https://avatars.githubusercontent.com/u/80?v=4', titlePost: 'Hola amigo, Como estás?', authorPost: 'oweslley03', datePost: '06/09'},
        ],
      }
    },
  }
</script>

<style>
  .postCardSection {
    position: relative;
    width: 320px;
    height: 300px;

    align-items: center;
    cursor: pointer;
  }

  .postCardImg {
    width: 100%;
    height: 100%;
    border-radius: 10px; 
    object-fit: cover;
  }

  .textBox {
    position: absolute;

    width: 70%;
    height: 20%;

    top: 80%;
    left: 50%;

    transform: translate(-50%, -50%);
    backdrop-filter: blur(10px);
    border-radius: 10px; 
    padding: 20px;
    
    background-color: rgba(255, 255, 255, 0.3); 
    color: #fff; 
    text-align: center;
  } 
</style>