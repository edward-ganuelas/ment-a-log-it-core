<template>
<div class="triple-column container">
  <negative-thought :isFirstEntry="true" v-for="thought in negativeThoughts" v-bind:key="thought" />
</div>
</template>

<script>
import NegativeThought from '@/components/NegativeThought';
import { sync } from 'vuex-pathify'
export default {
  name: 'TripleColumn',
  components: {
    NegativeThought
  },
  computed: {
    negativeThoughts: sync('NegativeThoughts'),
  },
  methods: {
    createTripleColumnObject(automaticNegativeThought = '', cognitiveErrors = '', rationalAlternativeThoughts = '') {
      return {
        automaticNegativeThought,
        cognitiveErrors,
        rationalAlternativeThoughts
      }
    },
  },
  beforeMount() {
    if (this.negativeThoughts.length <=0 ) {
      this.negativeThoughts.push(this.createTripleColumnObject());
    }
  }
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
