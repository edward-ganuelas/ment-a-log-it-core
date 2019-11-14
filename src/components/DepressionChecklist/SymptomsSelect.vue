<template>
    <select v-model="value" @change="$emit('change', value)">
        <option v-for="choice in choices" :key="choice.value" :value="choice.value">
            {{choice.label}}
        </option>
    </select>
</template>

<script>
export default {
    name: 'SymptomsSelect',
    data() {
        return {
            value: 0,
            choices: Object.freeze([
                { value: 0, label: 'Not at All' },
                { value: 1, label: 'Somewhat' },
                { value: 2, label: 'Moderately'},
                { value: 3, label: 'A Lot' },
                { value: 4, label: 'Extremely' }
            ])
        }
        
    }
}
</script>