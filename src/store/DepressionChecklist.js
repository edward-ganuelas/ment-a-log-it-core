import { make } from 'vuex-pathify'

const state = {
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
    ...make.mutations(state)
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