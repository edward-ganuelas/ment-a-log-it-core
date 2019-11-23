<template>
    <p>{{convertedTotal}}</p>
</template>
<script>
export default {
    name: "ConvertedTotal",
    props: {
        total: {
            type: Number,
            required: true
        }
    },
    computed: {
        convertedTotal() {
            const total = this.total;
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
    }
}
</script>