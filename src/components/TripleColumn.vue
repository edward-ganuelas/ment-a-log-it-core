<template>
<div class="triple-column container">
  <negative-thought :isFirstEntry="true" v-for="(thought, key) in negativeThoughts" :uuid="key" v-bind:key="key" v-on:save="save" />
</div>
</template>

<script>
import NegativeThought from '@/components/NegativeThought';
import uuidv4 from 'uuid/v4';
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
    save(value) {
      this.negativeThoughts[value.uuid] = {
        'automaticNegativeThought': value.AutomaticNegativeThoughts,
        'cognitiveErrors': value.CognitiveErrors,
        'rationalAlternativeThoughts': value.RationalAlternativeThoughts
      }
    }
  },
  beforeMount() {
    if (Object.keys(this.negativeThoughts).length <=0 ) {
      this.negativeThoughts[uuidv4()] = this.createTripleColumnObject();
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
