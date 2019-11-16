<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.activitiesAndPersonalRelationships.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfInterestInFamilyFriends')}}  <symptoms-select key-name="lossOfInterestInFamilyFriendsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.loneliness')}} <symptoms-select key-name="lonelinessValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.spendingLessTimeWithFamily')}} <symptoms-select key-name="spendingLessTimeWithFamilyValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.spendingLessTimeWithFamily')}} <symptoms-select key-name="lossOfMotivationValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfInterestInWorkOrOtherActivities')}} <symptoms-select key-name="lossOfInterestInWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.avoidingWorkOrOtherActivitiesValue')}}: <symptoms-select key-name="avoidingWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfPleasureOrSatisfactionValue')}} <symptoms-select key-name="lossOfPleasureOrSatisfactionValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
import mutateTotal from '@/mixins/mutateTotal';
export default {
    name: 'ActivitiesAndPersonalRelationships',
    mixins: [mutateTotal],
    components: {
        SymptomsSelect
    },
    computed: {
        lossOfInterestInFamilyFriendsValue: sync('DepressionChecklist/lossOfInterestInFamilyFriendsValue'),
        lonelinessValue: sync('DepressionChecklist/lonelinessValue'),
        spendingLessTimeWithFamilyValue: sync('DepressionChecklist/spendingLessTimeWithFamilyValue'),
        lossOfMotivationValue: sync('DepressionChecklist/lossOfMotivationValue'),
        lossOfInterestInWorkOrOtherActivitiesValue: sync('DepressionChecklist/lossOfInterestInWorkOrOtherActivitiesValue'),
        avoidingWorkOrOtherActivitiesValue: sync('DepressionChecklist/avoidingWorkOrOtherActivitiesValue'),
        lossOfPleasureOrSatisfactionValue: sync('DepressionChecklist/lossOfPleasureOrSatisfactionValue'),
        total() {
            return this.lossOfInterestInFamilyFriendsValue + this.lonelinessValue +
                this.spendingLessTimeWithFamilyValue + this.lossOfMotivationValue +
                    this.lossOfInterestInWorkOrOtherActivitiesValue +
                        this.avoidingWorkOrOtherActivitiesValue + this.lossOfPleasureOrSatisfactionValue;
        }
    },
    watch: {
        total(newValue) {
            this.$emit('totalUpdate', 'activitiesAndPersonalRelationshipsTotal', newValue);
        }
    }

}
</script>
<style lang="scss" scoped>

</style>