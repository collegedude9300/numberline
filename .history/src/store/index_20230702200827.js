import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter(state, randomNumber){
      //console.log('increaseCounter(mutations)')
      state.counter += randomNumber
    },
    decreaseCounter(state){
      state.counter -= randomNumber
    }
  },
  actions: {
    increaseCounter({commit}){
      console.log('increaseCounter(action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
      commit('increaseCounter',response.data)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
