<template lang="pug">
  #app
   #start-game-container.flex-center.full-page(v-if="!this.gameStarted")
    StartGameComponent(@click="setGameStarted")
   #initial-bet-container.flex-center.full-page(v-else-if="!this.initialBuyInSet")
    InitialBuyInComponent(@click="setInitialBuyIn")
   #gameplay-container.flex-center.full-page(v-else)
    GamePlayComponent(
      :currentBankRoll="this.currentBankRoll"
    )
</template>

<script>
import StartGameComponent from './components/StartGameComponent.vue'
import InitialBuyInComponent from './components/InitialBuyInComponent.vue'
import GamePlayComponent from './components/GamePlayComponent.vue'

export default {
  name: 'App',
  methods: {
    setGameStarted(boolean) {
      this.gameStarted = boolean;
    },
    setInitialBuyIn(boolean, amount) {
      this.initialBuyInSet = boolean;
      this.currentBankRoll = amount;
    },
    setGameOver(boolean) {
      this.gameOver = boolean;
    }
  },
  data(){
    return {
      gameStarted: true,
      gameOver: false,
      initialBuyInSet: true,
      currentBankRoll: 200
    }
  },
  components: {
    StartGameComponent,
    InitialBuyInComponent,
    GamePlayComponent
  }
}
</script>

<style lang="scss">

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-page {
  height: 100%;
}

.full-width {
  width: 100%;
}

.half-width {
  width: 50%;
}

.full-height {
  height: 100%;
}

.black-font {
  color: black;
  font-weight: bold
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #35654d;
  color: white;
}
</style>
