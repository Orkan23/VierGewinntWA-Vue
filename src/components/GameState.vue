<template>
  <h2 v-if="state.includes('won')" class="text-center text-success">{{player}} you won!!</h2>
  <h2 v-else class="text-center">{{state}} {{player}} it's your turn!</h2>
</template>

<script>
export default {
  name: "GameState"
}
</script>

<style scoped>

</style>