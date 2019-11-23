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
                            <p>{{convertedTotal}}</p>
                            <button @click="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <ul>
                                <li v-for="list in sortedSavedDepressionChecklist" v-bind:key="list.id">
                                    {{list.date}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
        SuicidalUrges
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
        depressionChecklistData() {
            return {
                feelingSadOrDownInTheDumpsValue: this.$store.get('DepressionChecklist/feelingSadOrDownInTheDumpsValue'),
                cryingSpellsValue: this.$store.get('DepressionChecklist/cryingSpellsValue'),
                feelingDiscouragedValue: this.$store.get('DepressionChecklist/feelingDiscouragedValue'),
                feelingHopelessValue: this.$store.get('DepressionChecklist/feelingHopelessValue'),
                lowSelfEsteemValue: this.$store.get('DepressionChecklist/lowSelfEsteemValue'),
                feelingWorthlessOrInadequateValue: this.$store.get('DepressionChecklist/feelingWorthlessOrInadequateValue'),
                guiltOrShameValue: this.$store.get('DepressionChecklist/guiltOrShameValue'),
                criticizingYourselfValue: this.$store.get('DepressionChecklist/criticizingYourselfValue'),
                difficultyMakingDecisionsValue: this.$store.get('DepressionChecklist/difficultyMakingDecisionsValue'),
                lossOfInterestInFamilyFriendsValue: this.$store.get('DepressionChecklist/lossOfInterestInFamilyFriendsValue'),
                lonelinessValue: this.$store.get('DepressionChecklist/lonelinessValue'),
                spendingLessTimeWithFamilyValue: this.$store.get('DepressionChecklist/spendingLessTimeWithFamilyValue'),
                lossOfMotivationValue: this.$store.get('DepressionChecklist/lossOfMotivationValue'),
                lossOfInterestInWorkOrOtherActivitiesValue: this.$store.get('DepressionChecklist/lossOfInterestInWorkOrOtherActivitiesValue'),
                avoidingWorkOrOtherActivitiesValue: this.$store.get('DepressionChecklist/avoidingWorkOrOtherActivitiesValue'),
                lossOfPleasureOrSatisfactionValue: this.$store.get('DepressionChecklist/lossOfPleasureOrSatisfactionValue'),
                feelingTiredValue: this.$store.get('DepressionChecklist/feelingTiredValue'),
                difficultySleepingOrSleepingTooMuchValue: this.$store.get('DepressionChecklist/difficultySleepingOrSleepingTooMuchValue'),
                decreasedOrIncreasedAppetiteValue: this.$store.get('DepressionChecklist/decreasedOrIncreasedAppetiteValue'),
                lossOfInterestInSexValue: this.$store.get('DepressionChecklist/lossOfInterestInSexValue'),
                worryingAboutYourHealthValue: this.$store.get('DepressionChecklist/worryingAboutYourHealthValue'),
                suicidalThoughtsValue: this.$store.get('DepressionChecklist/suicidalThoughtsValue'),
                endYourLifeValue: this.$store.get('DepressionChecklist/endYourLifeValue'),
                planOnHarmingYourselfValue: this.$store.get('DepressionChecklist/planOnHarmingYourselfValue')
            }
        },
        total() {
            return this.thoughtsAndFeelingsTotal + this.activitiesAndPersonalRelationshipsTotal + this.physicalSymptomsTotal + this.suicidalUrgesTotal;
        },
        convertedTotal() {
            const total = _.clone(this.total);
            let convertedTotal = '';
            if (total >= 0 && total <= 5) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.noDepression');
            } else if (total > 5 && total <= 10) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.normalButUnhappy');
            } else if (total > 10 && total <= 25) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.mildDepression');
            } else if (total > 25 && total <= 50) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.moderateDepresion');
            } else if (total > 50 && total <= 75) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.severeDepression');
            } else if (total > 75 ) {
                convertedTotal = this.$t('depressionChecklist.convertedTotal.extremeDepression');
            }
            return convertedTotal;
        },
        savedDates() {
            if (_.isEmpty(this.savedDepressionCheckList)){
                return [];
            }
            return this.savedDepressionCheckList.map(checkList => moment(checkList.date, 'MMM DD, YYYY').format('D/M/YYYY'));
        },
        sortedSavedDepressionChecklist() {
            return _.cloneDeep(this.savedDepressionCheckList).sort((a,b) =>{ 
                return moment(b.date, 'MMM DD, YYYY').valueOf() - moment(a.date, 'MMM DD, YYYY').valueOf();
            });
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
