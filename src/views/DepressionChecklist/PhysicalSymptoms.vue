<template>
    <div class="row">
        <div class="col-12">
            <h4>Physical Symptoms</h4>
        </div>
        <div class="col-12">
            <p>Feeling tired: <symptoms-select @change="mutateTotal" /></p>
            <p>Difficulty sleeping or sleeping too much: <symptoms-select @change="mutateTotal" /></p>
            <p>Decreased or increased appetite: <symptoms-select @change="mutateTotal" /></p>
            <p>Loss of interest in sex: <symptoms-select @change="mutateTotal" /></p>
            <p>Worrying about your health: <symptoms-select @change="mutateTotal" /></p>
        </div>
    </div>
</template>
<script>
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'PhysicalSymptoms',
    components: {
        SymptomsSelect
    }
}
</script>
<style lang="scss" scoped>

</style>