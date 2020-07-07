import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
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

const user = localStorage.getItem('user');
store.commit('user', user && JSON.parse(user));

export default store;
