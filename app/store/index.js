import Vuex from 'vuex'
import moduleLocation from './location/index'

const createStore = () => {
  return new Vuex.Store({
    state: {
      formReportActive: false
    },
    mutations: {
      active (state) {
        state.formReportActive = false
      },
      inactive (state) {
        state.formReportActive = true
      }
    },
    modules: {
      location: moduleLocation
    }
  })
}

export default createStore
