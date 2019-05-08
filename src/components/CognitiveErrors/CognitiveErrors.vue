<template>
  <div class="container-fluid cognitive-errors">
    <div class="row">
      <header-text :headerText="headerText" v-if="headerText" />
      <div class="col-12">
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
import Options from '@/copy/CognitiveErrors';
import HeaderText from '@/components/HeaderText';
import _ from 'lodash';
export default {
  name: "CognitiveErrors",
  components: {
    CognitiveErrorsField,
    ClearableText,
    HeaderText
  },
  props: {
    headerText:{
      type: String,
      required: false
    },
    savedValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      options: Options.slice(),
      cognitiveErrors: []
    }
  },
  methods: {
    cognitiveErrorChange(value) {
      this.cognitiveErrors = value;
      this.options = _.pull(this.options, value);
      this.$emit('save', this.cognitiveErrors);
    },
    removeError(value) {
      this.cognitiveErrors = _.pull(this.cognitiveErrors, value);
      this.options.push(value);
      this.$emit('save', this.cognitiveErrors);
    },
    parentSave() {
      this.$emit('save', this.cognitiveErrors);
    }
  },
  beforeMount() {
    if (this.savedValue) {
      this.cognitiveErrors = this.savedValue.split(', ');
      this.cognitiveErrors.map(x=>_.pull(this.options, x));
    }
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
