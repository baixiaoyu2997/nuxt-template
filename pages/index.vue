<template>
  <div class="home">
    {{ user.name }}
    <van-button @click="user.name = '李四'">change name</van-button>
    <van-button @click="user.age++">up</van-button>
    <van-button @click="() => (theme = 'light')">turn off light</van-button>
    <van-button @click="() => (theme = 'dark')">turn off dark</van-button>
    <div>{{ theme }}</div>
  </div>
</template>
<script setup>
import useUser from '~/store/user'
import useApp from '~/store/app'

const app=useNuxtApp()
console.log(app.nuxt2Context.$config)
const user = useUser()
const {theme} = toRefs(useApp())
console.log(process.env.DOCKER_REGISTRY)
</script>

<style>
.home {
}
</style>
