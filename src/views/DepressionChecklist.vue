<template>
    <div id="depressionChecklist" class="container">
        <div class="row">
            <div class="col-12">
                <p>{{date}}</p>
            </div>
        </div>
        <thoughts-and-feelings />
        <activities-and-personal-relationships />
        <physical-symptoms />
        <suicidal-urges />
    </div>
</template>

<script>
import ThoughtsAndFeelings from '@/views/DepressionChecklist/ThoughtsAndFeelings';
import ActivitiesAndPersonalRelationships from '@/views/DepressionChecklist/ActivitiesAndPersonalRelationships';
import PhysicalSymptoms from '@/views/DepressionChecklist/PhysicalSymptoms';
import SuicidalUrges from '@/views/DepressionChecklist/SuicidalUrges';
import moment from 'moment';
import _ from 'lodash';
export default {
    name: 'DepressionChecklist',
    data() {
        return {
            total: 0
        }
    },
    components: {
        ThoughtsAndFeelings,
        ActivitiesAndPersonalRelationships,
        PhysicalSymptoms,
        SuicidalUrges
    },
    methods: {
        mutateTotal(value) {
            this.total += value;
        }
    },
    computed: {
        date() {
            return moment().format('MMM DD, YYYY');
        },
        convertedTotal() {
            const total = _.clone(this.total);
            let convertedTotal = '';
            if (total >= 0 && total <= 5) {
                convertedTotal = 'No Depression';
            } else if (total > 5 && total <= 10) {
                convertedTotal = 'Normal but unhappy';
            } else if (total > 10 && total <= 25) {
                convertedTotal = 'Mild depression';
            } else if (total > 25 && total <= 50) {
                convertedTotal = 'Moderate depression';
            } else if (total > 50 && total <= 75) {
                convertedTotal = 'Severe depression';
            } else if (total > 75 ) {
                convertedTotal = 'Extreme depression';
            }
            
            return convertedTotal;
        }
    }

}
</script>

<style scoped lang="scss">
    #depressionChecklist{
        text-align: left;
    }
</style>