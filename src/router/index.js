import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Algebra from '@/views/Algebra'
import Geometry from '@/views/Geometry'
import Calculus from '@/views/Calculus'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/algebra',
      name: 'Algebra',
      component: Algebra
    },
    {
      path: '/geometry',
      name: 'Geometry',
      component: Geometry
    },
    {
      path: '/calculus',
      name: 'Calculus',
      component: Calculus
    }
  ]
})
