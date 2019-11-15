<template>
    <div class="row">
         <div class="col-12">
              <h4>Thoughts and Feelings</h4>
          </div>
          <div class="col-12">
              <p>Feeling sad or down in the dumps: <symptoms-select @change="mutateTotal" /></p>
              <p>Feeling unhappy or blue: <symptoms-select @change="mutateTotal" /></p>
              <p>Crying spells or tearfulness: <symptoms-select @change="mutateTotal" /></p>
              <p>Feeling discouraged: <symptoms-select @change="mutateTotal" /></p>
              <p>Feeling hopeless: <symptoms-select @change="mutateTotal" /></p>
              <p>Low self-esteem: <symptoms-select @change="mutateTotal" /></p>
              <p>Feeling worthless or inadequate: <symptoms-select @change="mutateTotal" /></p>
              <p>Guilt or shame: <symptoms-select @change="mutateTotal" /></p>
              <p>Criticizing yourself or blaming yourself: <symptoms-select @change="mutateTotal" /></p>
              <p>Difficulty making decisions: <symptoms-select @change="mutateTotal" /></p>
          </div>
    </div>
</template>

<script>
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'ThoughtsAndFeelings',
    components: {
        SymptomsSelect
    }
    
}
</script>
<style lang="scss" scoped>

</style>