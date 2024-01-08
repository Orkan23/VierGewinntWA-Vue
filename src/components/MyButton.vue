<template>
  <button class="btn btn-lg m-2 btn-primary" :class="styling">{{ label }}
    <i :class="icon"></i>
  </button>`
</template>

<script>

export default {
  name: "MyButtonComponent",
  props: {
    //onClick: Function TODO: change to vue style,
    label: String,
    styling: String,
    icon: String
  },
}
</script>

<style scoped>

</style>


