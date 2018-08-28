<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PlayerHand />
    <EnemyHand />
    <Game />
  </div>
</template>

<script>
  // @ is an alias to /src
  import PlayerHand from '@/components/PlayerHand.vue'
  import EnemyHand from '@/components/EnemyHand.vue'
  import Game from '@/components/Game.vue'

  export default {
    name: 'home',
    components: {
      PlayerHand,
      EnemyHand,
      Game
    }
  }
</script>