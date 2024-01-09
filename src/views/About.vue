<template>
  <div class="fullscreen scroll text-center" style="background-color: #1b1e36;">
  <navbar-component label="VierGewinnt - Regeln"></navbar-component>


    <div class="q-pa-md">
      <q-card class="my-card">
               <q-card-section>
          <div class="text-h5 text-center"> -Spielplan-</div>
                 <br>
                 <ul class="list-styled">
                 <div class="text-subtitle2 text-center">Es gibt zwei verschiedene Spielsteine, meist in den Farben Rot und Gelb. Das Ziel ist es, als erster Spieler vier seiner eigenen Spielsteine in einer horizontalen, vertikalen oder diagonalen Reihe zu platzieren. Das Spiel endet, wenn ein Spieler vier seiner Spielsteine in einer Reihe platziert hat. Diese Reihe kann horizontal, vertikal oder diagonal verlaufen. Wenn das Spielbrett voll ist und keiner der Spieler vier Steine in einer Reihe hat, endet das Spiel unentschieden.</div>
                 </ul>
               </q-card-section>
      </q-card>
    </div>


    <div class="q-pa-md" style="display: center; flex-direction: column; ">
      <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          style="background-color: black; max-width: 60%"
      >
        <q-carousel-slide :name="1" img-src="https://images.brettspielnetz.de/spelregels/4rij/leegbord.gif" style="max-width: 50%" />
        <q-carousel-slide :name="2" img-src="https://images.brettspielnetz.de/spelregels/4rij/eensteen.gif" style="max-width: 50%" />
        <q-carousel-slide :name="3" img-src="https://images.brettspielnetz.de/spelregels/4rij/image010.gif" style="max-width: 50%" />
      </q-carousel>
    </div>


    <div class="q-pa-md text-center" style="max-width: 60%">
      <q-video
          :ratio="16/9"
          :src="youtubeEmbedUrl"
          class="text-center"
      />
    </div>
  </div>

</template>

<script>

import NavbarComponent from "@/components/Navbar.vue";
import { ref } from 'vue';

export default {
  name: "AboutView",
  components: {NavbarComponent},
  setup () {
    return {
      slide: ref(1)
    }
  },
  data() {
    return {
      youtubeEmbedUrl: "https://www.youtube.com/embed/BXHlc-_-aEA"
    };
  }
};
</script>

<style scoped>
.my-card {
  background-color: #3a3eb6;
  color: #fff;
}

.my-card-section {
  padding: 20px;
}

.my-text {
  margin-top: 10px;
}

</style>
