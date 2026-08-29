import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Index', component: () => import('../views/Index.vue') },
  { path: '/category', name: 'Category', component: () => import('../views/Category.vue') },
  { path: '/detail/:id', name: 'Detail', component: () => import('../views/Detail.vue') },
  { path: '/register', name: 'Register', component: () => import('../views/Register.vue') },
  { path: '/user', name: 'User', component: () => import('../views/User.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
