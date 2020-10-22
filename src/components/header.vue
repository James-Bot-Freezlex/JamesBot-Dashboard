<template>
<header>
    <div id="header-app">
        <div id="bot-info">
            <img id="logo" alt="JamesBot logo" src="../assets/logo_bot.png"/>
            <h1 id="bot-name">JamesBot</h1>
        </div>
        <a @click="login" id="btn-login"><i class="fab fa-discord"></i> Login</a>
    </div>
    <svg id="top-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#23272A" fill-opacity="1" d="M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,144C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
</header>
</template>

<script>
export default {
    name: 'headerPage',
    
}
</script>

<style scoped>
#header-app{
    display: flex;
    justify-content: space-between;
}

#header-app{
    background-color: #23272A;
    height: 50px;
}

#bot-info{
    display: flex;
    flex-flow: row;
}

#btn-login{
  font-size: 120%;
  height: 20px;
  border-radius: 50px;
  display: inline-block;
  font-weight: 600;
  padding: 5px 17px;
  color: #606D78;
  border: 2px solid #606D78;
  margin: 10px 20px;
}

#logo{
    padding: 5px 17px;
    height: 40px;
}
#bot-name{
    margin-top: 10px;
}

#btn-login:hover{
    color: #a5acb3;
    border-color: #a5acb3;
    cursor: pointer;
    transition: all .2s ease-in;
}
</style>