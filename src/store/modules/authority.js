import AuthorityService from "@/services/authority"

const state =  {
  newTenderDialog: false,
}

const mutations = {

  setNewTenderDialog(state, value) {
    state.newTenderDialog = value
  },
}

const actions = {
  createNewTender(context, data) {
    return new Promise((resolve, reject) => {
      AuthorityService.createNewTender(data)
        .then(res => {
          resolve(res)
          console.log(res);
          alert("Tender created successfully")
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
