<template>
  <div class="container-fluid cognitive-errors">
    <div class="row">
      <div class="col-6">
        <icon-button icon="fas fa-plus" @click="toggleCognitiveErrorField" :disabled="!isCognitiveErroFieldHidden"/>
      </div>
      <div class="col-6">
        <icon-button icon="fas fa-trash"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="!isCognitiveErroFieldHidden">
        <cognitive-errors-field
          :options="options"
          v-on:cognitiveErrorChange="cognitiveErrorChange"
        />
      </div>
    </div>
    <div class="row" v-if="cognitiveErrors.length > 0">
      <cognitive-error v-for="error in cognitiveErrors" :error="error" :key="error" v-on:removeError="removeError" />
    </div>
  </div>
</template>

<script>
import CognitiveErrorsField from '@/components/CognitiveErrors/CognitiveErrorsField';
import CognitiveError from '@/components/CognitiveErrors/CognitiveError';
import IconButton from '@/components/IconButton';
import Options from '@/copy/CognitiveErrors';
import _ from 'lodash';
export default {
  name: "CognitiveErrors",
  components: {
    CognitiveErrorsField,
    CognitiveError,
    IconButton
  },
  data() {
    return {
      isCognitiveErroFieldHidden: true,
      options: Options.slice(),
      cognitiveErrors: []
    }
  },
  methods: {
    toggleCognitiveErrorField() {
      this.isCognitiveErroFieldHidden = this.isCognitiveErroFieldHidden ? false : true;
    },
    cognitiveErrorChange(value) {
      this.cognitiveErrors.push(value);
      this.options = _.pull(this.options, value);
      this.toggleCognitiveErrorField();
    },
    removeError(value) {
      this.cognitiveErrors = _.pull(this.cognitiveErrors.slice(), value);
      this.options.push(value);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
