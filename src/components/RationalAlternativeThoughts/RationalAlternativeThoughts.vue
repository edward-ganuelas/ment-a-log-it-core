<template>
    <div class="container-fluid rational-alternative-thoughts">
      <div class="row">
        <header-text :headerText="headerText" v-if="headerText" />
        <div class="col-12 show-text" v-if="!showText">
          <div class="container-fluid">
            <div class="row no-gutters">
              <div class="col-12 col-lg-12">
                <textarea rows="3" v-model="rationalAlternativeThoughts"></textarea>
              </div>
              <div class="col-12">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <icon-button icon="fas fa-check" @click="submit" iconColor="green" />
                    </div>
                    <div class="col-6">
                       <icon-button icon="fas fa-eraser" @click="clear" iconColor="red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
         <div class="col-12 show-text" v-if="showText">
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
        },
        savedValue: {
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
            this.rationalAlternativeThoughts = '';
            this.$emit('save', this.rationalAlternativeThoughts);
        },
        parentSave() {
            this.submit();
        }
    },
    beforeMount() {
        if (this.savedValue) {
            this.rationalAlternativeThoughts = this.savedValue;
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
  height: 250px;
}
.show-text{
  min-height: 300px;
}
</style>
