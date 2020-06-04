import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    set_login (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
