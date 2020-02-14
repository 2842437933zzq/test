import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),

    // 二级路由
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('../views/InDesign/Home.vue'),
      },

      {
        path: '/classify',
        name: 'classify',
        component: () => import('../views/InDesign/Classify.vue'),
      },
      {
        path: '/bookrack',
        name: 'bookrack',
        component: () => import('../views/InDesign/Bookrack.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/InDesign/Mine.vue'),
      }
    ]
  },
  {
    path: '/secrch',
    name: 'secrch',
    component: () => import('../views/homeViews/Secrch.vue'),

  },
  {
    path: '/detail/:url',
    name: 'detail',
    component: () => import('../views/particViewe/Detail.vue'),
  },
  {
    path: '/detacont',
    name: 'detacont',
    component: () => import('../views/particViewe/Detacont.vue'),
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: () => import('../views/fenleiViews/Fenlei.vue'),
  },

  {
    path: '*',
    redirect: {
      name: 'landing'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
