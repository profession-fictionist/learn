import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () =>
  import ('../view/home/Home.vue')
const Category = () =>
  import ('../view/category/Category.vue')
const Shopcart = () =>
  import ('../view/shopcart/Shopcart.vue')
const Profile = () =>
  import ('../view/profile/Profile.vue')
const Detail = () =>
  import ('../view/detail/DeTail.vue')


const routes = [{
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
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router