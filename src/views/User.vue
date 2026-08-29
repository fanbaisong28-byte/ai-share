<template>
  <div class="page-user">
    <!-- 顶部背景图 -->
    <div class="user-banner">
      <img src="/images/user-bg.svg" alt="个人中心背景" class="user-bg-img" />
    </div>

    <h2 class="page-title">个人中心</h2>
    <p class="back-home">
      <router-link to="/">← 返回首页</router-link>
    </p>

    <div class="user-card">
      <img src="/images/avatar.svg" alt="头像" class="user-avatar" />
      <div class="user-info">
        <h3>{{ nickname }}</h3>
        <p class="user-role">{{ role }}</p>
        <p class="user-bio">{{ bio }}</p>
        <div class="user-stats">
          <div class="stat">
            <img src="/images/icon-article.svg" alt="文章数" class="stat-icon" />
            <em>{{ articles.length }}</em>
            <span>文章</span>
          </div>
          <div class="stat">
            <img src="/images/icon-collection.svg" alt="收藏数" class="stat-icon" />
            <em>{{ categories.length }}</em>
            <span>分类</span>
          </div>
          <div class="stat">
            <img src="/images/icon-collection.svg" alt="收藏数" class="stat-icon" />
            <em>{{ favorites.length }}</em>
            <span>收藏</span>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <h3>📝 我的文章</h3>
      <div class="card-grid">
        <ArticleCard v-for="a in myArticles" :key="a.id"
          :id="a.id" :title="a.title" :desc="a.desc"
          :icon="a.icon" :img="a.img" :tag="a.tag" />
      </div>
    </section>

    <section class="section">
      <h3>⭐ 我的收藏</h3>
      <div class="card-grid">
        <ArticleCard v-for="a in favorites" :key="'fav' + a.id"
          :id="a.id" :title="a.title" :desc="a.desc"
          :icon="a.icon" :img="a.img" :tag="a.tag" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import { articles, categories } from '../data/articles'

// 使用 reactive + toRefs 解构保持响应式（涵盖 toRefs 知识点）
const user = reactive({
  nickname: 'AI 智能体探索者',
  role: '全栈开发 & AI 工具研究者',
  bio: '专注于 AI 编程工具与智能体技术的研究与分享，持续探索前沿技术。',
})

const { nickname, role, bio } = toRefs(user)

const myArticles = computed(() => articles.filter((_, i) => i < 4))
const favorites = computed(() => articles.filter(a => [5, 3, 10].includes(a.id)))
</script>
