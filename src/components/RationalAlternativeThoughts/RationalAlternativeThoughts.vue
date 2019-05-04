<template>
    <div class="container-fluid rational-alternative-thoughts">
      <div class="row">
        <header-text :headerText="headerText" v-if="headerText" />
        <div class="col-12" v-if="!showText">
          <textarea rows="3" v-model="rationalAlternativeThoughts" v-on:keyup.enter="submit"></textarea>
        </div>
         <div class="col-12" v-if="showText">
          <clearable-text :text="rationalAlternativeThoughts" v-on:removeText="removeThoughts" />
        </div>
      </div>
    </div>
</template>

<script>
import ClearableText from '@/components/ClearableText';
import HeaderText from '@/components/HeaderText';
export default {
  name: 'RationalAlternativeThoughts',
  components: {
    ClearableText,
    HeaderText
  },
  props:{
    headerText: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      rationalAlternativeThoughts: '',
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
