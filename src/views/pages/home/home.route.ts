export default function (path = '') {
  return {
    path,
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './home.vue')
  }
}
