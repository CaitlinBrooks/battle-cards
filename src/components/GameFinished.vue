<template>
  <div class="gameFinished">
    <div v-if="game.winner.id == game.players[0].id">
      <h2>Winner!</h2>
    </div>
    <div v-else="game.winner.id == game.players[1]" </div>
</template>