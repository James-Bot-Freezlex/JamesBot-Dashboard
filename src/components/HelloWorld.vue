<template>
  <div class="hello">
    <h1>JamesBot, configurez simplement votre serveur</h1>
    <h3>Pourquoi choisir JamesBot ?</h3>
    <p>Développé par Freezlex depuis 2 ans ce bot n'est encore qu'à ses débuts.<br/>
    Rejoindre la communautée permet de le rendre plus complet et proposer de plus en plus de contenu dont VOUS rêvez
    </p>
    <h3>Des nouveautées sont prévues ?</h3>
    <p>Le bot est en constante évolution, autant d'ajouts sont appliqués sur le bot que sur le site web.<br>
    Vous pouvez être tenus au courant de toutes les évolutions appliquées sur le <router-link to="/news"><i class="fab fa-discord"></i> discord</router-link> ou alors <a @click="redirectUpdate">ici</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      redirectUpdate: ()=>{
        console.log(window.location);
        window.location = window.location.origin + '/news'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
