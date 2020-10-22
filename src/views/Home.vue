<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>JamesBot</h1>
    <h2>Votre majordome</h2>
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,170.7C213.3,203,267,213,320,192C373.3,171,427,117,480,85.3C533.3,53,587,43,640,58.7C693.3,75,747,117,800,149.3C853.3,181,907,203,960,181.3C1013.3,160,1067,96,1120,90.7C1173.3,85,1227,139,1280,181.3C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
    <HelloWorld/>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>
.home{
  background-color: #2C2F33;
  color: #FFFFFF;
}

#wave{
  margin-bottom: -10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
