import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

import PagesRoute from './pages/pages.route';
import LoginRoute from './login/login.route';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [LoginRoute(), PagesRoute()];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
