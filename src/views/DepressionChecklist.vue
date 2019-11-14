<template>
  <div id="depressionChecklist" class="container">
      <div class="row">
          <div class="col-12">
              <p>{{date}}</p>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <h4>Thoughts and Feelings</h4>
          </div>
          <div class="col-12">
              <p>Feeling sad or down in the dumps: <symptoms-select /></p>
              <p>Feeling unhappy or blue: <symptoms-select /></p>
              <p>Crying spells or tearfulness: <symptoms-select /></p>
              <p>Feeling discouraged: <symptoms-select /></p>
              <p>Feeling hopeless: <symptoms-select /></p>
              <p>Low self-esteem: <symptoms-select /></p>
              <p>Feeling worthless or inadequate: <symptoms-select /></p>
              <p>Guilt or shame: <symptoms-select /></p>
              <p>Criticizing yourself or blaming yourself: <symptoms-select /></p>
              <p>Difficulty making decisions: <symptoms-select /></p>
          </div>
          <div class="col-12">
              <h4>Activities and Personal Relationships</h4>
          </div>
          <div class="col-12">
              <p>Loss of interest in family, friends, or colleagues: <symptoms-select /></p>
              <p>Loneliness: <symptoms-select /></p>
              <p>Spending less time with family or friends: <symptoms-select /></p>
              <p>Loss of motivation: <symptoms-select /></p>
              <p>Loss of interest in work or other activities: <symptoms-select /></p>
              <p>Avoiding work or other activities: <symptoms-select /></p>
              <p>Loss of pleasure or satisfaction in life: <symptoms-select /></p>
          </div>
          <div class="col-12">
              <h4>Physical Symptoms</h4>
          </div>
          <div class="col-12">
              <p>Feeling tired: <symptoms-select /></p>
              <p>Difficulty sleeping or sleeping too much: <symptoms-select /></p>
              <p>Decreased or increased appetite: <symptoms-select /></p>
              <p>Loss of interest in sex: <symptoms-select /></p>
              <p>Worrying about your health: <symptoms-select /></p>
          </div>
          <div class="col-12">
              <h4>Suicidal Urges</h4>
          </div>
          <div class="col-12">
              <p>Do you have any suicidal thoughts?: <symptoms-select /></p>
              <p>Do you want to end your life?: <symptoms-select /></p>
              <p>Do you have a plan for harming yourself?: <symptoms-select /></p>
          </div>
          <div class="col-12">
              <p>Total: {{total}}</p>
              <p>{{convertedTotal}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
import _ from 'lodash';
export default {
    name: 'DepressionChecklist',
    data() {
        return {
            total: 0
        }
    },
    components: {
        SymptomsSelect
    },
    computed: {
        date() {
            return moment().format('MMM DD, YYYY');
        },
        convertedTotal() {
            const total = _.clone(this.total);
            let convertedTotal = '';
            if (total >= 0 && total <= 5) {
                convertedTotal = 'No Depression';
            } else if (total > 5 && total <= 10) {
                convertedTotal = 'Normal but unhappy';
            } else if (total > 10 && total <= 25) {
                convertedTotal = 'Mild depression';
            } else if (total > 25 && total <= 50) {
                convertedTotal = 'Moderate depression';
            } else if (total > 50 && total <= 75) {
                convertedTotal = 'Severe depression';
            } else if (total > 75 ) {
                convertedTotal = 'Extreme depression';
            }
            
            return convertedTotal;
        }
    }

}
</script>

<style scoped lang="scss">
    #depressionChecklist{
        text-align: left;
    }
</style>
