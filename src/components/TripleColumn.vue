<template>
<div class="triple-column container">
  <div class="row top-action-button">
    <div class="col-12 col-sm-2 offset-sm-10">
      <icon-button icon="fas fa-file-alt" @click="add" />
    </div>
  </div>
  <div class="row" v-if="negativeThoughts.length === 0">
    <div class="col-12">
      <p>{{$t('copy.initialMessage')}}</p>
    </div>
  </div>
  <div class="row desktop-header" v-if="negativeThoughts.length > 0">
    <div class="col-4">
      <h3>{{$t('copy.automaticNegativeThought')}}</h3>
    </div>
    <div class="col-4">
      <h3>{{$t('copy.cognitiveError')}}</h3>
    </div>
    <div class="col-4">
      <h3>{{$t('copy.rationalAlternativeThought')}}</h3>
    </div>
  </div>
  <negative-thought v-for="thought in negativeThoughts" :thought="thought" 
    v-bind:key="thought['uuid']" 
    v-on:save="save"
    v-on:deleteThought="deleteThought" />
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
      this.negativeThoughts = this.negativeThoughts.map((thought)=>{
        if (thought['uuid'] === value['uuid']) {
          return value
        }
        return thought;
      });
    },
    deleteThought(uuid) {
      const result = window.confirm(this.$t('copy.confirm'));
      if (result) {
        this.negativeThoughts = this.negativeThoughts.filter(thought => thought.uuid !== uuid);
      }
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
.desktop-header{
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
}
.top-action-button {
  margin-bottom: 18px;
}
</style>
