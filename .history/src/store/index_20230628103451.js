import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state){
      this.counter++
    },
    decreaseCounter(state){
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
