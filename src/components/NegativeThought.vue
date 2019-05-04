<template>
  <div class="row negative-thought">
    <div class="col-12 col-md-4">
      <automatic-negative-thoughts :headerText="automaticNegativeThoughtsHeaderText" />
    </div> 
    <div class="col-12 col-md-4">
      <cognitive-errors :headerText="cognitveErrorsHeaderText" />
    </div>
    <div class="col-12 col-md-4">
      <rational-alternative-thoughts :headerText="rationalAlternativeThoughtsHeaderText" />
    </div>
  </div>
</template>

<script>
import CognitiveErrors from '@/components/CognitiveErrors/CognitiveErrors';
import AutomaticNegativeThoughts from '@/components/AutomaticNegativeThoughts/AutomaticNegativeThoughts';
import RationalAlternativeThoughts from '@/components/RationalAlternativeThoughts/RationalAlternativeThoughts';
export default {
  name: 'NegativeThought',
  components: {
    CognitiveErrors,
    AutomaticNegativeThoughts,
    RationalAlternativeThoughts
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
