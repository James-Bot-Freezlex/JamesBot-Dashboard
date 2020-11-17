<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@font-face {
  font-family: "BebasBold";
  src: url("./assets/fonts/BebasNeue-Bold.otf") format("truetype");
}

@font-face {
  font-family: "BebasLight";
  src: url("./assets/fonts/BebasNeue-Light.otf") format("truetype");
}

body{
  background-color: #2C2F33;
  margin: 0px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
