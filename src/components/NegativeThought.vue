<template>
  <div class="row negative-thought">
    <div class="col-12 col-md-4">
      <automatic-negative-thoughts 
        :headerText="automaticNegativeThoughtsHeaderText" 
        :savedValue="thought['AutomaticNegativeThoughts']" 
        v-on:save="saveNegativeThoughts" ref="automaticNegativeThoughts" />
    </div> 
    <div class="col-12 col-md-4">
      <cognitive-errors 
        :headerText="cognitveErrorsHeaderText" 
        v-on:save="saveCognitveErrors" 
        :savedValue="thought['CognitiveErrors']" ref="cognitiveErrors" />
    </div>
    <div class="col-12 col-md-4">
      <rational-alternative-thoughts 
        :headerText="rationalAlternativeThoughtsHeaderText" 
        :savedValue="thought['RationalAlternativeThoughts']" 
        v-on:save="saveRationalThoughts" ref="rationalAlternativeThoughts" />
    </div>
    <div class="col-12 col-md-4 errors" v-if="errors !== ''">
      <p>{{errors}}</p>
    </div>
    <div class="col-12">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-sm-2 offset-sm-10">
            <icon-button icon="far fa-save" @click="save" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CognitiveErrors from '@/components/CognitiveErrors/CognitiveErrors';
import AutomaticNegativeThoughts from '@/components/AutomaticNegativeThoughts/AutomaticNegativeThoughts';
import RationalAlternativeThoughts from '@/components/RationalAlternativeThoughts/RationalAlternativeThoughts';
import IconButton from '@/components/IconButton';
export default {
  name: 'NegativeThought',
  components: {
    CognitiveErrors,
    AutomaticNegativeThoughts,
    RationalAlternativeThoughts,
    IconButton
  },
  props: {
    isFirstEntry: {
      type: Boolean,
      required: false
    },
    thought: {
      type: Object,
      required: true
    }
    
  },
  data() {
    return {
      negativeThought: {
        uuid: this.thought['uuid'],
        AutomaticNegativeThoughts: '',
        CognitiveErrors: '',
        RationalAlternativeThoughts: ''
      },
      errors: ''
    }
  },
  computed: {
    automaticNegativeThoughtsHeaderText() {
      if (this.isFirstEntry) {
        return this.$t('copy.automaticNegativeThought');
      }
      return null;
    },
    cognitveErrorsHeaderText() {
      if (this.isFirstEntry) {
        return this.$t('copy.cognitiveError');
      }
      return null;
    },
    rationalAlternativeThoughtsHeaderText() {
      if (this.isFirstEntry) {
        return this.$t('copy.rationalAlternativeThought');
      }
      return null;
    }
  },
  methods: {
    saveNegativeThoughts(value) {
      this.negativeThought.AutomaticNegativeThoughts = value;
    },
    saveCognitveErrors(value) {
      this.negativeThought.CognitiveErrors = value.join(', ');
    },
    saveRationalThoughts(value) {
      this.negativeThought.RationalAlternativeThoughts = value;
    },

    save() {
      this.$refs.automaticNegativeThoughts.parentSave();
      this.$refs.cognitiveErrors.parentSave();
      this.$refs.rationalAlternativeThoughts.parentSave();
      this.$emit('save', this.negativeThought);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
