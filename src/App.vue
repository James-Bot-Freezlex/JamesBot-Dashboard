<template>
  <div id="app">
    <headerPage/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    
    <router-view/>
    <footerPage/>
  </div>
</template>

<script>
import headerPage from '@/components/header.vue'
import footerPage from '@/components/footer.vue'

export default {
  methods:{
    login: function(){
      console.log("Test");
      window.location = "http://localhost:4300/api/auth/discord";
    }
  },
  components: {
    headerPage,
    footerPage,
  }
  
}
</script>

<style>
body{
  margin: 0px;
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
