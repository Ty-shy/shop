import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import {state,mutations,getters} from "./mutations"

import actions from "./actions"

import menu from "./modules/menu"
import role from "./modules/role"
import manage from "./modules/manage"
import cate from "./modules/cate"
import speci from "./modules/speci"
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    menu,
    role,
    manage,
    cate,
    speci,
  }
})
