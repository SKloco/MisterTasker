import { createStore } from 'vuex'
import taskModules from './modules/task-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
  },
  actions: {},
  modules: {
    taskModules,
  },
})

export default store
