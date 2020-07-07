import {Route} from 'vue-router';
import store from '@/store';
export default function (path = '/login') {
  return {
    path,
    component: () => import(/* webpackChunkName: "login" */ './login.vue'),
    name: 'Login',
    beforeEnter(to: Route, from: Route, next: any) {
      console.log('login');
      store.state.user ? next({name: 'Home'}) : next();
    }
  };
}
