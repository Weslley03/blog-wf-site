<template>
  <div class="a">
    <h1>Cadastro</h1>
    <form @submit.prevent="handForm">
      <div class="inputs">
        <FormInput v-model="username" :inputWidth="300" :inputHeight='26' inputType='text' inputPlaceholder="username" />
        <span v-if="this.errors.username"> {{ this.errors.username.message }} </span>
        <FormInput v-model="email" :inputWidth="300" :inputHeight='26' inputType='email' inputPlaceholder="email" />
        <span v-if="this.errors.email"> {{ this.errors.email.message }} </span>
        <FormInput v-model="password" :inputWidth="300" :inputHeight='26' inputType='password' inputPlaceholder="senha" />
        <span v-if="this.errors.password"> {{ this.errors.password.message }} </span>
        <FormInput v-model="confirmPassword" :inputWidth="300" :inputHeight='26' inputType='password' inputPlaceholder="confirme sua senha" />
        <span v-if="this.errors.confirmPassword"> {{ this.errors.confirmPassword.message }} </span>
      </div>
      <div class="buttons">
        <FormButton :buttonWidth="200" :buttonHeight='36' buttonText='cadastrar'/>
      </div>
    </form>
  </div>
</template>

<script>
  import FormButton from '../components/FormButton/FormButton.vue';
  import FormInput from '../components/FormInput/FormInput.vue';
  import { checkForm } from '../utils/formValidation';

  export default {
    components: {
      FormInput,
      FormButton
    },

    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
      }
    },

    methods: {
      handForm() {
        this.errors = {};

        const cadastroData = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };

        this.errors = checkForm(cadastroData); 
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