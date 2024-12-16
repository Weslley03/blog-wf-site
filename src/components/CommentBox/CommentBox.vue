<template>
  <div class="comment-box">
    <div class="user-info">
      <NavUserImage :srcImage='srcUserImage'/>
      <span class="user-name"> {{ nameUser }} </span>
    </div>
    <div 
    class="comment-text"
    > 
      <p v-if="!isPost"> {{ userComment }} </p>
      <textarea v-else class="postCommentText" maxlength="110" />
    </div>
  </div>
</template>

<script>
import NavUserImage from '../NavUserImage/NavUserImage.vue';

  export default {
    components: { 
      NavUserImage,
    },

    props: {
      srcUserImage: {
        type: String,
        require: true,
      },
      nameUser: {
        type: String,
        require: true,
      },

      isPost: {
        type: Boolean,
        required: true,
      },

      userComment: {
        type: String,
        required: false,
      },
    },

    data() {
      return {
        active: '', 
      }
    },
  }
</script>

<style>
  .comment-box {
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: auto auto;
    gap: 0.5rem;
    max-width: 90vw;

    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    grid-row: 1 / span 2;
  }

  .user-info .user-name {
    margin-top: 0.5rem;
    font-size: 16px;
    text-align: center;
  }

  .comment-text {
    grid-column: 2 / 3;
    font-size: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
    display: flex;
    align-items: center;
  }

  .postCommentText {
    resize: none;
    width: 1000%;
    height: 70px;
  }
</style>