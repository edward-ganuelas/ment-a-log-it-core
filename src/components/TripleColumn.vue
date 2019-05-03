<template>
  <div class="triple-column container">
    <div class="row"><!--Header-->
      <div class="col-12 col-md-4">
        <h3>{{$t('copy.automaticNegativeThought')}}</h3>
      </div>
      <div class="col-12 col-md-4">
        <h3>{{$t("copy.cognitiveError")}}</h3>
      </div>
      <div class="col-12 col-md-4">
        <h3>{{$t('copy.rationalAlternativeThought')}}</h3>
      </div>
    </div>
    <div class="row"><!--TODO Insert Columns Here-->

    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton';
import CognitiveErrors from '@/components/CognitiveErrors/CognitiveErrors';
export default {
  name: 'TripleColumn',
  components: {
    IconButton,
    CognitiveErrors
  },
  props: {
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
