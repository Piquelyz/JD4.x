import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    //设置 vuex 的 token
    settoken(state, token) {
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {

  }
})
