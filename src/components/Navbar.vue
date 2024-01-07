<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <i class="bi bi-controller"></i>
        VierGewinnt
      </a>
      <a class="navbar-brand" href="/gameIntro">
        <i class="bi bi-info-square"></i>
        Regeln
      </a>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="themeToggle">
        <label class="form-check-label" for="themeToggle">Dark Mode</label>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

</style>