<template>
  <h2 v-if="dataset.state && dataset.playground.currentPlayer && dataset.state.includes('won')" class="text-center text-success">{{dataset.playground.currentPlayer.name}} you won!!</h2>
  <h2 v-else-if="dataset.state && dataset.playground.currentPlayer" class="text-center">{{dataset.state}} {{dataset.playground.currentPlayer.name}} it's your turn!</h2>
  <div id="grid" class="mt-5 container-fluid text-center" style=" max-width: 500px"></div>
</template>

<script>
import {handleSocketMessages} from "@/mixin/game";

export default {
  name: "grid-component",
  data() {
    return {
      dataset: {}
    }
  },
  methods: {
    connectWebSocket() {
      const webSocket = new WebSocket("ws://localhost:9000/websocket");
      webSocket.onopen = async function (event) {
        webSocket.send("Trying to connect");
        this.dataset = await handleSocketMessages(event);
      }.bind(this)
      webSocket.onclose = function () {
        console.log("onclose");
      }
      webSocket.onerror = function (error) {
        console.log("Error" + error + "occurred");
      }
      webSocket.onmessage = async function (event) {
        this.dataset = await handleSocketMessages(event);
      }.bind(this)
    }
  },
  watch: {},
  created() {
    this.connectWebSocket()
  },
}


</script>

<style scoped>

</style>