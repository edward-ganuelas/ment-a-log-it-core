<template>
<div class="triple-column container">
  <div class="row">
    <div class="col-12 col-md-4">
      <automatic-negative-thoughts />
    </div> 
    <div class="col-12 col-md-4">
      <cognitive-errors/>
    </div>
    <div class="col-12 col-md-4">
      <h3>{{$t('copy.rationalAlternativeThought')}}</h3>
    </div>
  </div>
</div>
</template>

<script>
import IconButton from "@/components/IconButton";
import CognitiveErrors from "@/components/CognitiveErrors/CognitiveErrors";
import AutomaticNegativeThoughts from "@/components/AutomaticNegativeThoughts/AutomaticNegativeThoughts";
export default {
  name: "TripleColumn",
  components: {
    IconButton,
    CognitiveErrors,
    AutomaticNegativeThoughts
  },
  props: {},
  methods: {}
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
