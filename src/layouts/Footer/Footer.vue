<template>
  <footer class="footer">
    <a href="http:///weslleydev.com" target="_blank"> <span class="textSpan"> oweslley03 </span> </a>
    <a href="https://github.com/weslley03" target="_blank"> <span class="textSpan"> github.com/weslley03 </span> </a>
    <a href="https://www.linkedin.com/in/weslley-felipe-69a547187/" target="_blank"> <span class="textSpan"> linkedin.com/in/weslley-felipe </span> </a>
  </footer>
</template>

<style>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 10px;
    
    margin: 0 auto;
    max-width: 60vw;

    @media (max-width: 800px){
      margin: 10px;
      max-width: 100vw;
    }
  }

  a {
    text-decoration: none;
  }

  .textSpan {
    margin: 5px 0;
    cursor: pointer
  }
</style>
