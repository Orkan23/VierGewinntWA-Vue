/* eslint-disable */
<template>
  <div class="fullscreen">
    <navbar-component label="Willkommen zu Vier Gewinnt!"></navbar-component>
    <!--<div>{{ message }}</div> TODO -->
    <div class=" justify-content-center text-center  grid gap-3">
      <MyButton icon="bi-play-circle-fill" label="Neues Spiel " styling="btn-success" @click=newGame(0)>
      </MyButton>
      <MyButton icon="bi-floppy-fill" label="Speichern " @click=save()>
      </MyButton>
      <MyButton icon="bi-cloud-download-fill" label="Laden " @click=load()>
      </MyButton>
      <MyButton icon="bi-cloud-download-fill" label="Tipp! ">
      </MyButton>
    </div>
    <div class=" justify-content-center grid gap-3 text-center">
      <MyButton icon="bi-arrow-counterclockwise" label="Undo " styling="btn-secondary" @click=undo()>
      </MyButton>
      <MyButton icon="bi-arrow-clockwise" label="Redo " styling="btn-secondary" @click=redo()>
      </MyButton>
    </div>
    <div id="suggestion" class="text text-center"></div>
    <grid-component></grid-component>

  </div>
</template>

<script>
/* eslint-disable */
import GameState from "@/components/GameState.vue";
import MyButton from "@/components/MyButton.vue";
import NavbarComponent from "@/components/Navbar.vue";
import GridComponent from "@/components/Grid.vue";
import {newGame, save, undo, redo, load} from "@/controller.js";

export default {
  name: "Home-View",
  components: {NavbarComponent, MyButton, GridComponent},
  methods: {
    newGame,
    load,
    save,
    undo,
    redo,
  },
}
</script>

<style scoped></style>