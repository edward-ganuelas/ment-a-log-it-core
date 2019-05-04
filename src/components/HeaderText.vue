<template>
  <div class="col-12">
    <h3>{{headerText}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HeaderText',
  props: {
    headerText: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
