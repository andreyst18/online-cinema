import VueRouter from "vue-router";
import AllFilmsPage from '../pages/AllFilmsPage'
import MainPage from '../pages/MainPage'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/films',
      name: 'films',
      component: AllFilmsPage
    },
    
  ]
})