<template>
  <Navbar />
  <div class="add_post_main">
    <div class="post_preview_section">
      <PostCardPreview />
      <div class="button_publish">
        <FormButton :buttonWidth='100' :buttonHeight='30' buttonText='publicar' />
      </div>
      <div class="input_publish_post">
        <FormInput id="input_post_image" v-model="post_image" inputType="file" inputPlaceholder="qual a imagem de capa?" />
        <FormInput v-model="post_title" inputType="text" inputPlaceholder="qual o titulo?" />
        <!-- <FormInput v-model="post_text" inputType="text" :inputHeight="400" inputPlaceholder="qual seu texto?" /> -->
      </div>
    </div>
</div>
</template>

<script>
  import Navbar from '../layouts/Navbar/Navbar.vue';
  import PostCardPreview from '../layouts/PostCardPreview/PostCardPreview.vue';
  import FormButton from '../components/FormButton/FormButton.vue';
  import FormInput from '../components/FormInput/FormInput.vue';

  export default {
  
    components: {
      Navbar,
      PostCardPreview,
      FormButton,
      FormInput,
    },
  
    data() {
      return {
        post_image: '',
        post_title: '',
        post_text: '',
      }
    }

  }
</script>

<style>
  .add_post_main {
    align-items: center;
    margin-bottom: 10px;
    
  }

  .post_preview_section {
    margin: 0 auto;
    
    height: 300px;
    width: 90vw;
  }

  .button_publish {
    display: grid;
    justify-content: center ;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .input_publish_post {
    display: grid;
    align-items: center;
    gap: 10px;
  }

  #input_post_image {
    font-size: 15px;
  }
</style>