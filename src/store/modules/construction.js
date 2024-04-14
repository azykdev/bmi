import { setItem } from "@/helpers/persistaneStorage"
import ConstructionService from "@/services/construction"

const state = {
  tenderDialog: false,
  constructionCompanies: null,
  constructionCompany: null,
  isLoggedIn: null
}

const mutations = {
  setTenderDialog(state, value) {
    state.tenderDialog = value
  },
  
  // Get all construction companies
  getConCompaniesStart(state) {
    state.constructionCompanies = null
  },
  getConCompaniesSuccess(state, payload) {
    state.constructionCompanies = payload
  },

  // Get construction company
  getConCompanyStart(state) {
    state.constructionCompany = null,
    state.isLoggedIn = null
  },
  getConCompanySuccess(state, payload) {
    state.constructionCompany = payload,
    state.isLoggedIn = true
  },

}

const actions = {
  // Get all construction companies
  getConstructionCompanies(context) {
    return new Promise((resolve, reject) => {
      context.commit('getConCompaniesStart')
      ConstructionService.getConstructionCompanies()
        .then(res => {
          context.commit('getConCompaniesSuccess', res.data)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // Get construction company
  getConstructionCompany(context, id) {
    return new Promise((resolve, reject) => {
      context.commit('getConCompanyStart')
      ConstructionService.getConstructionCompany(id)
        .then(res => {
          context.commit('getConCompanySuccess', res.data)
          setItem('id', res.data.id)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
