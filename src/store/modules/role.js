import {
  requestRoleList
} from "../../util/request";
const state = {
  list: []
}
const mutations = {
  //修改
  changeList(state, arr) {
    state.list = arr
  }
}
const actions = {
  requestList(context) {
    requestRoleList().then(res => {
      context.commit("changeList", res.data.list)
    })
  }
}
const getters = {
  list() {
    return state.list
  }

}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
