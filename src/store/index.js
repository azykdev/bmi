import { createStore } from 'vuex'
import home from './modules/home'
import auth from './modules/auth'
import authority from './modules/authority'
import construction from './modules/construction'
import users from './modules/users'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {home, auth, authority, construction, users},
})



