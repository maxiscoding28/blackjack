<template lang="pug">
  #game-play-component.flex-center.full-width
    #game-controls-container.full-width.flex-center
      #controls.flex-center
        #bet-input-container
          BetInputComponent(
            :currentBankRoll="currentBankRoll"
            @click="setCurrentBet"
          )
      #game-message-display
        GameMessageDisplayComponent(
          :betPlaced="betPlaced"
        )
      #current-bankroll-display
        #current-bet Current Bet <span class="black-font">${{this.currentBet}}</span>
        #total-bankroll Your current dollar total in chips is <span class="black-font">${{currentBankRoll}}.</span>
    #game-play-container.full-width.flex-center
      #users-hand-container.flex-center.half-width.full-height
        .user-label.flex-center Player
        .current-score.flex-center 21
        .card-container.flex-center.full-width
          .card.black-font.flex-center(v-for="card in this.usersHand" :key="card.key") {{card.value}}, {{card.suit}}
            .card-content
      #dealers-hand-container.flex-center.half-width.full-height
        .dealer-label.flex-center Dealer
        .current-score.flex-center 21
        .card-container.flex-center.full-width
          .card.black-font.flex-center(v-for="card in this.dealersHand" :key="card.key") 
            .card-content(v-if="card.facedown") XX
            .card-content(v-else) {{card.value}}, {{card.suit}}
</template>

<script>
import BetInputComponent from './BetInputComponent.vue'
import GameMessageDisplayComponent from './GameMessageDisplayComponent.vue'
import cardLogic from '../cardLogic';
export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number
  },
  data() {
    return {
      currentBet: 0,
      betPlaced: false,
      usersHand: [],
      dealersHand: [],
      deck: []
    }
  },
  computed: {
    getCurrentUserScore() {
      return cardLogic.computeScores(this.usersHand);
    },
    getCurrentDealerScore() {
      return cardLogic.computeScores(this.dealersHand);
    } 
  },
  methods: {
    setCurrentBet(value) {
      this.currentBet = value;
      this.betPlaced = true;

      setTimeout(this.initialDealCards, 1200)
    },
    initialDealCards() {
      let randomIndexes = [];
      let dealerInitialHand = [];
      let userInitialHand = []

      this.deck = cardLogic.deckArray;
      randomIndexes = cardLogic.pickRandomCardIndex(this.deck.length, 2);
      
      for (let i = 0; i < 2; i++) {
        dealerInitialHand.push(this.deck.splice(randomIndexes[i], 1)[0]);
      }

      dealerInitialHand[1].facedown = true;

      this.dealersHand = dealerInitialHand;
      randomIndexes = cardLogic.pickRandomCardIndex(this.deck.length, 2);
      
      for (let i = 0; i < 2; i++) {
        userInitialHand.push(this.deck.splice(randomIndexes[i], 1)[0]);
      }
      this.usersHand = userInitialHand;
    }
  },
  components:{
    BetInputComponent,
    GameMessageDisplayComponent
  }
}
</script>

<style lang="scss">

#game-play-component {
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  #game-controls-container {
    justify-content: space-around;
    flex-basis: 10%;
    background-color: #9D7E68;

    #game-message-display {
      flex-basis: 300px;
    }
  }

  #game-play-container {
    justify-content: space-between;
    flex-basis: 90%;

    #users-hand-container,
    #dealers-hand-container {
      flex-direction: column;
      border-right: 1px solid black;

      .user-label,
      .dealer-label,
      .current-score {
        margin-top: 5px;
      }

      .card-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-grow: 1;
        padding: 10px;

        .card {
          height: 20%;
          flex-basis: 20%;
          border: 1px solid white;
          background: white;
          padding: 3px;
        }
      }
    }
  }
}
</style>
