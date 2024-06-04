
const state =  {
  accountType: null,
}

const mutations = {

  setAccountType(state, value) {
    state.accountType = value
  },
}


export default {
  namespaced: true,
  state,
  mutations,
}
