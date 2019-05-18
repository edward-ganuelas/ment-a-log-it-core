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
  display: inline-block;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  width: 100%;
  &:hover{
    box-shadow: 10px 17px 18px -8px rgba(0,0,0,0.5);
  }
}
</style>
