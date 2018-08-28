<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PlayerHand />
    <EnemyHand />
  </div>
</template>

<script>
  // @ is an alias to /src
  import PlayerHand from '@/components/PlayerHand.vue'
  import EnemyHand from '@/components/EnemyHand.vue'

  export default {
    name: 'home',
    components: {
      PlayerHand
    }
  }
</script>