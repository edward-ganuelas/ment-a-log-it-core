<template>
<div class="triple-column container">
  <div class="row">
    <div class="col-6 offset-6">
      <icon-button icon="fas fa-plus" @click="add" />
    </div>
  </div>
  <negative-thought :isFirstEntry="true" v-for="thought in negativeThoughts" :thought="thought" v-bind:key="thought['uuid']" v-on:save="save"/>
  {{test}}
</div>
</template>

<script>
import NegativeThought from '@/components/NegativeThought';
import uuidv4 from 'uuid/v4';
import IconButton from '@/components/IconButton';
import { sync } from 'vuex-pathify'
export default {
  name: 'TripleColumn',
  components: {
    NegativeThought,
    IconButton
  },
  data() {
    return {
      test: ''
    }
  },
  computed: {
    negativeThoughts: sync('NegativeThoughts'),
  },
  methods: {
    add(){
  
      this.negativeThoughts.push(this.createTripleColumnObject(uuidv4()));
    },
    createTripleColumnObject(uuid, automaticNegativeThought = '', cognitiveErrors = '', rationalAlternativeThoughts = '') {
      return {
        uuid,
        automaticNegativeThought,
        cognitiveErrors,
        rationalAlternativeThoughts
      }
    },
    save(value) {
      this.negativeThoughts = this.negativeThoughts.map((x)=>{
        if (x['uuid'] === value['uuid']) {
          return value
        }
        return x;
      });
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
