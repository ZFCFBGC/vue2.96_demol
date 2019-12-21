import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import Details from '@/pages/details/details.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
