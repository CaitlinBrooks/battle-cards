<template>
  <div class="home">
    <button type=button class="btn btn-primary" @click="newGame">New Game</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <EnemyHand :attackInfo="setEnemyCard" />
    <button type="button" class="btn btn-success" @click="sendAttack">Battle</button>
    <PlayerHand :attackInfo="setPlayerCard" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import EnemyHand from '@/components/EnemyHand.vue'
  import PlayerHand from '@/components/PlayerHand.vue'

  export default {
    name: 'home',
    components: {
      PlayerHand,
      EnemyHand
    },
    data() {
      return {
        attack: {
          playerId: '',
          playerCardId: '',
          opponentId: '',
          opponentCardId: ''
        }
      }
    },
    methods: {
      newGame() {
        this.$store.dispatch('newGame')
      },
      setPlayerCard(pId, pcId) {
        this.attack.playerId = pId
        this.attack.playerCardId = pcId
      },
      setEnemyCard(oId, ocId) {
        this.attack.opponentId = oId
        this.attack.opponentCardId = ocId
      },
      sendAttack() {
        this.$store.dispatch('attack', this.attack)
      }
      //   getCards() {
      //     this.$store.dispatch('getCards')
      // }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    player() {

    }
  }
</script>