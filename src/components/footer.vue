<template>
    <!-- <svg id="bottom-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#23272A" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,128C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg> -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#23272A" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,277.3C640,277,800,267,960,266.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <div id="footer-app">
      <p>©{{new Date().getFullYear()}} <a @click="easterEgg">Freezlex</a>, Tous droits réservés.</p>
    </div>
</template>

<script>
export default {
    name: 'footerPage',
    data: function(){
      return {
        counter: 0,
        easterEgg: () => {
          this.counter ++;
          if(this.counter === 10){
            console.log("STOP SPAMMING ASSHOLE");
            this.counter = 0;
          }
        }
      }
    }
}
</script>

<style scoped>
#footer-app{
  padding-top: 50px;
  background-color: #23272A;
}
</style>