import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from './router'

Vue.use(Vuex)

let battleApi = axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    // players: [],
    playerCard: {},
    // enemies: [],
    enemyCard: {},
    game: {}
  },


  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
    },
    setEnemyCard(state, enemyCard) {
      state.enemyCard = enemyCard
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
    getGame({ commit, dispatch }, gameId) {
      battleApi.get('/' + gameId).then(res => {
        console.log('game came back', res)
        commit('setGame', res.data.data)
      })
    },
    flipPlayerCard({ commit, dispatch }, playerCard) {
      commit('setPlayerCard', playerCard)
    },
    flipEnemyCard({ commit, dispatch }, enemyCard) {
      commit('setEnemyCard', enemyCard)
    },
  }
})
