<template>
  <div class="home">
    <button @click="newGame">New Game</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <EnemyHand />
    <PlayerHand />
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
    methods: {
      newGame() {
        this.$store.dispatch('newGame')
      }
    }
  }
</script>