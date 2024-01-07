<template>
  <button class="btn btn-lg m-2 btn-primary" :class="styling" onClick="onClick">{{ label }}
    <i :class="icon"></i>
  </button>`
</template>

<script>

export default {
  name: "MyButtonComponent",
  props: {
    onClick: Function,
    label: String,
    styling: String,
    icon: String
  },
}
</script>

<style scoped>

</style>


