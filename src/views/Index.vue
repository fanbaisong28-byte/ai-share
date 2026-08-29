<template>
  <div class="page-index">
    <!-- 焦点区：轮播图 -->
    <Banner />

    <section class="section">
      <div class="section-header">
        <h2>🔥 技术推荐</h2>
        <router-link to="/category" class="more-link">查看全部 →</router-link>
      </div>
      <div class="card-grid">
        <ArticleCard v-for="a in featuredArticles" :key="a.id"
          :id="a.id" :title="a.title" :desc="a.desc"
          :icon="a.icon" :img="a.img" :tag="a.tag" />
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>📝 最新文章</h2>
        <router-link to="/category" class="more-link">更多 →</router-link>
      </div>
      <div class="card-grid">
        <ArticleCard v-for="a in latestArticles" :key="a.id"
          :id="a.id" :title="a.title" :desc="a.desc"
          :icon="a.icon" :img="a.img" :tag="a.tag" />
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>📂 热门分类</h2>
        <router-link to="/category" class="more-link">全部分类 →</router-link>
      </div>
      <div class="category-grid">
        <router-link v-for="c in categories" :key="c.key"
          :to="`/category?tab=${c.key}`" class="category-chip">
          <img :src="c.icon" :alt="c.name" class="chip-icon-img" />
          <span class="chip-name">{{ c.name }}</span>
          <span class="chip-count">{{ c.count }}篇</span>
        </router-link>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2>👤 个人简介</h2>
        <router-link to="/user" class="more-link">个人中心 →</router-link>
      </div>
      <div class="profile-card">
        <img src="/images/avatar.svg" alt="头像" class="profile-avatar-img" />
        <div class="profile-info">
          <h3>AI 智能体探索者</h3>
          <p>热爱研究各类 AI 编程工具与智能体技术，分享实践经验和学习心得。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Banner from '../components/Banner.vue'
import ArticleCard from '../components/ArticleCard.vue'
import { articles, categories } from '../data/articles'

const featuredArticles = computed(() => articles.filter(a => [1, 2, 5, 10].includes(a.id)))
const latestArticles = computed(() => [...articles].sort((a, b) => b.id - a.id).slice(0, 4))
</script>
