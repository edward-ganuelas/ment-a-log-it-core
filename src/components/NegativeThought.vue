<template>
  <div class="row negative-thought">
    <div class="col-12 date">
      <p>Created Date: <date-formatter :dateTime="this.thought.createDate" /></p>
      <p>Last Modified Date: <date-formatter :dateTime="this.thought.modifiedDate" /></p>
    </div>
    <div class="col-12 col-md-4">
      <automatic-negative-thoughts 
        :headerText="$t('copy.automaticNegativeThought')" 
        :savedValue="thought['AutomaticNegativeThoughts']" 
        v-on:save="saveNegativeThoughts" ref="automaticNegativeThoughts" />
    </div> 
    <div class="col-12 col-md-4">
      <cognitive-errors 
        :headerText="$t('copy.cognitiveError')" 
        v-on:save="saveCognitveErrors" 
        :savedValue="thought['CognitiveErrors']" ref="cognitiveErrors" />
    </div>
    <div class="col-12 col-md-4">
      <rational-alternative-thoughts 
        :headerText="$t('copy.rationalAlternativeThought')" 
        :savedValue="thought['RationalAlternativeThoughts']" 
        v-on:save="saveRationalThoughts" ref="rationalAlternativeThoughts" />
    </div>
    <div class="col-12 col-md-4 errors" v-if="errors !== ''">
      <p>{{errors}}</p>
    </div>
    <div class="col-12">
      <div class="container-fluid action-buttons">
        <div class="row">
          <div class="col-6 col-sm-1 offset-sm-10">
            <icon-button icon="far fa-save" @click="save" iconColor="#0066FF"/>
          </div>
          <div class="col-6 col-sm-1">
            <icon-button icon="far fa-trash-alt" @click="deleteThought" iconColor="#0066FF" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CognitiveErrors from '@/components/CognitiveErrors/CognitiveErrors';
import AutomaticNegativeThoughts from '@/components/AutomaticNegativeThoughts/AutomaticNegativeThoughts';
import RationalAlternativeThoughts from '@/components/RationalAlternativeThoughts/RationalAlternativeThoughts';
import IconButton from '@/components/IconButton';
import DateFormatter from '@/components/DateFormatter';
export default {
    name: 'NegativeThought',
    components: {
        CognitiveErrors,
        AutomaticNegativeThoughts,
        RationalAlternativeThoughts,
        IconButton,
        DateFormatter
    },
    props: {
        isFirstEntry: {
            type: Boolean,
            required: false
        },
        thought: {
            type: Object,
            required: true
        }
    
    },
    data() {
        return {
            negativeThought: {
                uuid: this.thought['uuid'],
                createDate: this.thought.createDate,
                modifiedDate: this.thought.modifiedDate,
                AutomaticNegativeThoughts: '',
                CognitiveErrors: '',
                RationalAlternativeThoughts: ''
            },
            errors: ''
        }
    },
    methods: {
        saveNegativeThoughts(value) {
            this.negativeThought.AutomaticNegativeThoughts = value;
        },
        saveCognitveErrors(value) {
            this.negativeThought.CognitiveErrors = value.join(', ');
        },
        saveRationalThoughts(value) {
            this.negativeThought.RationalAlternativeThoughts = value;
        },

        save() {
            this.$refs.automaticNegativeThoughts.parentSave();
            this.$refs.cognitiveErrors.parentSave();
            this.$refs.rationalAlternativeThoughts.parentSave();
            this.negativeThought.modifiedDate = Date.now();
            this.$emit('save', this.negativeThought);
        },
        deleteThought() {
            this.$emit('deleteThought', this.negativeThought.uuid);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.negative-thought{
  border: 1px solid #000;
  margin: 1rem auto;
  // padding-top: 40px;
  border-radius: 15px;
}
.action-buttons {
  padding: 18px 0 18px 0;
}
.date {
  text-align: left;
  margin-top: 24px;
}
</style>
