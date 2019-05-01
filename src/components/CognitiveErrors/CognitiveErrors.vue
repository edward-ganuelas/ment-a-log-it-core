<template>
  <div class="container-fluid cognitive-errors">
    <div class="row">
      <div class="col-12">
        <h3>Cognitive Error</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <icon-button icon="fas fa-plus" @click="toggleCognitiveErrorField"/>
      </div>
      <div class="col-6">
        <icon-button icon="fas fa-trash"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-if="!isCognitiveErroFieldHidden">
        <cognitive-errors-field
          :options="[{label: 'test', code: 'test'}]"
          v-on:cognitiveErrorChange="test"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CognitiveErrorsField from '@/components/CognitiveErrors/CognitiveErrorsField';
import IconButton from '@/components/IconButton';
export default {
  name: "CognitiveErrors",
  components: {
    CognitiveErrorsField,
    IconButton
  },
  data() {
    return {
      isCognitiveErroFieldHidden: true,
    }
  },
  methods: {
    toggleCognitiveErrorField(){
      this.isCognitiveErroFieldHidden = this.isCognitiveErroFieldHidden ? false : true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
