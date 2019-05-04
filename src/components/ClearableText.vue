<template>
    <p>{{text}}  <icon-button icon="far fa-times-circle" @click="removeText"/></p>
</template>

<script>
import IconButton from '@/components/IconButton';
export default {
  name: 'CognitiveError',
  components: {
    IconButton
  },
  props: {
    text : {
      type: String,
      required: true
    }
  },
  methods: {
    removeText(){
      this.$emit('removeText', this.text);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p{
  text-align: center;
  margin-bottom: 0;
}
.btn{
  width: auto;
}
</style>
