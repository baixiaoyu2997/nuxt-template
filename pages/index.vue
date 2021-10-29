<template>
  <div class="home">
    {{ user.name }}
    <van-button @click="user.name = '李四'">change name</van-button>
    <van-button @click="user.age++">up</van-button>
    <van-button @click="() => (app.theme = 'light')">turn off light</van-button>
    <van-button @click="() => (app.theme = 'dark')">turn off dark</van-button>
    <div>{{ app.theme }}</div>
  </div>
</template>
<script setup>
import useUser from '~/store/user'
import useApp from '~/store/app'
const user = useUser()
const app = useApp()
</script>

<style>
.home {
}
</style>
