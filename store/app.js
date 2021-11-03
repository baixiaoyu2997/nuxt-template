import { defineStore } from 'pinia'
import { reactive, useNuxtApp, toRef, } from '#app'

// 使用composition-api风格编写的store在使用时，解构必须要用storeToRefs包裹。
const useApp = defineStore('app', () => {

  const colorMode=reactive(useNuxtApp().vue2App.$colorMode)
  const theme = toRef(colorMode,"preference")

  return {
    theme
  }
})
export default useApp
