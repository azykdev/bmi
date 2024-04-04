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
    state.tender = value === false ? null : state.tender
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

  // Get tender
  getTenderStart(state) {
    state.loading = true
  },
  getTenderSuccess(state, tender) {
    state.tender = tender
    state.loading = false
  }
}

const actions = {
  // Get all tenders
  getTenders(context) {
    return new Promise((resolve, reject) => {
      context.commit('getTendersStart')
      AuthorityService.getTenders()
        .then(res => {
          context.commit('getTendersSuccess', res.data)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // Get tender
  getTender(context, id) {
    return new Promise((resolve, reject) => {
      context.commit('getTenderStart')
      AuthorityService.getTender(id)
        .then(res => {
          context.commit('getTenderSuccess', res.data)
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
  },

  // Update tender
  updateTender(context, data) {
    return new Promise((resolve, reject) => {
      AuthorityService.updateTender(data)
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // Delete tender
  deleteTender(context, id) {
    return new Promise((resolve, reject) => {
      AuthorityService.deleteTender(id)
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
