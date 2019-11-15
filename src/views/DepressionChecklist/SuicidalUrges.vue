<template>
    <div class="row">
        <div class="row">
            <div class="col-12">
                <h4>Suicidal Urges</h4>
            </div>
            <div class="col-12">
                <p>Do you have any suicidal thoughts?: <symptoms-select @change="mutateTotal" /></p>
                <p>Do you want to end your life?: <symptoms-select @change="mutateTotal" /></p>
                <p>Do you have a plan for harming yourself?: <symptoms-select @change="mutateTotal" /></p>
            </div>
            <div class="col-12">
                <p>Total: {{total}}</p>
                <p>{{convertedTotal}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import SymptomsSelect from '@/components/DepressionChecklist/SymptomsSelect';
export default {
    name: 'SuicidalUrges',
    components: {
        SymptomsSelect
    }
}
</script>
<style lang="scss" scoped>

</style>