import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import test3 from '@/components/test3'
import test4 from '@/components/test4'
import test5 from '@/components/test5'
import head from '@/components/header'
import menu from '@/components/menu'
import body from '@/components/bodys'
import main from '@/components/main'
import main2 from '@/components/main2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/test2',
      name: 'test2',
      component: test2
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path: '/test4',
      name: 'test4',
      component: test4
    },
    {
      path: '/test5',
      name: 'test5',
      component: test5
    },
    {
      path: '/head',
      name: 'header',
      component: head
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/body',
      name: 'body',
      component: body
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/main2',
      name: 'main2',
      component: main2
    }
  ]
})
