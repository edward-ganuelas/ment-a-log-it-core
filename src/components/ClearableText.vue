<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <p>{{text}}  <icon-button icon="far fa-times-circle" @click="removeError"/></p>
        </div>
      </div>
    </div>
  </div>
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
      this.$emit('removeError', this.text);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p{
  text-align: center;
}
.btn{
  width: auto;
}
</style>
