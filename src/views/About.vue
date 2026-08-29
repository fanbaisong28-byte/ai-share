<template>
  <div class="page-about">
    <h2 class="page-title">关于本站</h2>
    <p class="back-home">
      <router-link to="/">← 返回首页</router-link>
    </p>

    <div class="about-section">
      <h3>💡 建站初衷</h3>
      <p>随着 AI 编程工具井喷式增长，Codex、Claude Code、Ollama、Hermes 等工具层出不穷。本站旨在系统化整理这些 AI 智能体工具的使用教程与经验，帮助开发者快速上手并提升工作效率。</p>
    </div>

    <div class="about-section">
      <h3>🛠️ 技术栈</h3>
      <div class="about-tech-wrapper">
        <img src="/images/about-tech.svg" alt="技术栈展示" class="about-tech-img" />
      </div>
      <div class="tech-stack">
        <div class="tech-item">
          <span class="tech-icon">🔷</span>
          <div><strong>TypeScript</strong><p>类型安全的 JavaScript 超集</p></div>
        </div>
        <div class="tech-item">
          <span class="tech-icon">🟢</span>
          <div><strong>Vue 3</strong><p>组合式 API，<code>&lt;script setup&gt;</code> 语法糖</p></div>
        </div>
        <div class="tech-item">
          <span class="tech-icon">⚡</span>
          <div><strong>Vite</strong><p>极速冷启动与 HMR 热更新</p></div>
        </div>
        <div class="tech-item">
          <span class="tech-icon">🧭</span>
          <div><strong>Vue Router</strong><p>SPA 路由管理，支持动态路由、懒加载</p></div>
        </div>
        <div class="tech-item">
          <span class="tech-icon">🎨</span>
          <div><strong>纯 CSS</strong><p>5 个独立外链 CSS 文件</p></div>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h3>📋 网站功能</h3>
      <ul>
        <li>📖 文章分类浏览</li>
        <li>📄 文章详情阅读</li>
        <li>📝 用户注册</li>
        <li>👤 个人中心</li>
        <li>📱 响应式布局</li>
      </ul>
    </div>

    <div class="about-section">
      <h3>📬 说明</h3>
      <p>本站为《Web 前端开发》课程结课大作业作品</p>
    </div>

    <!-- AI 概念装饰图 -->
    <div class="about-decoration">
      <img src="/images/hero-machine-learning.svg" alt="AI 概念装饰" />
    </div>
  </div>
</template>

<script setup lang="ts">
// 关于本站页面 —— 展示建站初衷、技术栈、功能说明
</script>
