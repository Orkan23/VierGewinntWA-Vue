<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-blue text-white">
      <span style="font-size: 20px;">Willkommen zu Vier Gewinnt!</span>
      <template v-slot:action>
        <q-btn flat label="VierGewinnt" @click="navigateToVierGewinnt">
          <i class="bi bi-controller"></i>
        </q-btn>
        <q-btn flat label="Regeln" @click="navigateToRegeln">
          <i class="bi bi-info-square"></i>
        </q-btn>
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods: {
    navigateToVierGewinnt() {
      this.$router.push('/');
    },
    navigateToRegeln() {
      this.$router.push('/About');
    },
  }
}

</script>

<style scoped>

</style>