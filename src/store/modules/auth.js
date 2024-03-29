
const state =  {
  accountType: null,
}

const mutations = {

  setAccountType(state, value) {
    state.accountType = value
  },
}

const actions = {}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
