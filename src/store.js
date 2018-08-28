import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let battleApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    games: []
  },
  mutations: {
    setGames(state, data) {
      state.games = data
    }
  },
  actions: {
    //   search({ commit, dispatch ), newGame) {
    //     battleApi.get(newGame)
    //     .then(res => {
    //       commit('setGame', res.data.results)
    //     })
    //   }
  }
})
