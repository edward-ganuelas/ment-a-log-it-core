<template>
  <div class="cognitive-errors" @input="$emit('cognitiveErrorChange', value)">
    <v-select :options="options"></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'CognitiveErros',
  components: {
    vSelect
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
