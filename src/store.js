import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pathify from './pathify';
import NegativeThoughts from '@/store/NegativeThoughts';
import DepressionChecklist from '@/store/DepressionChecklist';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        NegativeThoughts: NegativeThoughts,
        DepressionChecklist: DepressionChecklist
    },
    plugins: [createPersistedState(), pathify.plugin]
})
