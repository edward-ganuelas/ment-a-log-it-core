<template>
  <div class="col-12 header-text">
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
.header-text{
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    display: none;
  }
}
</style>
