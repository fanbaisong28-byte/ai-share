<template>
  <router-link :to="`/detail/${id}`" class="article-card">
    <div class="article-card-img">
      <img v-if="img" :src="img" :alt="title" />
      <span v-else class="article-card-emoji">{{ icon }}</span>
    </div>
    <div class="article-card-body">
      <h4>{{ title }}</h4>
      <p class="article-card-desc">{{ desc }}</p>
      <span class="article-card-tag" v-if="tag">{{ tag }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  id: Number,
  title: String,
  desc: String,
  icon: String,
  img: String,
  tag: String,
})
</script>
