<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.thoughtsAndFeelings.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingSadOrDownInTheDumps')}} <symptoms-select key-name="feelingSadOrDownInTheDumpsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingUnhappyOrBlue')}} <symptoms-select key-name="feelingUnhappyOrBlueValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.cryingSpells')}}  <symptoms-select key-name="cryingSpellsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingDiscouraged')}} <symptoms-select key-name="feelingDiscouragedValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingHopeless')}} <symptoms-select key-name="feelingHopelessValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.lowSelfEsteem')}} <symptoms-select key-name="lowSelfEsteemValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingWorthlessOrInadequate')}} <symptoms-select key-name="feelingWorthlessOrInadequateValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.guiltOrShame')}} <symptoms-select key-name="guiltOrShameValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.criticizingYourself')}} <symptoms-select key-name="criticizingYourselfValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.difficultyMakingDecisions')}} <symptoms-select key-name="difficultyMakingDecisionsValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>

<script>
import mutateTotal from '@/mixins/mutateTotal';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'ThoughtsAndFeelings',
    mixins: [mutateTotal],
    components: {
        SymptomsSelect
    },
    data() {
        return {
            feelingSadOrDownInTheDumpsValue: 0,
            feelingUnhappyOrBlueValue: 0,
            cryingSpellsValue: 0,
            feelingDiscouragedValue: 0,
            feelingHopelessValue: 0,
            lowSelfEsteemValue: 0,
            feelingWorthlessOrInadequateValue: 0,
            guiltOrShameValue: 0,
            criticizingYourselfValue: 0,
            difficultyMakingDecisionsValue: 0
        }
    },
    computed: {
        total() {
            return this.feelingSadOrDownInTheDumpsValue + this.feelingUnhappyOrBlueValue +
                this.cryingSpellsValue + this.feelingDiscouragedValue + this.feelingHopelessValue +
                    this.lowSelfEsteemValue + this.feelingWorthlessOrInadequateValue + this.guiltOrShameValue +
                        this.criticizingYourselfValue + this.difficultyMakingDecisionsValue;
        }
    },
    watch: {
        total(newValue) {
            this.$emit('totalUpdate', 'thoughtsAndFeelingsTotal', newValue)
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>