<template>
  <div id="blog-app">
    <AppHeader />
    <AppNav />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts" name="App">
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>
