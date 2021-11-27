<template lang="pug">
  #game-play-component.flex-center.full-page
    #game-board-container.flex-center.full-page
      GameBoardComponent(
        :playersHand="playersHand"
        :dealersHand="dealersHand"
      )
    #game-message-container.flex-center.full-page
      GameMessageComponent(
        :currentGamePlayState="currentGamePlayState"
        :gameplayStateEnumObject="GAMEPLAY_STATE"
        :playerScore="playerScore"
        :dealerScore="dealerScore"
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
          :playerHitCard="playerHitCard"
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
import cardLogic from '../cardLogic.js'
export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number,
    setGameOver: Function,
    updateBankRoll: Function,
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
      deckArray: [],
      playersHand: [],
      dealersHand: [],
      playerScore: 0,
      dealerScore: 0,
    }
  },
  methods: {
    placeBet(betValue) {
      this.currentPot = betValue;
      this.updateBankRoll(-betValue);
      this.initialDealCards();
    },
    initialDealCards () {
      this.deckArray = cardLogic.deckArray;
      let randomIndexArray = cardLogic.pickRandomCardIndex(this.deckArray.length, 2);
      let updatedPlayerHand = [];
      let updatedDealerHand = [];

      for (let i = 0; i < randomIndexArray.length; i++) {
        updatedPlayerHand.push(this.deckArray.splice(randomIndexArray[i], 1)[0]);
      }
      
      for (let i = 0; i < randomIndexArray.length; i++) {
        updatedDealerHand.push(this.deckArray.splice(randomIndexArray[i], 1)[0]);
        updatedDealerHand[0].facedown = true;
      }

      this.playersHand = updatedPlayerHand;
      this.dealersHand = updatedDealerHand;

      this.setInitialScore()
    },
    setInitialScore() {
      let playerScore = 0;
      let dealerScore = 0;

      for (let i = 0; i < this.playersHand.length; i++) {
        if (this.playersHand[i].value === "A") {
          let aceInputValue = prompt("Ace! 11 or 1?", "11");

          while (aceInputValue !== "11" && aceInputValue !== "1") {
            aceInputValue = prompt("Ace! 11 or 1?", "11");
          }

          if (aceInputValue == "1") {
            this.playersHand[i].scoreValue = 1;
          }
        }

        playerScore += this.playersHand[i].scoreValue;
      }

      for (let i = 0; i < this.dealersHand.length; i++) {
        dealerScore += this.dealersHand[i].scoreValue;
      }

      this.playerScore = playerScore;
      this.dealerScore = dealerScore;
      this.currentGamePlayState = this.GAMEPLAY_STATE.PLAYER_HAND;
    },
    playerHitCard() {
      let randomIndexArray = cardLogic.pickRandomCardIndex(this.deckArray.length, 1);
      let updatedPlayerHand = this.playersHand.slice();

      updatedPlayerHand.push(this.deckArray.splice(randomIndexArray[0], 1)[0]);

      this.playersHand = updatedPlayerHand;

      this.playerEvalScore()
    },
    playerEvalScore() {
      let playerScore = this.playerScore;
      
      if (this.playersHand[this.playersHand.length-1].value === "A") {
        let aceInputValue = prompt("Ace! 11 or 1?", "11");

        while (aceInputValue !== "11" && aceInputValue !== "1") {
          aceInputValue = prompt("Ace! 11 or 1?", "11");
        }

        if (aceInputValue == "1") {
          this.playersHand[this.playersHand.length-1].scoreValue = 1;
        }
      }

      playerScore += this.playersHand[this.playersHand.length-1].scoreValue;

      this.playerScore = playerScore;

      if (this.playerScore > 21) {
        this.currentGamePlayState = this.GAMEPLAY_STATE.PAYOUT;
        setTimeout(() => {
          alert("Player Busts!");
        }, 1200);
        
      }
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
