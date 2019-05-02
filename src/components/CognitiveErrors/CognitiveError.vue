<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <p>{{error}}</p>
        </div>
        <div class="col-2">
          <icon-button icon="far fa-times-circle"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton';
export default {
  name: 'HelloWorld',
  components: {
    IconButton
  },
  props: {
    error : {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
