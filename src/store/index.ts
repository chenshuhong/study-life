import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    user(state: any, user: {username: string}) {
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    }
  },
  actions: {},
  modules: {}
});
