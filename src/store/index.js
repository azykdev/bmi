import { createStore } from 'vuex'
import home from './modules/home'
import auth from './modules/auth'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {home, auth}
})



