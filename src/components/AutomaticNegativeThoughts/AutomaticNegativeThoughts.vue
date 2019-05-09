<template>
    <div class="container-fluid automatic-negative-thoughts">
      <div class="row">
        <header-text :headerText="headerText" v-if="headerText" />
        <div class="col-12" v-if="!showText">
          <div class="container-fluid">
            <div class="row no-gutters">
              <div class="col-12 col-lg-10">
                <textarea rows="3" v-model="automaticNegativeThoughts"></textarea>
              </div>
              <div class="col-12 col-lg-2">
                <icon-button icon="fas fa-check" @click="submit" />
                <icon-button icon="fas fa-eraser" @click="clear" />
              </div>
            </div>
          </div>
         
        </div>
         <div class="col-12" v-if="showText">
          <clearable-text :text="automaticNegativeThoughts" v-on:removeText="removeThoughts" />
        </div>
      </div>
     
    </div>
</template>

<script>
import ClearableText from '@/components/ClearableText';
import HeaderText from '@/components/HeaderText';
import IconButton from '@/components/IconButton';
export default {
  name: 'AutomaticNegativeThoughts',
  components: {
    ClearableText,
    HeaderText,
    IconButton
  },
  props:{
    headerText: {
      type: String,
      required: false
    },
    savedValue: {
      type: String, 
      required: false
    }
  },
  data() {
    return {
      automaticNegativeThoughts: '',
      showText: false,
    }
  },
  methods: {
    submit() {
      if (this.automaticNegativeThoughts == '') {
        return;
      }
      this.showText = true;
      this.$emit('save', this.automaticNegativeThoughts);
    },
    removeThoughts() {
      this.showText = false;
    },
    clear() {
      this.automaticNegativeThoughts = '';
      this.$emit('save', this.automaticNegativeThoughts);
    },
    parentSave() {
      this.submit();
    }
  },
  beforeMount() {
    if (this.savedValue) {
      this.automaticNegativeThoughts = this.savedValue;
      this.showText = true;
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
