<template>
  <div class="page-detail">
    <nav class="detail-breadcrumb">
      <router-link to="/">首页</router-link>
      <span> / </span>
      <router-link to="/category">文章分类</router-link>
      <span> / </span>
      <span>{{ article?.title }}</span>
    </nav>

    <article v-if="article" class="article-body">
      <div class="article-cover" v-if="article.img">
        <img :src="article.img" :alt="article.title" />
      </div>
      <header class="article-header">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <span class="meta-tag" v-if="article.tag">{{ article.tag }}</span>
          <span class="meta-date">{{ article.date }}</span>
        </div>
      </header>
      <div class="article-content" v-html="article.content"></div>
    </article>

    <div v-else class="not-found">
      <p>文章不存在</p>
      <router-link to="/">返回首页</router-link>
    </div>

    <div class="detail-nav">
      <router-link to="/category">← 返回分类</router-link>
      <router-link to="/">← 返回首页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles, type Article } from '../data/articles'

const route = useRoute()
const article = computed<Article | undefined>(() =>
  articles.find(a => a.id === Number(route.params.id))
)
</script>
