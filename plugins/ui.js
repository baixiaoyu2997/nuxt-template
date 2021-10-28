import { Button as VanButton } from 'vant'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const Vue = nuxtApp.vueApp
  Vue.use(VanButton)
})
