import { defineStore } from 'pinia'
import { reactive } from '#app'

const useUser = defineStore('user', () => {
  const user = reactive({
    age: 5,
    name: '张三',
  })

  return toRefs(user)
})
export default useUser
