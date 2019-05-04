<template>
<div class="triple-column container">
  <div class="row">
    <div class="col-12 col-md-4">
      <automatic-negative-thoughts :headerText="$t('copy.automaticNegativeThought')" />
    </div> 
    <div class="col-12 col-md-4">
      <cognitive-errors :headerText="$t('copy.cognitiveError')" />
    </div>
    <div class="col-12 col-md-4">
      <rational-alternative-thoughts :headerText="$t('copy.rationalAlternativeThought')" />
    </div>
  </div>
</div>
</template>

<script>
import CognitiveErrors from '@/components/CognitiveErrors/CognitiveErrors';
import AutomaticNegativeThoughts from '@/components/AutomaticNegativeThoughts/AutomaticNegativeThoughts';
import RationalAlternativeThoughts from '@/components/RationalAlternativeThoughts/RationalAlternativeThoughts';
export default {
  name: 'TripleColumn',
  components: {
    CognitiveErrors,
    AutomaticNegativeThoughts,
    RationalAlternativeThoughts
  },
  props: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  h3 {
    margin-bottom: 0;
  }
}
</style>
