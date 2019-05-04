<template>
  <div class="container-fluid cognitive-errors">
    <div class="row">
      <header-text :headerText="headerText" v-if="headerText" />
      <div class="col-12" v-if="isCognitiveErroFieldHidden">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6"><icon-button icon="fas fa-plus" @click="toggleCognitiveErrorField" /></div>
          </div>
        </div>
      </div>
      <div class="col-12" v-if="!isCognitiveErroFieldHidden">
        <cognitive-errors-field
          :options="options"
          v-on:cognitiveErrorChange="cognitiveErrorChange"
        />
      </div>
      <div class="col-12" v-if="cognitiveErrors.length > 0">
        <clearable-text v-for="error in cognitiveErrors" :text="error" :key="error" v-on:removeText="removeError" />
      </div>
    </div>
  </div>
</template>

<script>
import CognitiveErrorsField from '@/components/CognitiveErrors/CognitiveErrorsField';
import ClearableText from '@/components/ClearableText';
import IconButton from '@/components/IconButton';
import Options from '@/copy/CognitiveErrors';
import HeaderText from '@/components/HeaderText';
import _ from 'lodash';
export default {
  name: "CognitiveErrors",
  components: {
    CognitiveErrorsField,
    ClearableText,
    IconButton,
    HeaderText
  },
  props: {
    headerText:{
      type: String,
      required: false
    }
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
.btn{
  width: auto;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
