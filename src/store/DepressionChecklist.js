import { make } from 'vuex-pathify'
import _ from 'lodash';

const state = {
    id: null,
    feelingSadOrDownInTheDumpsValue: 0,
    feelingUnhappyOrBlueValue: 0,
    cryingSpellsValue: 0,
    feelingDiscouragedValue: 0,
    feelingHopelessValue: 0,
    lowSelfEsteemValue: 0,
    feelingWorthlessOrInadequateValue: 0,
    guiltOrShameValue: 0,
    criticizingYourselfValue: 0,
    difficultyMakingDecisionsValue: 0,
    lossOfInterestInFamilyFriendsValue: 0,
    lonelinessValue: 0,
    spendingLessTimeWithFamilyValue: 0,
    lossOfMotivationValue: 0,
    lossOfInterestInWorkOrOtherActivitiesValue: 0,
    avoidingWorkOrOtherActivitiesValue: 0,
    lossOfPleasureOrSatisfactionValue: 0,
    feelingTiredValue: 0,
    difficultySleepingOrSleepingTooMuchValue: 0,
    decreasedOrIncreasedAppetiteValue: 0,
    lossOfInterestInSexValue: 0,
    worryingAboutYourHealthValue: 0,
    suicidalThoughtsValue: 0,
    endYourLifeValue: 0,
    planOnHarmingYourselfValue: 0
};

const mutations = {
    ...make.mutations(state),
    clear(state) {
        state.id = null,
        state.feelingSadOrDownInTheDumpsValue = 0,
        state.feelingUnhappyOrBlueValue= 0,
        state.cryingSpellsValue = 0,
        state.feelingDiscouragedValue = 0,
        state.feelingHopelessValue = 0,
        state.lowSelfEsteemValue = 0,
        state.feelingWorthlessOrInadequateValue = 0,
        state.guiltOrShameValue = 0,
        state.criticizingYourselfValue = 0,
        state.difficultyMakingDecisionsValue = 0,
        state.lossOfInterestInFamilyFriendsValue = 0,
        state.lonelinessValue = 0,
        state.spendingLessTimeWithFamilyValue = 0,
        state.lossOfMotivationValue = 0,
        state.lossOfInterestInWorkOrOtherActivitiesValue = 0,
        state.avoidingWorkOrOtherActivitiesValue = 0,
        state.lossOfPleasureOrSatisfactionValue = 0,
        state.feelingTiredValue = 0,
        state.difficultySleepingOrSleepingTooMuchValue = 0,
        state.decreasedOrIncreasedAppetiteValue = 0,
        state.lossOfInterestInSexValue = 0,
        state.worryingAboutYourHealthValue = 0,
        state.suicidalThoughtsValue = 0,
        state.endYourLifeValue = 0,
        state.planOnHarmingYourselfValue = 0
    },
    load(state, depressionChecklist) {
        state.id = depressionChecklist.id;
        _.forEach(depressionChecklist.depressionChecklistData, (value, key) => {
            console.log(key);
            state[key] = value;
        });
    }
};

const actions = {
    ...make.actions(state)
};

const getters = {
    ...make.getters(state)
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}