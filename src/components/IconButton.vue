<template>
  <button @click="clickEvent()">
    <i :class="icon" v-if="icon"></i>{{text}}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: String,
    text: String,
    clickEvent: {
      type: Function,
      required: false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
