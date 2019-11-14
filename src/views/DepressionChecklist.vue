<template>
  <div id="depressionChecklist" class="container">
      <div class="row">
          <div class="col-12">
              <p>{{date}}</p>
          </div>
      </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'DepressionChecklist',
    computed: {
        date() {
            return moment().format('MMM DD, YYYY');
        }
    }

}
</script>
