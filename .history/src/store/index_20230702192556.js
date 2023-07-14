import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state){
      state.counter++
    },
    decreaseCounter(state){
      state.counter--
    }
  },
  actions: {
    increaseCounter(){
      console.log('increaseCounter(action)')
    }
  },
  getters: {
  },
  modules: {
  }
})
