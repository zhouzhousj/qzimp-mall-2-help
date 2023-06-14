//引入vue_router
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
//ES6  import输入  export 输出
// 模块化 默认私有，如何被别人使用？
// 通过export 输出
// 如何使用
// export default 默认输出

//路由表
const routes = [
  {
    path: '/', 
    name: 'index', 
    component: () => import('@/views/static/index.vue'),
    redirect: '/cms_help_category',
    children: [
      {
        path: '/cms_help_category', 
        name: '帮助信息分类', //命名路由
        component: () => import('@/views/admin/cms_help_category.vue')
      },
      {
        path: '/cms_help', 
        name: '帮助信息', //命名路由
        component: () => import('@/views/admin/cms_help.vue')
      },
      {
        path: '/common_question',
        name: 'common_question',
        component: ()=> import('@/views/user/common_question.vue')
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue') // 懒加载
  }
]
const router = createRouter({
  //模式
  history: createWebHashHistory(),
  routes
})

export { router, routes }
