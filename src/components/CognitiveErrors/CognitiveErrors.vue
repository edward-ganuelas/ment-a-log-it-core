<template>
  <div class="container-fluid cognitive-errors">
    <div class="row">
      <header-text :headerText="headerText" v-if="headerText" />
      <div class="col-12">
        <cognitive-errors-field
          :options="options"
          v-on:cognitiveErrorChange="cognitiveErrorChange"
          :savedValue="savedValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CognitiveErrorsField from '@/components/CognitiveErrors/CognitiveErrorsField';
import Options from '@/copy/CognitiveErrors';
import HeaderText from '@/components/HeaderText';
import _ from 'lodash';
export default {
  name: "CognitiveErrors",
  components: {
    CognitiveErrorsField,
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
      this.options = _.pull(Options.slice(), ...this.cognitiveErrors);
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
.cognitive-errors{
  border-bottom: 1px solid #ebebeb;
  min-height: 300px;
  padding-bottom: 16px;
  .btn{
  width: auto;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
  }
  @media (min-width: 768px){
    border-bottom: none;
  }
}

</style>
