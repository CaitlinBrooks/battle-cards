import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let battleApi = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    players: [],
    player: {},
    enemies: [],
    enemy: {},
    game: {}
  },
  mutations: {
    setGame(state, data) {
      state.game = data
    }
  },
  actions: {
    newGame({ commit, dispatch }) {
      battleApi.post('').then(res => {
        console.log('it works', res)
        commit('setGame', res.data)
      })
    }

    //   search({ commit, dispatch ), newGame) {
    //     battleApi.get(newGame)
    //     .then(res => {
    //       commit('setGame', res.data.results)
    //     })
    //   }
  }
})
