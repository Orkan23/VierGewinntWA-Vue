<template>
  <div class="fs-2 text-center m-3 p-3">
    Jeder Spieler versucht vier Steine seiner Farbe in einer Reihe zu platzieren -
    vertikal, horizontal oder diagonal!
  </div>
  <br>
  <div id="carouselExample" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active text-center" style="height: 25em">
        <div class="fs-5 m-2">
          Das Brett besteht aus acht Reihen und acht Spalten. Es wird mit einem leeren Brett begonnen und durch jeden
          Zug ein Feld belegt.
        </div>
        <img class="align-bottom" height="200ex" src="https://images.brettspielnetz.de/spelregels/4rij/leegbord.gif" alt="Image 1">
      </div>
      <div class="carousel-item text-center" style="height: 25em">
        <div class="fs-5 m-2">
          Der gelbe Spieler fängt an und setzt einen Stein in der ersten Reihe, die Spalte kann er beliebig wählen
          (von a bis h).
          Nach dem Setzen muss der Spieler seinen Zug bestätigen.
          Es wird immer auf
          leeres Feld gesetzt, unter dem sich kein anderes leeres Feld befindet. Nach dem ersten Zug von
          Gelb könnte das Brett beispielsweise so aussehen:
        </div>
        <img class="align-bottom" height="200ex" src="https://images.brettspielnetz.de/spelregels/4rij/eensteen.gif" alt="Image 2">
      </div>
      <div class="carousel-item text-center" style="height: 25em">
        <div class="fs-5 m-2">
          Am besten werden gleichzeitig zwei Bedrohungen durch jeweils drei Steine in einer Reihe aufgebaut.
          Sobald eine Reihe mit drei Steinen aufgebaut ist, muss der Gegenspieler reagieren, und anschließend
          wird die andere Reihe vervollständigt. Hier ist ein Beispiel:
        </div>
        <img class="align-bottom" height="200ex" src="https://images.brettspielnetz.de/spelregels/4rij/image008.gif" alt="Image 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon bg-primary" aria-hidden="false"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon bg-primary" aria-hidden="false"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "About-View"
}
</script>

<style scoped>

</style>