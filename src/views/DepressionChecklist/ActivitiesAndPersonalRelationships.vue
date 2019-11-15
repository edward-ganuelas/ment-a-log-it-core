<template>
    <div class="row">
        <div class="col-12">
            <h4>Activities and Personal Relationships</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.lossOfInterestInFamilyFriends')}}  <symptoms-select key-name="lossOfInterestInFamilyFriendsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.loneliness')}} <symptoms-select key-name="lonelinessValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.spendingLessTimeWithFamily')}} <symptoms-select key-name="spendingLessTimeWithFamilyValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.spendingLessTimeWithFamily')}} <symptoms-select key-name="lossOfMotivationValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.lossOfInterestInWorkOrOtherActivities')}} <symptoms-select key-name="lossOfInterestInWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.avoidingWorkOrOtherActivitiesValue')}}: <symptoms-select key-name="avoidingWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.lossOfPleasureOrSatisfactionValue')}} <symptoms-select key-name="lossOfPleasureOrSatisfactionValue" @change="mutateTotal" /></p>
        </div>
    </div>
</template>

<script>
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
import mutateTotal from '@/mixins/mutateTotal';
export default {
    name: 'ActivitiesAndPersonalRelationships',
    mixins: [mutateTotal],
    components: {
        SymptomsSelect
    },
    data() {
        return {
            lossOfInterestInFamilyFriendsValue: 0,
            lonelinessValue: 0,
            spendingLessTimeWithFamilyValue: 0,
            lossOfMotivationValue: 0,
            lossOfInterestInWorkOrOtherActivitiesValue: 0,
            avoidingWorkOrOtherActivitiesValue: 0,
            lossOfPleasureOrSatisfactionValue: 0 
        }
    },
    computed: {
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