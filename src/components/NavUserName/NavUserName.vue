<template>
  <div class="nav-user-name">
    <span class="userNameSpan"> {{ textName }} </span>    
  </div>
</template>

<script>
  export default {
    props: {
      textName: {
        type: String,
        require: true,
      },
    }
  }
</script>

<style>
  .nav-user-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .userNameSpan {
    margin-left: auto;
    text-align: end;
    cursor: pointer;
  }
</style>  
