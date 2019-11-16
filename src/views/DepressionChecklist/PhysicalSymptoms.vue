<template>
    <div class="row">
        <div class="col-12">
            <h4>{{ $t('depressionChecklist.physicalSymptoms.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{ $t('depressionChecklist.physicalSymptoms.feelingTired')}} <symptoms-select :selected="feelingTiredValue" key-name="feelingTiredValue" @change="mutateTotal" /></p>
            <p>{{ $t('depressionChecklist.physicalSymptoms.difficultySleepingOrSleepingTooMuch')}} <symptoms-select :selected="difficultySleepingOrSleepingTooMuchValue" key-name="difficultySleepingOrSleepingTooMuchValue" @change="mutateTotal" /></p>
            <p>{{ $t('depressionChecklist.physicalSymptoms.decreasedOrIncreasedAppetite')}} <symptoms-select :selected="decreasedOrIncreasedAppetiteValue" key-name="decreasedOrIncreasedAppetiteValue" @change="mutateTotal" /></p>
            <p>{{ $t('depressionChecklist.physicalSymptoms.lossOfInterestInSex')}} <symptoms-select :selected="lossOfInterestInSexValue" key-name="lossOfInterestInSexValue" @change="mutateTotal" /></p>
            <p>{{ $t('depressionChecklist.physicalSymptoms.worryingAboutYourHealth')}} <symptoms-select :selected="worryingAboutYourHealthValue" key-name="worryingAboutYourHealthValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>
<script>
import { sync } from 'vuex-pathify';
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
            total: 0
        }
    },
    methods: {
        setTotal() {
            this.total = this.feelingTiredValue + this.difficultySleepingOrSleepingTooMuchValue +
                this.decreasedOrIncreasedAppetiteValue + this.lossOfInterestInSexValue +
                    this.worryingAboutYourHealthValue;
        }
    },
    computed: {
        feelingTiredValue: sync('DepressionChecklist/feelingTiredValue'),
        difficultySleepingOrSleepingTooMuchValue: sync('DepressionChecklist/difficultySleepingOrSleepingTooMuchValue'),
        decreasedOrIncreasedAppetiteValue: sync('DepressionChecklist/decreasedOrIncreasedAppetiteValue'),
        lossOfInterestInSexValue: sync('DepressionChecklist/lossOfInterestInSexValue'),
        worryingAboutYourHealthValue: sync('DepressionChecklist/worryingAboutYourHealthValue'),
    },
    watch: {
        total(newValue) {
            this.$emit('totalUpdate', 'physicalSymptomsTotal', newValue);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>