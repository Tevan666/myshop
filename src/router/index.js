import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const logined = () => import('../views/profile/childProfile/logined')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/profile/logined',
    component: logined
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to要访问的路径 from从哪个路径跳转而来 next是一个函数，表示放行
  if(to.path ==='/profile') {
    return next();}
  const tokenStr = window.sessionStorage.getItem('token') //获取token 
  if(!tokenStr) {return next('/profile')}
  next()
})

export default router
