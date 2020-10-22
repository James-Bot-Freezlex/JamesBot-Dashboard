<template>
<!-- https://www.flaticon.com/packs/web-development-14 -->
  <div class="presentation">
    <div class="content part1">
      <img id="c-dev" src="../assets/seo.svg">
      <div class="content-text">
        <h3>Continuous development</h3>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "BotPresentation"
}
</script>

<style scoped>

.presentation{
  color: black;
}

#c-dev{
  height: 200px;
  width: auto;
}

.content{
  display: flex;
  flex-flow: row;
}

.content-text{

}
</style>