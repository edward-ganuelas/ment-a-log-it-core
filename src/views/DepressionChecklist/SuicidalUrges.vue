<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.suicidalUrges.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.suicidalUrges.suicidalThoughts')}}<symptoms-select :selected="suicidalThoughtsValue" key-name="suicidalThoughtsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.suicidalUrges.endYourLife')}} <symptoms-select :selected="endYourLifeValue" key-name="endYourLifeValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.suicidalUrges.planOnHarmingYourself')}} <symptoms-select :selected="planOnHarmingYourselfValue" key-name="planOnHarmingYourselfValue" @change="mutateTotal" /></p>
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
    data() {
        return {
            total: 0
        }
    },
    methods: {
        setTotal() {
            this.total = this.suicidalThoughtsValue + this.endYourLifeValue + this.planOnHarmingYourselfValue;
        }
    },
    computed: {
        suicidalThoughtsValue: sync('DepressionChecklist/suicidalThoughtsValue'),
        endYourLifeValue: sync('DepressionChecklist/endYourLifeValue'),
        planOnHarmingYourselfValue: sync('DepressionChecklist/planOnHarmingYourselfValue'),
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