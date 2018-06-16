import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import One from '@/components/One'
import Two from '@/components/Two'
import MOne from '@/components/MOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'one',
          name: 'One',
          component: One
        },
        {
          path: 'two',
          name: 'Two',
          component: Two
        },
        {
          path: 'modal/m-one',
          name: 'MOne',
          components: {
            default: Two,
            modal: MOne
          }
        }
      ]
    }
  ]
})
