<template>
    <div class="row">
        <div class="col-12">
            <h4>Suicidal Urges</h4>
        </div>
        <div class="col-12">
            <p>Do you have any suicidal thoughts?: <symptoms-select key-name="suicidalThoughtsValue" @change="mutateTotal" /></p>
            <p>Do you want to end your life?: <symptoms-select key-name="endYourLifeValue" @change="mutateTotal" /></p>
            <p>Do you have a plan for harming yourself?: <symptoms-select key-name="planOnHarmingYourselfValue" @change="mutateTotal" /></p>
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