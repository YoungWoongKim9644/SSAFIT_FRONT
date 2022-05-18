import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User : [],
    Video : [],
    Follow : []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    Login({commit}, payload){
        console.log("온다.")
        console.log(payload.id)
    }
  },
  modules: {
  }
})
