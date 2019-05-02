<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <p>{{error}}</p>
        </div>
        <div class="col-2">
          <icon-button icon="far fa-times-circle" @click="removeError"/>
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
    error : {
      type: String,
      required: true
    }
  },
  methods: {
    removeError(){
      this.$emit('removeError', this.error);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p{
  text-align: left;
}
</style>
