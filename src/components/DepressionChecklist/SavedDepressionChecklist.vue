<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <ul>
                    <li v-for="list in sortedSavedDepressionChecklist" v-bind:key="list.id" @click="$emit('dateClicked', list.id)">
                        {{list.date}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'SavedDepressionChecklist',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    computed: {
        sortedSavedDepressionChecklist() {
            return _.cloneDeep(this.list).sort((a,b) =>{ 
                return moment(b.date, 'MMM DD, YYYY').valueOf() - moment(a.date, 'MMM DD, YYYY').valueOf();
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    ul {
        li{
            list-style-type: none;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>