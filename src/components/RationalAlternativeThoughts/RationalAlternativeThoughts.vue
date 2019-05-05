<template>
    <div class="container-fluid rational-alternative-thoughts">
      <div class="row">
        <header-text :headerText="headerText" v-if="headerText" />
        <div class="col-12" v-if="!showText">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <textarea rows="3" v-model="rationalAlternativeThoughts" v-on:keyup.enter="submit"></textarea>
              </div>
              <div class="col-6">
                <icon-button icon="fas fa-check" @click="submit" />
              </div>
              <div class="col-6">
                <icon-button icon="fas fa-eraser" @click="clear" />
              </div>
            </div>
          </div>
          
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
import IconButton from '@/components/IconButton';
export default {
  name: 'RationalAlternativeThoughts',
  components: {
    ClearableText,
    HeaderText,
    IconButton
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
      if (this.rationalAlternativeThoughts == '') {
        return;
      }
      this.showText = true;
      this.$emit('save', this.rationalAlternativeThoughts);
    },
    removeThoughts() {
      this.showText = false;
    },
    clear() {
      this.automaticNegativeThoughts = '';
      this.$emit('save', this.rationalAlternativeThoughts);
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
