import Home from './home/home.route';
import {Route} from 'vue-router';
import store from '@/store';

export default function (path = '/') {
  return {
    path,
    component: () => import(/* webpackChunkName: "pages" */ './pages.vue'),
    children: [Home()],
    beforeEnter(to: Route, from: Route, next: any) {
      store.state.user ? next() : next({name: 'Login'});
    }
  };
}
