import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avaiableProducts: [],
  },
  mutations: {
    PUSH_AVAIABLE_PRODUCT(state, payload) {
      state.avaiableProducts.push(payload);
    },
  },
  actions: {
    pushProduct(context, payload) {
      context.commit('PUSH_AVAIABLE_PRODUCT', payload);
    },
  },
});
