export default function (path = '') {
  return {
    path,
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "home" */ './home.vue')
  };
}
