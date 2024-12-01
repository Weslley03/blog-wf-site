<template>
  <input 
    :value='modelValue'
    @input="$emit('update:modelValue', $event.target.value)"
    :type='inputType'
    :placeholder='inputPlaceholder'
    :style="{
      width: inputWidth + 'px' ,
      height: inputHeight + 'px',
    }"
    />
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        required: true
      },
      inputWidth: {
        type: Number,
        required: true,
      },
      inputHeight: {
        type: Number,
        required: true,
      },
      inputType: {
        type: String,
        required: true,
      },
      inputPlaceholder: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style>
  input {
    border-radius: 10px;
    text-align: center;
    font-size: 18px;

    background-color: white;
    color: hsl(0deg 0% 7.06%);
    box-shadow: rgba(189, 189, 189, 0.2) 0px 8px 14px;
  }
</style>
