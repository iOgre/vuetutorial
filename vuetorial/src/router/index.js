import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Play from '@/components/Play'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path : '/',
      name : 'play',
      component: Play
    }
  ]
})
