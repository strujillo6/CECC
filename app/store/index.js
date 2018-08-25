import Vuex from 'vuex'
import moduleLocation from './location/index'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      decrement (state) {
        state.counter--
      }
    },
    modules: {
      location: moduleLocation
    }
  })
}

export default createStore
