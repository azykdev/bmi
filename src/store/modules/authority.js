import AuthorityService from "@/services/authority"

const state =  {
  newTenderDialog: false,
  tenders: [],
  tender: null,
  error: null,
  loading: false,

  // TODO: Autority Viztory and Tenders
  vicTenders: [],
  vicTender: null,
}

const getters = {
  // Closed Tenders
  getClosedTenders(state) {
    return state?.tenders?.filter(tender => tender.closed === true)
  },
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
  },

  // TODO: Autority Viztory and Tenders

  // Get all tenders
  getVicTendersStart(state) {
    state.loading = true
    state.vicTenders = null
  },
  getVicTendersSuccess(state, tenders) {
    state.vicTenders = tenders
    state.loading = false
  },

  // Get tender
  getVicTenderStart(state) {
    state.loading = true
  },
  getVicTenderSuccess(state, tender) {
    state.vicTender = tender
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
  },


  // TODO: Autority Viztory and Tenders

  // Get vic tenders
  getVicTenders(context) {
    return new Promise((resolve) => {
      context.commit('getVicTendersStart')
      AuthorityService.getVicTenders()
        .then(res => {
          context.commit('getVicTendersSuccess', res.data)
          resolve(res)
        })
    })
  },

  // Get vic tender
  getVicTender(context, id) {
    return new Promise((resolve) => {
      context.commit('getVicTenderStart')
      AuthorityService.getVicTender(id)
        .then(res => {
          context.commit('getVicTenderSuccess', res.data)
          resolve(res)
        })
    })
  },

  // Create vic tender
  createVicTender(context, data) {
    return new Promise((resolve) => {
      AuthorityService.createVicTender(data)
        .then(res => {
          resolve(res)
        })
    })
  },

  // Update vic tender
  updateVicTender(context, data) {
    return new Promise((resolve) => {
      AuthorityService.updateVicTender(data)
        .then(res => {
          resolve(res)
        })
    })
  },

  // Delete vic tender
  deleteVicTender(context, id) {
    return new Promise((resolve) => {
      AuthorityService.deleteVicTender(id)
        .then(res => {
          resolve(res)
        })
    })
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
