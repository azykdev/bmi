import AuthorityService from "@/services/authority"

const state =  {
  newTenderDialog: false,
  tenders: [],
  tender: null,
  error: null,
  loading: false
}

const mutations = {
  // Set new tender dialog
  setNewTenderDialog(state, value) {
    state.newTenderDialog = value
  },

  // Get all tenders
  getTendersStart(state) {
    state.loading = true
    state.tenders = null
  },

  getTendersSuccess(state, tenders) {
    
    state.tenders = tenders
    state.loading = false
  },
}

const actions = {
  // Get all tenders
  getTenders(context) {
    return new Promise((resolve, reject) => {
      context.commit('getTendersStart')
      AuthorityService.getTenders()
        .then(res => {
          context.commit('getTendersSuccess', res.data)
          console.log(res);
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // Create new tender
  createTender(context, data) {
    return new Promise((resolve, reject) => {
      AuthorityService.createTender(data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
