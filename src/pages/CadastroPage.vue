<template>
  <div class="a">
    <h1>Cadastro</h1>
    <div class="inputs">
      <FormInput :inputWidth="300" :inputHeight='26' inputPlaceholder="username" />
      <FormInput :inputWidth="300" :inputHeight='26' inputPlaceholder="e-mail" />
      <FormInput :inputWidth="300" :inputHeight='26' inputPlaceholder="senha" />
      <FormInput :inputWidth="300" :inputHeight='26' inputPlaceholder="confirme sua senha" />
    </div>
    <div class="buttons">
      <FormButton :buttonWidth="200" :buttonHeight='36' buttonText='cadastrar'/>
    </div>
  </div>
</template>

<script>
  import FormButton from '../components/FormButton/FormButton.vue';
  import FormInput from '../components/FormInput/FormInput.vue';

  export default {
    components: {
      FormInput,
      FormButton
    },
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