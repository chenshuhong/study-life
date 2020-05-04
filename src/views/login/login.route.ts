export default function (path = '/login') {
  return {
    path,
    component: () => import(/* webpackChunkName: "login" */ './login.vue'),
    name: 'Login'
  }
}
