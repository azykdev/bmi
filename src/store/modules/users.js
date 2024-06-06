import { removeItem, setItem } from "@/helpers/persistaneStorage";
import UserService from "@/services/users";

const state = {
  users: [],
  user: null,
  error: null,
  loading: false
};

const mutations = {
  getUsersStart(state) {
    state.loading = true
    state.users = null
  },
  getUsersSuccess(state, users) {
    state.users = users
    state.loading = false
  },
  getUserStart(state) {
    state.loading = true
    state.user = null
  },
  getUserSuccess(state, user) {
    state.user = user
    state.loading = false
  },

  logout(state) {
    state.user = null
    removeItem('user_id')
  }
};

const actions = {
  // Get all users
  getUsers(context) {
    return new Promise((resolve) => {
      context.commit('getUsersStart')
      UserService.getUsers()
        .then(res => {
          context.commit('getUsersSuccess', res.data)
          resolve(res)
        })
    })
  },

  // Get user
  getUser(context, id) {
    return new Promise((resolve) => {
      context.commit('getUserStart')
      UserService.getUser(id)
        .then(res => {
          context.commit('getUserSuccess', res.data)
          resolve(res)
        })
    })
  },

  // Create new user
  createUser(context, data) {
    return new Promise((resolve) => {
      UserService.createUser(data)
        .then(res => {
          setItem('user_id', res.data.id)
          resolve(res)
        })
    })
  },

  // Update user
  updateUser(context, data) {
    return new Promise((resolve) => {
      UserService.updateUser(data)
        .then(res => {
          resolve(res)
        })
    })
  },

  // Delete user
  deleteUser(context, id) {
    return new Promise((resolve) => {
      UserService.deleteUser(id)
        .then(res => {
          resolve(res)
        })
    })
  },

  
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
