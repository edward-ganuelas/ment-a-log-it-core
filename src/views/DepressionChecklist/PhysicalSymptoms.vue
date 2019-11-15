<template>
    <div class="row">
        <div class="col-12">
            <h4>Physical Symptoms</h4>
        </div>
        <div class="col-12">
            <p>Feeling tired: <symptoms-select key-name="feelingTiredValue" @change="mutateTotal" /></p>
            <p>Difficulty sleeping or sleeping too much: <symptoms-select key-name="difficultySleepingOrSleepingTooMuchValue" @change="mutateTotal" /></p>
            <p>Decreased or increased appetite: <symptoms-select key-name="decreasedOrIncreasedAppetiteValue" @change="mutateTotal" /></p>
            <p>Loss of interest in sex: <symptoms-select key-name="lossOfInterestInSexValue" @change="mutateTotal" /></p>
            <p>Worrying about your health: <symptoms-select key-name="worryingAboutYourHealthValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>
<script>
import mutateTotal from '@/mixins/mutateTotal';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'PhysicalSymptoms',
    mixins: [mutateTotal],
    components: {
        SymptomsSelect
    },
    data() {
        return {
            feelingTiredValue: 0,
            difficultySleepingOrSleepingTooMuchValue: 0,
            decreasedOrIncreasedAppetiteValue: 0,
            lossOfInterestInSexValue: 0,
            worryingAboutYourHealthValue: 0
        }
    },
    computed: {
        value() {
            return this.feelingTiredValue + this.difficultySleepingOrSleepingTooMuchValue +
                this.decreasedOrIncreasedAppetiteValue + this.lossOfInterestInSexValue +
                    this.worryingAboutYourHealthValue;
        }
    },
    watch: {
        value(newValue) {
            this.$emit('totalUpdate', 'physicalSymptomsTotal', newValue);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>