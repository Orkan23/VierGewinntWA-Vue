<template>
  <h2 v-if="data.state && data.playground.currentPlayer && data.state.includes('won')" class="text-center text-success">
    {{ data.playground.currentPlayer.name }} you won!!</h2>
  <h2 v-else-if="data.state && data.playground.currentPlayer" class="text-center">{{ data.state }}
    {{ data.playground.currentPlayer.name }} it's your turn!</h2>
  <div id="grid" class="mt-5 container-fluid text-center" style=" max-width: 500px">
    <div v-for="i in iGridSize" :key="i">
      <div class="row d-flex justify-content-evenly">
        <div v-for="j in iGridSize" :key="j">
          <div class="col-1">
            <span class="col bi bi-circle-fill text" style="font-size: 2em"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      playgroundExists: false
    }
  },
  methods: {
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
      if (!this.playgroundExists) {
        //this.createBlankPlayground()
      }
      //this.update();
    },

    createBlankPlayground() {
      this.playgroundExists = true;
      const oGrid = document.getElementById("grid");
      for (let iRow = 0; iRow < this.iGridSize; iRow++) {
        const oRow = document.createElement("div")
        oRow.className = "row d-flex justify-content-evenly"

        for (let iCol = 0; iCol < this.iGridSize; iCol++) {
          const oCellDiv = document.createElement("div");
          oCellDiv.className = "col-1";
          const oCellSpan = document.createElement("span");
          oCellSpan.id = `${iRow}.${iCol}`
          oCellSpan.className = "col bi bi-circle-fill";
          oCellSpan.styling = "font-size: 2em";
          oCellSpan.classList.add("text");

          oCellDiv.addEventListener('click', function () {
            this.playMove(iCol)
          });
          oCellDiv.appendChild(oCellSpan)
          oRow.appendChild(oCellDiv)
        }
        oGrid.appendChild(oRow)
      }
    },

    update() {
      this.aCells.forEach((cell) => {
        let oCell = document.getElementById(`${cell.row}.${cell.col}`);
        oCell.classList.remove("text", "text-warning", "text-danger", "text-success")
        switch (cell.chip) {
          case "YELLOW":
            oCell.classList.add("text-warning");
            break;
          case "RED":
            oCell.classList.add("text-danger");
            break;
          default:
            oCell.classList.add("text");
        }
      });

      if (this.sState.includes("won")) {
        this.fetchWinningChips();
      }
    },

    playMove(column) {
      fetch("/insert/" + column, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: "",
      });
    }
  },
  watch: {},
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

.text {

  margin: 0 auto;
  padding: 1em;
}

.win {}

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

@media screen and (max-width: 767px) {
  .title {
    font-size: 3em;
  }

  .text {
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