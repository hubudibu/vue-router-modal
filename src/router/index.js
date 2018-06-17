import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'

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
          path: 'modal',
          name: 'Modal',
          components: {
            default: Two,
            modal: Modal
          },
          children: [
            {
              path: 'modal-one',
              name: 'Three',
              component: Three
            }
          ]
        }
      ]
    }
  ]
})
