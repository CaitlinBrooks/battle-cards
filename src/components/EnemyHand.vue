<template>
  <div class="Home">
    <h1>ENEMY HAND</h1>
    {{opponent.name}}
  </div>
</template>

<script>
  export default {
    name: 'EnemyHand',
    props: {

    },
    data() {
      return {

      }
    },
    computed: {
      opponent() {
        if (this.$store.state.game.id) {
          return this.$store.state.game.opponents[1]
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