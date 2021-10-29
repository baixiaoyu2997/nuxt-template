<template>
  <div class="layout--default">
    <Nuxt />
  </div>
</template>
<script setup>
import useTheme from "~/composables/useTheme"
useTheme()
</script>
<style lang="less" scoped>
.layout--default {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
