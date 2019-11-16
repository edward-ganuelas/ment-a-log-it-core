<template>
    <select v-model="value" @change="$emit('change', value, keyName)">
        <option v-for="choice in choices" :key="choice.value" :value="choice.value">
            {{choice.label}}
        </option>
    </select>
</template>

<script>
export default {
    name: 'SymptomsSelect',
    props: {
        keyName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            value: 0,
            choices: Object.freeze([
                { value: 0, label: this.$t('depressionChecklist.symptompsChoices.notAtAll') },
                { value: 1, label: this.$t('depressionChecklist.symptompsChoices.somewhat') },
                { value: 2, label: this.$t('depressionChecklist.symptompsChoices.moderately')},
                { value: 3, label: this.$t('depressionChecklist.symptompsChoices.aLot') },
                { value: 4, label: this.$t('depressionChecklist.symptompsChoices.extremely') }
            ])
        }
        
    }
}
</script>