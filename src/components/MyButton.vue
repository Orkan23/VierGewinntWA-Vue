
<template>
  <button @click="handleButtonClick" class="btn btn-lg m-2 btn-primary" :class="styling">{{ label }}
    <i :class="icon"></i>
  </button>
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
  methods: {
    handleButtonClick() {
      if (typeof this.onClick === 'function') {
        this.onClick();
      } else {
        console.log('onClick is of type ' + typeof this.onClick);
      }
    },
  },
}
</script>

<style scoped>

</style>


