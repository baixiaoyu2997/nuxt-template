// you are using ssr: false and nuxt start, see #25
import { useNuxtApp } from '#app'
export default () => {
  const { $colorMode } = useNuxtApp().vue2App
  console.log($colorMode)
}
