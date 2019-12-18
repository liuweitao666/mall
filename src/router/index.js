import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cargo from "../components/content/Cargo";
import Catalog from "../components/content/Cataglog";
import Mine from "../components/content/Mine";
import detail from "../components/content/detail/detail";

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path:'/Cargo',
    component: Cargo,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/Mine',
    component:Mine,
    meta:{
      title:'我的'
    }
  },
  {
    path:'/Catalog',
    component:Catalog,
    meta:{
      title:'分类'
    }
  },
  {
    path:'/detail/:Iid',
    component:detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
