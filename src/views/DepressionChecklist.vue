<template>
  <div id="depressionChecklist" class="container">
      <div class="row">
          <div class="col-12">
              <p>{{date}}</p>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
              <symptoms-select />
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'DepressionChecklist',
    components: {
        SymptomsSelect
    },
    computed: {
        date() {
            return moment().format('MMM DD, YYYY');
        }
    }

}
</script>
