<template lang="pug">
  #app
   .start-game-container
   .initial-bet-container
   .gameplay-container
</template>

<script>
import StartGameComponent from './components/StartGameComponent.vue'
import InitialBetComponent from './components/InitialBetComponent.vue'
import GamePlayComponent from './components/GamePlayComponent.vue'

export default {
  name: 'App',
  components: {
    StartGameComponent,
    InitialBetComponent,
    GamePlayComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
