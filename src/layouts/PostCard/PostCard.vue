<template>
  <section 
    class="postCardSection"
    v-for="(post, index) in posts"
    :key="index"
  >
    <router-link :to="`/view-post/${post.id}`">
      <div class="textBox">
        <p> {{ post.titlePost }} </p>
        <p> {{ post.authorPost }}, {{ post.datePost }} </p>
      </div>
      <img class="postCardImg" :src="post.srcImagePost">
    </router-link>
    <button v-if="isProfilePage" class="top-right-button" @click.stop="onButtonClick(post.id)">edit post</button>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        posts: [
          { id: '123456', srcImagePost: 'https://avatars.githubusercontent.com/u/83655316?s=400&u=bbea90ddaf49cff25138576d1e801b94cf099a82&v=4', titlePost: 'Hola amigo, Como estás?', authorPost: 'oweslley03', datePost: '06/09'},
          { id: '123456', srcImagePost: 'https://avatars.githubusercontent.com/u/80?v=4', titlePost: 'Hola amigo, Como estás?', authorPost: 'oweslley03', datePost: '06/09'},
        ],
      }
    },

    props: {
      isProfilePage: {
        type: Boolean,
        require: false,
      },
    },

    methods: {
      onButtonClick(postId) {
        console.log(`bdutton clicked for post ID: ${postId}`);
      },
    },
  }
</script>

<style>
.postCardSection {
  position: relative;
  width: 220px;
  height: 200px;
}

.postCardImg {
  width: 100%;
  height: 100%;
  border-radius: 10px; 
}

.textBox {
  position: absolute;
  font-size: 12px;
  backdrop-filter: blur(10px);
  border-radius: 10px; 
  padding: 12px;
  
  background-color: rgba(255, 255, 255, 0.3); 
  color: #fff; 
  text-align: center;

  margin-top: 20px;
  left: 18%;
  bottom: 2%;
} 

.top-right-button {
  position: absolute;
  top: 10px;
  right: 10px; 
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  z-index: 10; 
}
</style>