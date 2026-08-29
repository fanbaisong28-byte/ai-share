<template>
  <nav class="app-nav">
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.path" :class="{ active: isActive(item.path) }">
        <router-link :to="item.path">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const navItems = [
  { path: '/', label: '首页' },
  { path: '/category', label: '文章分类' },
  { path: '/register', label: '注册' },
  { path: '/user', label: '个人中心' },
  { path: '/about', label: '关于本站' },
]
function isActive(path: string): boolean {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>
