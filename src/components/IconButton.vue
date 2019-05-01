<template>
  <button class="btn" @click="$emit('click')" :disabled="disabled">
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
    click: {
      type: Function,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  width: 100%;
}
</style>
