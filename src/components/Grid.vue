<template>
  <h2 v-if="sState && oCurrentPlayer && sState.includes('won')" class="text-center text-success">
    {{ oCurrentPlayer.name }} you won!!</h2>
  <h2 v-else-if="sState && oCurrentPlayer" class="text-center">{{ sState }}
    {{ oCurrentPlayer.name }} it's your turn!</h2>
  <div id="grid" class="mt-5 container-fluid text-center" style="max-width: 500px">
    <div v-for="i in iGridSize" :key="i">
      <div class="row d-flex justify-content-evenly">
        <div v-for="j in iGridSize" :key="j">
          <div class="col-1" :class="{ shake: disabled }" @click="playMove(i-1) ">
            <span
                v-if="winCheck(i,j)"
                class="col bi bi-circle-fill text-success"
                style="font-size: 2em"></span>
            <span v-else-if="aCells[((j-1) * iGridSize + (i-1))] && aCells[((j-1) * iGridSize + (i-1))].chip === 'RED'"
                  class="col bi bi-circle-fill text-danger"
                  style="font-size: 2em"></span>
            <span
                v-else-if="aCells[((j-1) * iGridSize + (i-1))] && aCells[((j-1) * iGridSize + (i-1))].chip === 'YELLOW' "
                class="col bi bi-circle-fill text-warning"
                style="font-size: 2em"></span>
            <span v-else class="col bi bi-circle-fill text" style="font-size: 2em"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fetchWinningChips, playMove} from "@/controller";

export default {
  /* eslint-disable */
  name: "grid-component",
  data() {
    return {
      dataset: {},
      data: {},
      sState: "",
      iGridSize: 0,
      iGametype: 0,
      oCurrentPlayer: {},
      oOtherPlayer: {},
      aCells: [],
      playgroundExists: false,
      disabled: false,
      winningChips: {},
      winCheck: function (i, j) {
        return false;
      }.bind(this)
    }
  },
  watch: {
    async sState(newValue) {
      if (newValue.includes('won')) {
        this.winningChips = await fetchWinningChips();

        this.disabled = true
        setTimeout(() => {
          this.disabled = false
        }, 3000)
        this.winningChips = undefined
      }
    }
  },
  methods: {
    playMove,
    connectWebSocket() {
      const webSocket = new WebSocket("ws://localhost:9000/websocket");
      webSocket.onopen = async function (event) {
        webSocket.send("Trying to connect");
        this.dataset = await this.handleSocketMessages(event);
      }.bind(this)
      webSocket.onclose = function () {
        console.log("onclose");
      }
      webSocket.onerror = function (error) {
        console.log("Error" + error + "occurred");
      }
      webSocket.onmessage = async function (event) {
        this.dataset = await this.handleSocketMessages(event);
      }.bind(this)
    },

    async handleSocketMessages(event) {
      let data = {};

      if (typeof event.data === "string") {
        try {
          data = await JSON.parse(event.data)
          this.parsePlayground(data)
        } catch (e) {
          console.log(e)
        }
      } else if (event.data instanceof ArrayBuffer) {
        console.log('ArrayBuffer received: ' + event.data);
      } else if (event.data instanceof Blob) {
        console.log('Blob received: ' + event.data);
      }
    },

    parsePlayground(data) {
      const pg = data.playground;
      this.data = data;
      this.sState = data.state;
      this.iGridSize = pg.size;
      this.iGametype = pg.gameType;
      this.oCurrentPlayer = pg.currentPlayer;
      this.oOtherPlayer = pg.otherPlayer;
      this.aCells = pg.cells;
    },
  },
  created() {
    this.connectWebSocket()
  },
}
</script>

<style scoped>
body {
  margin: 2em;
  display: flex;
  flex-direction: column;

  align-items: center;
}

.title,
.subTitle,
.text {
  font-family: sans-serif;
  text-align: center;
  align-self: center;
  font-size: 1em;
}

.title {
  font-weight: bold;

  width: 100%;
  font-size: 4em;
}

.subTitle {
  font-weight: bold;

  border-radius: 0.5em;

  padding: 0.5em;
  max-width: 60%;
}

.text .text-danger .text-warning {

  margin: 0 auto;
  padding: 1em;
}

.win {
}

.button {
  font-family: sans-serif;
  padding: 0.5em 1em;
  border-radius: 0.5em;

  background-color: #ff9e;

  cursor: pointer;
  margin: 1em;
  font-size: 1.5em;
}

#grid {
  display: flex;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column-reverse;
}

.circle {
  width: 4em;
  height: 4em;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;
  cursor: pointer;
}

#insertButtons {
  background-color: #ff7373;

}

#insertContainer {
  margin: 0.15em;
}

.blockStyle {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 100%;
  margin-bottom: 4em;
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
}

.slideButton {
  width: 10ex;
  height: 10ex;
  border-radius: 2ex;
  border: 0.2em;
  align-self: center;
  font-family: sans-serif;
  font-size: 1.2em;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
}

.slide {
  text-align: center;
  align-items: center;
  justify-items: center;
  width: 50%;
  height: 22em;
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@media screen and (max-width: 767px) {
  .title {
    font-size: 3em;
  }

  .text .text-danger .text-warning {
    font-size: 0.8em;
  }

  .button {
    font-size: 1em;
  }

  .circle {
    width: 3em;
    height: 3em;
  }


  .card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    text-align: center;
  }

  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    opacity: 0.9;
    z-index: 1;
  }
}
</style>