import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
