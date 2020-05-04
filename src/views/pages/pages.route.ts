import Home from './home/home.route'

export default function (path = '/') {
  return {
    path,
    component: () => import(/* webpackChunkName: "pages" */ './pages.vue'),
    children: [
      Home()
    ]
  }
}
