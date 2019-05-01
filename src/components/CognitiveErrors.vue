<template>
  <div class="cognitive-errors">
    <v-select :options="options" @input="emitChange"></v-select>
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
  },
  methods: {
    emitChange(value) {
      this.$emit('cognitiveErrorChange', value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
