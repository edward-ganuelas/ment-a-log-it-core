<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.suicidalUrges.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.suicidalUrges.suicidalThoughts')}}<symptoms-select key-name="suicidalThoughtsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.suicidalUrges.endYourLife')}} <symptoms-select key-name="endYourLifeValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.suicidalUrges.planOnHarmingYourself')}} <symptoms-select key-name="planOnHarmingYourselfValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>
<script>
import { sync } from 'vuex-pathify'
import mutateTotal from '@/mixins/mutateTotal';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'SuicidalUrges',
    mixins: [mutateTotal],
    components: {
        SymptomsSelect
    },
    computed: {
        suicidalThoughtsValue: sync('DepressionChecklist/suicidalThoughtsValue'),
        endYourLifeValue: sync('DepressionChecklist/endYourLifeValue'),
        planOnHarmingYourselfValue: sync('DepressionChecklist/planOnHarmingYourselfValue'),
        total() {
            return this.suicidalThoughtsValue + this.endYourLifeValue + this.planOnHarmingYourselfValue;
        }
    },
    watch: {
        total(newValue) {
            this.$emit('totalUpdate', 'suicidalUrgesTotal', newValue);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>