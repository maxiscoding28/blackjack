<template lang="pug">
  #app
    #start-game-container.flex-center.full-page(v-if="currentGameState==GAME_STATE.GAME_NOT_STARTED")
      StartGameComponent(@click="setGameStarted")
    #initial-bet-container.flex-center.full-page(v-else-if="currentGameState==GAME_STATE.SET_INITIAL_BUY_IN")
      InitialBuyInComponent(@click="setInitialBuyIn")
    #gameplay-container.flex-center.full-page(v-else-if="currentGameState==GAME_STATE.GAME_STARTED")
      GamePlayComponent(
        :currentBankRoll="currentBankRoll"
        :updateBankRoll="updateBankRoll"
      )
</template>

<script>
import StartGameComponent from './components/StartGameComponent.vue'
import InitialBuyInComponent from './components/InitialBuyInComponent.vue'
import GamePlayComponent from './components/GamePlayComponent.vue'

export default {
  name: 'App',
  methods: {
    setGameStarted() {
      this.currentGameState = "SET_INITIAL_BUY_IN";
    },
    setInitialBuyIn(amount) {
      this.currentBankRoll = amount;
      this.currentGameState = "GAME_STARTED";
    },
    updateBankRoll(amount) {
      this.currentBankRoll = this.currentBankRoll + amount;
    }
  },
  data(){
    return {
      currentGameState: "GAME_STARTED",
      GAME_STATE: {
          GAME_NOT_STARTED: "GAME_NOT_STARTED",
          SET_INITIAL_BUY_IN: "SET_INITIAL_BUY_IN",
          GAME_STARTED: "GAME_STARTED",
          GAME_OVER: "GAME_OVER"
      },
      currentBankRoll: 100
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
  width: 100%;
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
