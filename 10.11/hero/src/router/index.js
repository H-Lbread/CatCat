import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/Hero.vue'
import HeroAdd from '../views/HeroAdd.vue'
import HeroEdit from '../views/HeroEdit.vue'
import Arm from '../views/Arm.vue'
import Skill from '../views/Skill.vue'
// 基于vue的第三方插件, 一般都需要use一下, 比如: vue-router vuex element-ui
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/hero' },
    { path: '/hero', component: Hero },
    { path: '/hero-add', component: HeroAdd },
    { path: '/hero-edit/:id', component: HeroEdit },
    { path: '/arm', component: Arm },
    { path: '/skill', component: Skill }
  ],
  // 配置模糊匹配的切换的类名
  linkActiveClass: 'active'
})

export default router
