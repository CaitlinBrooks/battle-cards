<template>
  <div class="Home">
    <h1>PLAYER HAND</h1>
    {{player.name}}
    <div class="row">

      <div class="col-4" v-for="card in player.hand" @click="func(player.id, card.id)">
        {{card.name}}
        <img :src="card.img">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayerHand',
    props: {
      func: {
        type: Function, required: true
      }
    },
    data() {
      return {

      }
    },
    computed: {
      player() {
        if (this.$store.state.game.id) {
          return this.$store.state.game.players[0]
        }
        return {}
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