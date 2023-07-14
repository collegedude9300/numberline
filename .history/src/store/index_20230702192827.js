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
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response =>{
        console.log ('response', response)
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
