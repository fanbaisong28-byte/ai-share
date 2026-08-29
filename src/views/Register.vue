<template>
  <div class="page-register">
    <h2 class="page-title">用户注册</h2>
    <p class="back-home">
      <router-link to="/">← 返回首页</router-link>
    </p>

    <form class="register-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">账号</label>
        <input id="username" v-model.trim="form.username" type="text" placeholder="请输入用户名"
          :class="{ error: errors.username }" />
        <span class="form-error" v-if="errors.username">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" v-model="form.password" type="password" placeholder="请输入密码（6-20位）"
          :class="{ error: errors.password }" />
        <span class="form-error" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label for="email">邮箱</label>
        <input id="email" v-model.trim="form.email" type="email" placeholder="请输入邮箱地址"
          :class="{ error: errors.email }" />
        <span class="form-error" v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="bio">个人简介</label>
        <textarea id="bio" v-model.trim="form.bio" rows="4" placeholder="简单介绍一下自己..."></textarea>
      </div>

      <button type="submit" class="btn-submit">立即注册</button>
      <p class="form-tip" v-if="successMsg">{{ successMsg }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ username: '', password: '', email: '', bio: '' })
const errors = reactive({ username: '', password: '', email: '' })
const successMsg = ref('')

function validate() {
  let valid = true
  errors.username = ''
  errors.password = ''
  errors.email = ''
  if (!form.username) { errors.username = '请输入账号'; valid = false }
  else if (form.username.length < 3) { errors.username = '账号至少3个字符'; valid = false }
  if (!form.password) { errors.password = '请输入密码'; valid = false }
  else if (form.password.length < 6) { errors.password = '密码至少6位'; valid = false }
  if (!form.email) { errors.email = '请输入邮箱'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = '邮箱格式不正确'; valid = false }
  return valid
}

function handleSubmit() {
  successMsg.value = ''
  if (validate()) {
    successMsg.value = `注册成功！欢迎你，${form.username}！`
    form.username = ''
    form.password = ''
    form.email = ''
    form.bio = ''
  }
}
</script>
