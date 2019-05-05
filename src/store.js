import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import pathify from './pathify';
import { make } from 'vuex-pathify'

Vue.use(Vuex);

const state = {
  NegativeThoughts: [],
  AutomaticNegativeThoughts: [],
  CognitiveErrors: [],
  RationalAlternativeThoughts: []
};

const mutations = make.mutations(state);

const actions = make.actions(state);

const getters = make.getters(state);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState(), pathify.plugin]
})
