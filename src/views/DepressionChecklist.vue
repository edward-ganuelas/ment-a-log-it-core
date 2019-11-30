<template>
    <div id="depressionChecklist" class="container">
        <div class="row">
            <div class="col-12">
                <h2>{{$t('depressionChecklist.header')}}</h2>
                <p v-html="$t('depressionChecklist.intro')"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <p>{{date}}</p>
                        </div>
                    </div>
                    <thoughts-and-feelings v-on:totalUpdate="mutateTotal" />
                    <activities-and-personal-relationships v-on:totalUpdate="mutateTotal" />
                    <physical-symptoms v-on:totalUpdate="mutateTotal" />
                    <suicidal-urges v-on:totalUpdate="mutateTotal" />
                    <div class="row">
                        <div class="col-12">
                            <p>Total: {{total}}</p>
                            <converted-total :total="total" />
                            <button @click="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <saved-depression-checklist :list="savedDepressionCheckList" />
            </div>
        </div>
        
    </div>
</template>

<script>
import ThoughtsAndFeelings from '@/views/DepressionChecklist/ThoughtsAndFeelings';
import ActivitiesAndPersonalRelationships from '@/views/DepressionChecklist/ActivitiesAndPersonalRelationships';
import PhysicalSymptoms from '@/views/DepressionChecklist/PhysicalSymptoms';
import SuicidalUrges from '@/views/DepressionChecklist/SuicidalUrges';
import DepressionChecklist from '@/models/DepressionChecklist';
import SavedDepressionChecklist from '@/components/DepressionChecklist/SavedDepressionChecklist';
import ConvertedTotal from '@/components/DepressionChecklist/ConvertedTotal';
import { sync } from 'vuex-pathify'
import persistedStore, { STORE_KEYS } from '@/localforage';
import moment from 'moment';
import _ from 'lodash';
export default {
    name: 'DepressionChecklist',
    data() {
        return {
            calendarData: {},
            date: null,
            thoughtsAndFeelingsTotal: 0,
            activitiesAndPersonalRelationshipsTotal: 0,
            physicalSymptomsTotal: 0,
            suicidalUrgesTotal: 0,
            savedDepressionCheckList: []
        }
    },
    components: {
        ThoughtsAndFeelings,
        ActivitiesAndPersonalRelationships,
        PhysicalSymptoms,
        SuicidalUrges,
        SavedDepressionChecklist,
        ConvertedTotal
    },
    methods: {
        mutateTotal(key, value) {
            this[key] = value;
        },
        async save() {
            const depressionChecklist = new DepressionChecklist(this.date, this.depressionChecklistData, this.id);
            this.id = depressionChecklist.id;
            const arrayIndex = _.findIndex(this.savedDepressionCheckList, (listItem) => listItem.id === this.id);
            if (arrayIndex !== -1) {
                this.savedDepressionCheckList[arrayIndex] = depressionChecklist.depressionChecklist;
            } else {
                this.savedDepressionCheckList.push(depressionChecklist.depressionChecklist);
            }
            await persistedStore.setItem(STORE_KEYS.DEPRESSION_CHECKLISTS, this.savedDepressionCheckList);
            alert('Saved!');
        },
        loadChecklist(depressionChecklistObject) {
            this.$store.commit('DepressionChecklist/load', depressionChecklistObject);
        },
        clearChecklist() {
            this.$store.commit('DepressionChecklist/clear');
        }
    },
    computed: {
        id: sync('DepressionChecklist/id'),
        feelingSadOrDownInTheDumpsValue: sync('DepressionChecklist/feelingSadOrDownInTheDumpsValue'),
        cryingSpellsValue: sync('DepressionChecklist/cryingSpellsValue'),
        feelingDiscouragedValue: sync('DepressionChecklist/feelingDiscouragedValue'),
        feelingHopelessValue: sync('DepressionChecklist/feelingHopelessValue'),
        feelingUnhappyOrBlueValue: sync('DepressionChecklist/feelingUnhappyOrBlueValue'),
        lowSelfEsteemValue: sync('DepressionChecklist/lowSelfEsteemValue'),
        feelingWorthlessOrInadequateValue: sync('DepressionChecklist/feelingWorthlessOrInadequateValue'),
        guiltOrShameValue: sync('DepressionChecklist/guiltOrShameValue'),
        criticizingYourselfValue: sync('DepressionChecklist/criticizingYourselfValue'),
        difficultyMakingDecisionsValue: sync('DepressionChecklist/difficultyMakingDecisionsValue'),
        lossOfInterestInFamilyFriendsValue: sync('DepressionChecklist/lossOfInterestInFamilyFriendsValue'),
        lonelinessValue: sync('DepressionChecklist/lonelinessValue'),
        spendingLessTimeWithFamilyValue: sync('DepressionChecklist/spendingLessTimeWithFamilyValue'),
        lossOfMotivationValue: sync('DepressionChecklist/lossOfMotivationValue'),
        lossOfInterestInWorkOrOtherActivitiesValue: sync('DepressionChecklist/lossOfInterestInWorkOrOtherActivitiesValue'),
        avoidingWorkOrOtherActivitiesValue: sync('DepressionChecklist/avoidingWorkOrOtherActivitiesValue'),
        lossOfPleasureOrSatisfactionValue: sync('DepressionChecklist/lossOfPleasureOrSatisfactionValue'),
        feelingTiredValue: sync('DepressionChecklist/feelingTiredValue'),
        difficultySleepingOrSleepingTooMuchValue: sync('DepressionChecklist/difficultySleepingOrSleepingTooMuchValue'),
        decreasedOrIncreasedAppetiteValue: sync('DepressionChecklist/decreasedOrIncreasedAppetiteValue'),
        lossOfInterestInSexValue: sync('DepressionChecklist/lossOfInterestInSexValue'),
        worryingAboutYourHealthValue: sync('DepressionChecklist/worryingAboutYourHealthValue'),
        suicidalThoughtsValue: sync('DepressionChecklist/suicidalThoughtsValue'),
        endYourLifeValue: sync('DepressionChecklist/endYourLifeValue'),
        planOnHarmingYourselfValue: sync('DepressionChecklist/planOnHarmingYourselfValue'),
        depressionChecklistData() {
            return {
                feelingSadOrDownInTheDumpsValue: this.feelingSadOrDownInTheDumpsValue,
                cryingSpellsValue: this.cryingSpellsValue,
                feelingDiscouragedValue: this.feelingDiscouragedValue,
                feelingHopelessValue: this.feelingHopelessValue,
                feelingUnhappyOrBlueValue: this.feelingUnhappyOrBlueValue,
                lowSelfEsteemValue: this.lowSelfEsteemValue,
                feelingWorthlessOrInadequateValue: this.feelingWorthlessOrInadequateValue,
                guiltOrShameValue: this.guiltOrShameValue,
                criticizingYourselfValue: this.criticizingYourselfValue,
                difficultyMakingDecisionsValue: this.difficultyMakingDecisionsValue,
                lossOfInterestInFamilyFriendsValue: this.lossOfInterestInFamilyFriendsValue,
                lonelinessValue: this.lonelinessValue,
                spendingLessTimeWithFamilyValue: this.spendingLessTimeWithFamilyValue,
                lossOfMotivationValue: this.lossOfMotivationValue,
                lossOfInterestInWorkOrOtherActivitiesValue: this.lossOfInterestInFamilyFriendsValue,
                avoidingWorkOrOtherActivitiesValue: this.avoidingWorkOrOtherActivitiesValue,
                lossOfPleasureOrSatisfactionValue: this.lossOfPleasureOrSatisfactionValue,
                feelingTiredValue: this.feelingTiredValue,
                difficultySleepingOrSleepingTooMuchValue: this.difficultySleepingOrSleepingTooMuchValue,
                decreasedOrIncreasedAppetiteValue: this.decreasedOrIncreasedAppetiteValue,
                lossOfInterestInSexValue: this.lossOfInterestInSexValue,
                worryingAboutYourHealthValue: this.worryingAboutYourHealthValue,
                suicidalThoughtsValue: this.suicidalThoughtsValue,
                endYourLifeValue: this.endYourLifeValue,
                planOnHarmingYourselfValue: this.planOnHarmingYourselfValue
            }
        },
        total() {
            return this.thoughtsAndFeelingsTotal + this.activitiesAndPersonalRelationshipsTotal + this.physicalSymptomsTotal + this.suicidalUrgesTotal;
        },
        savedDates() {
            if (_.isEmpty(this.savedDepressionCheckList)){
                return [];
            }
            return this.savedDepressionCheckList.map(checkList => moment(checkList.date, 'MMM DD, YYYY').format('D/M/YYYY'));
        }
    },
    async beforeMount() {
        this.date =  moment().format('MMM DD, YYYY');
        this.savedDepressionCheckList = await persistedStore.getItem(STORE_KEYS.DEPRESSION_CHECKLISTS);
        if (this.id !== null) {
            this.clearChecklist();
        }
        const todaysChecklist = this.savedDepressionCheckList.find((checklist)=> checklist.date === this.date);
        if (!_.isEmpty(todaysChecklist)) {
            this.loadChecklist(todaysChecklist);
        }
    }

}
</script>

<style scoped lang="scss">
    #depressionChecklist{
        text-align: left;
    }
</style>
