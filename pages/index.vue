<template>
  <div class="home">
    {{user.name}}
    <van-button @click="user.name='李四'">change name</van-button>
    <van-button @click="user.increment()">up</van-button>
  </div>
</template>
<script setup>
import useUser from '~/store/user'
const user = useUser()

</script>

<style>
.home {
}
</style>
