/* eslint-disable */
<template>
  <h1 class="text-center text-info">Willkommen zu <br> Vier Gewinnt!</h1>
  <navbar-component></navbar-component>
  <!--<div>{{ message }}</div> TODO -->
  <div class=" justify-content-center text-center  grid gap-3">
    <MyButton label="Neues Spiel " styling="btn-success" icon="bi-play-circle-fill">
    </MyButton>
    <MyButton label="Speichern " icon="bi-floppy-fill">
    </MyButton>
    <MyButton label="Laden " icon="bi-cloud-download-fill">
    </MyButton>
    <MyButton label="Tipp! " icon="bi-cloud-download-fill">
    </MyButton>
  </div>
  <div class=" justify-content-center grid gap-3 text-center">
    <MyButton label="Undo " styling="btn-secondary" icon="bi-arrow-counterclockwise">
    </MyButton>
    <MyButton label="Redo " styling="btn-secondary" icon="bi-arrow-clockwise">
    </MyButton>
  </div>
  <div id="suggestion" class="text text-center"></div>
  <grid-component></grid-component>
</template>

<script>
/* eslint-disable */
import GameState from "@/components/GameState.vue";
import MyButton from "@/components/MyButton.vue";
import NavbarComponent from "@/components/Navbar.vue";
import GridComponent from "@/components/Grid.vue";

export default {
  name: "Home-View",
  components: { NavbarComponent, MyButton, GridComponent }
}
</script>

<style scoped></style>