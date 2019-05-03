<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3>{{$t('copy.automaticNegativeThought')}}</h3>
        </div>
        <div class="col-12" v-if="!showText">
          <textarea rows="10" v-model="automaticNegativeThoughts" v-on:keyup.enter="submit"></textarea>
        </div>
      </div>
      <div class="row" v-if="showText">
        <clearable-text :text="automaticNegativeThoughts" v-on:removeText="removeThoughts" />
      </div>
    </div>
  </div>
</template>

<script>
import ClearableText from '@/components/ClearableText';
export default {
  name: 'AutomaticNegativeThoughts',
  components: {
    ClearableText
  },
  data() {
    return {
      automaticNegativeThoughts: '',
      showText: false,
    }
  },
  methods: {
    submit() {
      this.showText = true;
    },
    removeThoughts() {
      this.showText = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea{
  resize: none;
  width: 100%;
}
</style>
