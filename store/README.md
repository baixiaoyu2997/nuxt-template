## 介绍
使用pinia
## 调试
需要vue devtool v6，下载地址：https://devtools.vuejs.org/guide/installation.html#chrome

## demo
```vue
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
```
```js
// store/user.js
import { defineStore } from 'pinia'
import { ref } from '#app'

const useUser = defineStore('user', {
  state: () => ({
    age: 5,
    name: ref('张三'),
  }),
  actions: {
    increment() {
      this.age++
    },
  },
})
export default useUser

```
