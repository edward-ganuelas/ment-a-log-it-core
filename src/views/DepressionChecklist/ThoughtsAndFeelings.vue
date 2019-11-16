<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.thoughtsAndFeelings.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingSadOrDownInTheDumps')}} <symptoms-select :selected="feelingSadOrDownInTheDumpsValue" key-name="feelingSadOrDownInTheDumpsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingUnhappyOrBlue')}} <symptoms-select :selected="feelingUnhappyOrBlueValue" key-name="feelingUnhappyOrBlueValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.cryingSpells')}}  <symptoms-select :selected="cryingSpellsValue" key-name="cryingSpellsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingDiscouraged')}} <symptoms-select :selected="feelingDiscouragedValue" key-name="feelingDiscouragedValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingHopeless')}} <symptoms-select :selected="feelingHopelessValue" key-name="feelingHopelessValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.lowSelfEsteem')}} <symptoms-select :selected="lowSelfEsteemValue" key-name="lowSelfEsteemValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.feelingWorthlessOrInadequate')}} <symptoms-select :selected="feelingWorthlessOrInadequateValue" key-name="feelingWorthlessOrInadequateValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.guiltOrShame')}} <symptoms-select :selected="guiltOrShameValue" key-name="guiltOrShameValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.criticizingYourself')}} <symptoms-select :selected="criticizingYourselfValue" key-name="criticizingYourselfValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.thoughtsAndFeelings.difficultyMakingDecisions')}} <symptoms-select :selected="difficultyMakingDecisionsValue" key-name="difficultyMakingDecisionsValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>

<script>
import { sync } from 'vuex-pathify';
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
            total: 0
        }
    },
    methods: {
        setTotal() {
            this.total = this.feelingSadOrDownInTheDumpsValue + this.feelingUnhappyOrBlueValue +
                this.cryingSpellsValue + this.feelingDiscouragedValue + this.feelingHopelessValue +
                    this.lowSelfEsteemValue + this.feelingWorthlessOrInadequateValue + this.guiltOrShameValue +
                        this.criticizingYourselfValue + this.difficultyMakingDecisionsValue;
        }
    },
    computed: {
        feelingSadOrDownInTheDumpsValue: sync('DepressionChecklist/feelingSadOrDownInTheDumpsValue'),
        feelingUnhappyOrBlueValue: sync('DepressionChecklist/feelingUnhappyOrBlueValue'),
        cryingSpellsValue: sync('DepressionChecklist/cryingSpellsValue'),
        feelingDiscouragedValue: sync('DepressionChecklist/feelingDiscouragedValue'),
        feelingHopelessValue: sync('DepressionChecklist/feelingHopelessValue'),
        lowSelfEsteemValue: sync('DepressionChecklist/lowSelfEsteemValue'),
        feelingWorthlessOrInadequateValue: sync('DepressionChecklist/feelingWorthlessOrInadequateValue'),
        guiltOrShameValue: sync('DepressionChecklist/guiltOrShameValue'),
        criticizingYourselfValue: sync('DepressionChecklist/criticizingYourselfValue'),
        difficultyMakingDecisionsValue: sync('DepressionChecklist/difficultyMakingDecisionsValue'),
        
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