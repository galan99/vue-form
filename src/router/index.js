import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
	    path: '/home',
	    component: resolve => require(['../views/common/Home.vue'], resolve),
	    children: [
	        /* 页面配置 ---- 配置相应导航栏对应的页面 */
	        {
	            path: '/',
	            component: resolve => require(['../views/common/Readme.vue'], resolve)       // 首页
	        },
	        {
                path: '/other',
                component: resolve => require(['../views/table.vue'], resolve)
            },
	        {
                path: '/auto',
                component: resolve => require(['../views/auto.vue'], resolve) //自动化模板
            },
	    ]
	 },
  ]
})
