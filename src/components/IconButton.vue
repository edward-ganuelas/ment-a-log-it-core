<template>
  <button class="btn" @click="$emit('click')" :disabled="disabled" :style="style">
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
        },
        iconColor: {
            type: String,
            required: false
        }
    },
    computed: {
        style() {
            return {
                color: this.iconColor
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  display: inline-block;
  border: 1px solid #000;
  border-radius: 15px;
  width: 100%;
  &:hover{
    box-shadow: 10px 17px 18px -8px rgba(0,0,0,0.5);
  }
}
.darkmode--activated .btn{
  background-color: #484848;
}
</style>
