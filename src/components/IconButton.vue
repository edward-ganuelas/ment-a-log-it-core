<template>
  <button class="btn" @click="clickEvent()">
    <i :class="icon" v-if="icon"></i>{{text}}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    },
    clickEvent: {
      type: Function,
      required: false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  width: 100%;
}
</style>
