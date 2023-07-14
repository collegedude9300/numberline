import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    counter: 0,
    colorCode:'blue'
  },
  mutations: {
    increaseCounter(state, randomNumber){
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber){
      state.counter -= randomNumber
    },
    setColorCode(state, newValue){
      state.colorCode = newValue
    }
  },
  actions: {
    increaseCounter({commit}){
      console.log('increaseCounter(action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
      commit('increaseCounter',response.data)
      })
    },
    decreaseCounter({commit}){
      console.log('decreaseCounter(action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
      commit('decreaseCounter',response.data)
      })
    },
    setColorCode({commit}, newValue){
      console.log('setColorCode(action)')
      axios('https://www.colr.org/json/color/random').then(response =>{
      commit('setColorCode',response.data.new_color)
      })
    }
  },
  getters: {
    counterSquared(state){
      return state.counter * state.counter
  }},
  modules: {
  }
})
