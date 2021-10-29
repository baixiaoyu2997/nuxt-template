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
