import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pathify from './pathify';
import NegativeThoughts from '@/store/NegativeThoughts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        NegativeThoughts 
    },
    plugins: [createPersistedState(), pathify.plugin]
})
