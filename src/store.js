import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

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
    newGame({ commit }) {
      battleApi.post('').then(res => {
        console.log('it works', res)
        commit('setGame', res.data)
      })
    },
    attack({ commit, dispatch, state }, attackInfo) {
      battleApi.put('/' + state.game.id, attackInfo).then(res => {
        console.log('attack came back', res)
        dispatch('getGame', state.game.id)
      })
    },
    getGame({ commit, state }) {
      battleApi.get('/' + state.game.id).then(res => {
        console.log('game came back', res)
        commit('getGame', state.game.id)
      })
      // getCards({ commit, dispatch }) {
      //   battleApi.post('').then(res => {
      //     console.log('it works', res)
      //     commit('getCards', res.data)
      //   })
      // }
    },
    //   search({ commit, dispatch ), newGame) {
    //     battleApi.get(newGame)
    //     .then(res => {
    //       commit('setGame', res.data.results)
    //     })
    //   }
  }
})
