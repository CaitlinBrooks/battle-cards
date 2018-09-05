<template>
  <div class="gameFinished">
    <div v-if="game.winner.id == game.players[0].id">
      <h2>Winner!</h2>
    </div>
    <div v-else-if="game.winner.id">
      <h2>You Lose!</h2>
    </div>
    <div v-else>
      <h2>Battle Cats Tied!</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gameFinished",
    computed: {
      game() {
        return this.$store.state.game;
      }
    }
  }
</script>