<template lang="pug">
  #game-play-component.flex-center.full-page
    #game-board-container.flex-center.full-page
      GameBoardComponent
    #game-message-container.flex-center.full-page
      GameMessageComponent(
        :currentGamePlayState="currentGamePlayState"
        :gameplayStateEnumObject="GAMEPLAY_STATE"
      )
    #game-controls-container.flex-center.full-page
      #bet-input-container
        BetInputComponent(
          :currentGamePlayState="currentGamePlayState"
          :gameplayStateEnumObject="GAMEPLAY_STATE"
          :currentBankRoll="currentBankRoll"
          :placeBet="placeBet"
        )
      #hit-stay-container
        HitStayComponent(
          :currentGamePlayState="currentGamePlayState"
          :gameplayStateEnumObject="GAMEPLAY_STATE"
        )
      #current-pot-container
        CurrentPotComponent(:currentPot="currentPot")
      #current-bankroll-container.flex-center 
        CurrentBankRollComponent(:currentBankRoll="currentBankRoll")
 
</template>

<script>
import CurrentBankRollComponent from './CurrentBankRollComponent.vue';
import HitStayComponent from './HitStayComponent.vue';
import GameMessageComponent from './GameMessageComponent.vue';
import BetInputComponent from './BetInputComponent.vue';
import CurrentPotComponent from './CurrentPotComponent.vue';
import GameBoardComponent from './GameBoardComponent.vue';
export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number,
    setGameOver: Function
  },
  data() {
    return {
      currentGamePlayState: "PLACE_BET",
      GAMEPLAY_STATE: {
        PLACE_BET: "PLACE_BET",
        PLAYER_HAND: "PLAYER_HAND",
        DEALER_HAND: "DEALER_HAND",
        PAYOUT: "PAYOUT",
        HAND_OVER: "HAND_OVER"
      },
      currentPot: 0,
    }
  },
  methods: {
    placeBet(betValue) {
      this.currentPot = betValue;
      this.currentGamePlayState = this.GAMEPLAY_STATE.PLAYER_HAND;
    }
  },
  components: {
    CurrentBankRollComponent,
    HitStayComponent,
    GameMessageComponent,
    BetInputComponent,
    CurrentPotComponent,
    GameBoardComponent,
  }
}
</script>

<style lang="scss">
#game-play-component {
  flex-direction: column;

  #game-message-container {
    height: 50px;
    background: #deb887;
    color: black;
    font-weight: bold;
  }

  #game-controls-container {
    height: 100px;
    justify-content: space-around;
    background-color: #966F33;
  }
}
</style>
