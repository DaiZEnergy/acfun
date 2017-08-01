import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Games from '@/components/games'
import Yule from '@/components/yule'
import Article from '@/components/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/games',
      component: Games
    },
     {
      path: '/yule',
      component: Yule
    },
     {
      path: '/article',
      component: Article
    }
  ]
})
