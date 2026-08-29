<template>
  <div class="banner" ref="bannerRef">
    <Transition name="banner-fade" mode="out-in">
      <div class="banner-slide" :key="current">
        <img :src="slides[current].img" :alt="slides[current].title" class="banner-img" />
        <div class="banner-text">
          <h2>{{ slides[current].title }}</h2>
          <p>{{ slides[current].desc }}</p>
        </div>
      </div>
    </Transition>
    <div class="banner-dots">
      <span
        v-for="(slide, i) in slides"
        :key="i"
        :class="{ active: i === current }"
        @click="goTo(i)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  img: string
  title: string
  desc: string
}

const slides: Slide[] = [
  { img: '/images/hero-ai.svg', title: '探索 AI 智能体', desc: 'Codex、Claude Code、Ollama 等前沿 AI 编程工具' },
  { img: '/images/hero-skills.svg', title: 'Skill 完全指南', desc: '从概念到实践，掌握 AI 智能体 Skill 编写' },
  { img: '/images/hero-deploy.svg', title: '本地部署指南', desc: 'Ollama 本地大模型部署，免费、隐私、离线可用' },
]

const current = ref(0)
const bannerRef = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | null = null

function goTo(index: number) {
  current.value = index
  // 手动点击时重置自动播放定时器
  resetTimer()
}

function startTimer() {
  stopTimer()
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 4000)
}

function stopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function resetTimer() {
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>
