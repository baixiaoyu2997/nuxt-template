import { defineStore } from 'pinia'
import { reactive, useNuxtApp,toRefs,toRef } from '#app'

const useApp = defineStore('app', () => {
  const $colorMode= reactive(useNuxtApp().vue2App.$colorMode)
  const app = reactive({
    theme:toRef($colorMode,'preference'),
  })
  return toRefs(app)
})
export default useApp
