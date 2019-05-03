<template>
  <div class="triple-column container">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h3>{{$t('copy.automaticNegativeThought')}}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-6"><icon-button icon="fas fa-plus" /></div>
            <div class="col-6"><icon-button icon="fas fa-trash" /></div>
          </div>
          <div class="row">
            <!--Forms-->
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <cognitive-errors />
      </div>
      <div class="col-12 col-md-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h3>{{$t('copy.rationalAlternativeThought')}}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-6"><icon-button icon="fas fa-plus" /></div>
            <div class="col-6"><icon-button icon="fas fa-trash" /></div>
          </div>
        </div>
      </div>
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
