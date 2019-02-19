import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认加载项
    {
      path: '/',
      component: HelloWorld,
      children:[
        {
          path: '/',
          component: () => import('@/view/nav1.vue'),
        },
      ],
    },
    {
      // 一级路由
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue'),
      // 二級路由
      children: [
        {
          path: 'nav1',
          name: 'nav1',
          component: () => import('@/view/nav1.vue'),
        },
        {
          path: 'nav2',
          name: 'nav2',
          component: () => import('@/view/nav2.vue'),
        },
        {
          path: 'nav3',
          name: 'nav3',
          component: () => import('@/view/nav3.vue'),
        }
      ]
    },
    // 找不到路由默认加载的页面
    { path: '*', component: ()=>import('@/components/HelloWorld') }
  ]
})
