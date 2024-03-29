
const state =  {
  dialog: false,
}

const mutations = {

  setDialog(state, payload) {
    state.dialog = payload
  }

}

const actions = {}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
