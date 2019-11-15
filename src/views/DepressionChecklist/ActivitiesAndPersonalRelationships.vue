<template>
    <div class="row">
          <div class="col-12">
              <h4>Activities and Personal Relationships</h4>
          </div>
          <div class="col-12">
              <p>Loss of interest in family, friends, or colleagues: <symptoms-select @change="mutateTotal" /></p>
              <p>Loneliness: <symptoms-select @change="mutateTotal" /></p>
              <p>Spending less time with family or friends: <symptoms-select @change="mutateTotal" /></p>
              <p>Loss of motivation: <symptoms-select @change="mutateTotal" /></p>
              <p>Loss of interest in work or other activities: <symptoms-select @change="mutateTotal" /></p>
              <p>Avoiding work or other activities: <symptoms-select @change="mutateTotal" /></p>
              <p>Loss of pleasure or satisfaction in life: <symptoms-select @change="mutateTotal" /></p>
          </div>
    </div>
</template>

<script>
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'ActivitiesAndPersonalRelationships',
    components: {
        SymptomsSelect
    }
}
</script>
<style lang="scss" scoped>

</style>