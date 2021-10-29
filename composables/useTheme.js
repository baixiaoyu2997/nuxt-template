// if you are using `ssr: false` and `nuxt start`, see https://github.com/nuxt-community/color-mode-module/issues/25#issuecomment-692567237
import { toRefs,useNuxtApp, onMounted} from '#app'

export default () => {
  const { $colorMode } = useNuxtApp().vue2App
  onMounted(()=>{
    $colorMode.preference = 'light'
  })
  return toRefs($colorMode)
}
