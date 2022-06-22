import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/MyHome.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Main',
        // 引入页面
        component:()=> import('../views/Main.vue'),
        
        // 载入各个界面路由
        children:[
            {
                path:'/home',
                name:'home',
                component:()=> import('../views/home')
            },
            {
                path:"/user",
                name:"user",
                component:()=> import('../views/user')
            },
            {
                path:"/mall",
                name:"mall",
                component:()=> import('../views/mall')
            }
        ]
    },
    
]

const router = new VueRouter({
    mode:'history',
//    使用数组形式传入路由的配置项
    routes:routes
})

export default router
