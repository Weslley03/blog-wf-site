<template>
  <button
    :type=buttonType
    :style="{
        width: buttonWidth + 'px' ,
        height: buttonHeight + 'px',
    }"
  >
    {{ buttonText }}
  </button>
</template>

<script>
  export default {
    props: {
      
      buttonWidth: {
        type: Number,
        require: true
      },
      
      buttonHeight: {
        type: Number,
        require: true
      },
      
      buttonType: {
        type: String,
        required: false,
      },

      buttonText: {
        type: String,
        require: true
      },

    }
  }
</script>

<style>
  button {
    border-radius: 10px;
    text-align: center;
    font-size: 18px;

    transition: 0.4s;
    background-color: white;
    color: hsl(0deg 0% 7.06%);
    box-shadow: rgba(189, 189, 189, 0.2) 0px 8px 24px;
  }

  button:hover {
    background-color: rgb(124, 124, 124);
    color: hsl(0deg 0% 7.06%);
  }
</style>