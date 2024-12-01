<template>
  <div class="a">
  <h1>Acesso</h1>
    <form @submit.prevent='handleForm'>
      <div class="inputs">
        <FormInput v-model="email" :inputWidth="300" :inputHeight='26' inputType='email' inputPlaceholder="e-mail"/>
        <span v-if="this.errors.email"> {{ this.errors.email.message }} </span>
        <FormInput v-model="password" :inputWidth="300" :inputHeight='26' inputType='password' inputPlaceholder="senha"/>
        <span v-if="this.errors.password"> {{ this.errors.password.message }} </span>
      </div> 
      <div class="buttons">
        <FormButton :buttonWidth="200" :buttonHeight='36' buttonText='entrar' buttonType='submit' />
        <FormButton :buttonWidth="200" :buttonHeight='36' buttonText='cadastrar' />
      </div>
    </form>
  </div> 
</template>

<script>
  import FormInput from '../components/FormInput/FormInput.vue';
  import FormButton from '../components/FormButton/FormButton.vue';
  import { checkForm } from '../utils/formValidation';
  
  export default {
    components: {
      FormInput,
      FormButton,
    },

    data() {
      return {
        email: '',
        password: '',
        errors: {}, 
      }
    },

    methods: {
      
      handleForm() {
        this.errors = {};
        
        const acessoData = {
          email: this.email,
          password: this.password,
        };

       this.errors = checkForm(acessoData);
      },

    } 
  }
</script> 

<style>
  .a {
    display: grid;    
    justify-content: center;
    text-align: center;

    h1 {
      font-size: 4rem;
    }
  }

  .inputs { 
    display: grid;
    gap: 2px;
    margin-bottom: 10px;
  }

  .buttons {
    display: grid;
    justify-content: center;
    gap: 2px;
  }
</style>