<template>
<!-- https://www.flaticon.com/packs/web-development-14 -->
  <div class="presentation">
        <CommandsAvalaible>

        </CommandsAvalaible>
  </div>
</template>

<script>
    import CommandsAvalaible from "../components/AvailableCommands";

export default {
name: "BotPresentation",
    components: {
        CommandsAvalaible: CommandsAvalaible
    }

}
</script>

<style scoped>

.presentation{
  font-size: 50px;
  color: #ffffff;
  font-family: BebasBold,serif;
}
</style>
