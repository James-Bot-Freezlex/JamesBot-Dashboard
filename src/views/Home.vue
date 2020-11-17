<template>
  <div class="home">
    <div class="home-title">
      <img id="vue-logo" alt="Vue logo" src="../assets/logo_bot.png">
      <img id='forms' style="width: 80vw;" src="../../2a6125dcb840af22672d8d1ecc819e20.png" alt="background">
      <h1 style="font-family: BebasLight;font-size: 95px">James <a style="font-family: BebasBold; font-size: 100px">Bot</a></h1>
    </div>
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2C2F33" fill-opacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,170.7C213.3,203,267,213,320,192C373.3,171,427,117,480,85.3C533.3,53,587,43,640,58.7C693.3,75,747,117,800,149.3C853.3,181,907,203,960,181.3C1013.3,160,1067,96,1120,90.7C1173.3,85,1227,139,1280,181.3C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
  </div>
  <bot-presentation/>
</template>

<script>
import BotPresentation from "@/views/BotPresentation";

export default {
  name: 'Home',
  components: {
    botPresentation: BotPresentation
  }
}
</script>

<style>
.home{
  background-image: url("../assets/background.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #FFFFFF;
}

#vue-logo{
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

#forms{
  margin: -200px;
  display: inline-block;
  animation: float 6s ease-in-out infinite;
}

.home-title{
  padding-top: 20vh;
}

#wave{
  margin-bottom: -10px;
}

h3 {
  margin: 40px 0 0;
}

h1{
  font-size: 90px;
}
a {
  color: #ff5538;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
