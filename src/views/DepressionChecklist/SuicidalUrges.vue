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
            suicidalThoughtsValue: 0,
            endYourLifeValue: 0,
            planOnHarmingYourselfValue: 0
        }
    },
    computed: {
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