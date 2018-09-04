<template>
  <div class="Home">
    <h1>ENEMY HAND</h1>
    {{opponent.name}}
    <div class="row">
      <!-- utilize the flip card function here? @click? Maybe an if else statement? -->
      <div class="col-2" v-for="card in opponent.hand" @click="attackInfo(opponent.id, card.id)">
        {{card.name}} Health: {{card.health}} Attack: {{card.attack}} Defense: {{card.defense}}
        <img :src="card.img" width="100" height="100">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EnemyHand',
    props: {
      attackInfo: {
        type: Function, required: true
      }
    },
    data() {
      return {

      }
    },
    computed: {
      opponent() {
        if (this.$store.state.game.id) {
          return this.$store.state.game.players[1]
        }
        return {}
      },
      enemyActiveCard() {
        return this.$store.state.enemyCard
      }
    },
    methods: {
      flipEnemyCard(playerCard) {
        this.$store.dispatch('changeEnemyCard', enemyCard)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>