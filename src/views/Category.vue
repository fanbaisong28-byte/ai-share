<template>
  <div class="page-category">
    <h2 class="page-title">文章分类</h2>

    <div class="filter-bar">
      <button :class="{ active: activeTab === '' }" @click="activeTab = ''">全部</button>
      <button v-for="c in categories" :key="c.key"
        :class="{ active: activeTab === c.key }" @click="activeTab = c.key">
        <img :src="c.icon" :alt="c.name" class="filter-icon" />
        {{ c.name }}
      </button>
    </div>

    <p class="back-home">
      <router-link to="/">← 返回首页</router-link>
    </p>

    <div class="article-list">
      <ArticleCard v-for="a in filteredArticles" :key="a.id"
        :id="a.id" :title="a.title" :desc="a.desc"
        :icon="a.icon" :img="a.img" :tag="a.tag" />
    </div>

    <p v-if="filteredArticles.length === 0" class="empty-tip">该分类暂无文章</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleCard from '../components/ArticleCard.vue'
import { articles, categories } from '../data/articles'

const route = useRoute()
const activeTab = ref<string>((route.query.tab as string) || '')

// 监听路由查询参数变化，更新筛选状态
watch(
  () => route.query.tab,
  (newTab) => {
    activeTab.value = (newTab as string) || ''
  }
)

const filteredArticles = computed(() => {
  if (!activeTab.value) return articles
  return articles.filter(a => a.category === activeTab.value)
})
</script>
