<template>
    <div class="row">
        <div class="col-12">
            <h4>{{$t('depressionChecklist.activitiesAndPersonalRelationships.header')}}</h4>
        </div>
        <div class="col-12">
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfInterestInFamilyFriends')}}  <symptoms-select :selected="lossOfInterestInFamilyFriendsValue" key-name="lossOfInterestInFamilyFriendsValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.loneliness')}} <symptoms-select key-name="lonelinessValue" :selected="lonelinessValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.spendingLessTimeWithFamily')}} <symptoms-select :selected="spendingLessTimeWithFamilyValue" key-name="spendingLessTimeWithFamilyValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfMotivation')}} <symptoms-select :selected="lossOfMotivationValue" key-name="lossOfMotivationValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfInterestInWorkOrOtherActivities')}} <symptoms-select :selected="lossOfInterestInWorkOrOtherActivitiesValue" key-name="lossOfInterestInWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.avoidingWorkOrOtherActivitiesValue')}}: <symptoms-select :selected="avoidingWorkOrOtherActivitiesValue" key-name="avoidingWorkOrOtherActivitiesValue" @change="mutateTotal" /></p>
            <p>{{$t('depressionChecklist.activitiesAndPersonalRelationships.lossOfPleasureOrSatisfactionValue')}} <symptoms-select :selected="lossOfPleasureOrSatisfactionValue" key-name="lossOfPleasureOrSatisfactionValue" @change="mutateTotal" /></p>
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
    data() {
        return {
            total: 0
        }
    },
    methods: {
        setTotal() {
            this.total = this.lossOfInterestInFamilyFriendsValue + this.lonelinessValue +
                this.spendingLessTimeWithFamilyValue + this.lossOfMotivationValue +
                    this.lossOfInterestInWorkOrOtherActivitiesValue +
                        this.avoidingWorkOrOtherActivitiesValue + this.lossOfPleasureOrSatisfactionValue;
        }
    },
    computed: {
        lossOfInterestInFamilyFriendsValue: sync('DepressionChecklist/lossOfInterestInFamilyFriendsValue'),
        lonelinessValue: sync('DepressionChecklist/lonelinessValue'),
        spendingLessTimeWithFamilyValue: sync('DepressionChecklist/spendingLessTimeWithFamilyValue'),
        lossOfMotivationValue: sync('DepressionChecklist/lossOfMotivationValue'),
        lossOfInterestInWorkOrOtherActivitiesValue: sync('DepressionChecklist/lossOfInterestInWorkOrOtherActivitiesValue'),
        avoidingWorkOrOtherActivitiesValue: sync('DepressionChecklist/avoidingWorkOrOtherActivitiesValue'),
        lossOfPleasureOrSatisfactionValue: sync('DepressionChecklist/lossOfPleasureOrSatisfactionValue'),
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