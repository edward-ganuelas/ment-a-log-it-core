<template>
  <div class="cognitive-errors-field">
    <v-select :options="options" multiple v-model="cognitiveError" @input="emitChange"></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'CognitiveErrorsField',
  components: {
    vSelect
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    savedValue: {
      type: String,
      required: false
    }
  },
  data() {
    return{
      cognitiveError: [],
    }
  },
  methods: {
    emitChange() {
      this.$emit('cognitiveErrorChange', this.cognitiveError);
    }
  },
  beforeMount() {
    if (this.savedValue) {
        this.cognitiveError = this.savedValue.split(', ');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
