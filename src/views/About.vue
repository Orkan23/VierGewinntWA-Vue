<template>
  <div class="fullscreen scroll text-center" style="background-color: #1b1e36;">
    <navbar-component label="VierGewinnt - Regeln"></navbar-component>


    <div class="q-px-lg q-py-md">
      <q-timeline class ="bg-deep-purple-10 text-white">


        <q-timeline-entry heading>
          Spielplan
        </q-timeline-entry>

        <q-timeline-entry
            subtitle="- Wie vorzugehen -"
            color="orange"

        >
          <div>
            Es gibt zwei verschiedene Spielsteine, meist in den Farben Rot und Gelb.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
        >
          <div>
            Das Ziel ist es, als erster Spieler vier seiner eigenen Spielsteine in einer horizontalen, vertikalen oder diagonalen Reihe zu platzieren.
          </div>
        </q-timeline-entry>


        <q-timeline-entry
        >
          <div>
            Das Spiel endet, wenn ein Spieler vier seiner Spielsteine in einer Reihe platziert hat.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
        >
          <div>
            Wenn das Spielbrett voll ist und keiner der Spieler vier Steine in einer Reihe hat, endet das Spiel unentschieden.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>





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




    <div class="q-pa-md" style="">
      <q-video
          :src="youtubeEmbedUrl"
          :ratio="4/3"
          class="center"
          frameborder="0"
          allowfullscreen
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
