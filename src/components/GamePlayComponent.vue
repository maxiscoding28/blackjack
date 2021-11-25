<template lang="pug">
  #game-play-component.flex-center.full-width
    #game-controls-container.full-width.flex-center
        GameControlsComponent(
          :currentBankRoll="currentBankRoll"
          @click="setCurrentBet"
          :hitAddCard="hitAddCard"
        )
    //-   #current-bankroll-display
    //-     #current-bet Current Bet <span class="black-font">${{this.currentBet}}</span>
    //-     #total-bankroll Your current dollar total in chips is <span class="black-font">${{currentBankRoll}}.</span>
    //- #game-play-container.full-width.flex-center
    //-   #users-hand-container.flex-center.half-width.full-height
    //-     .user-label.flex-center Player
    //-     .current-score.flex-center {{this.getCurrentUserScore}}
    //-     .card-container.flex-center.full-width
    //-       .card.black-font.flex-center(v-for="card in this.usersHand" :key="card.key") {{card.value}}, {{card.suit}}
    //-         .card-content
    //-   #dealers-hand-container.flex-center.half-width.full-height
    //-     .dealer-label.flex-center Dealer
    //-     .current-score.flex-center {{this.getCurrentDealerScore}}
    //-     .card-container.flex-center.full-width
    //-       .card.black-font.flex-center(v-for="card in this.dealersHand" :key="card.key") 
    //-         .card-content(v-if="card.facedown") XX
    //-         .card-content(v-else) {{card.value}}, {{card.suit}}
</template>

<script>
import BetInputComponent from './BetInputComponent.vue'
import GameMessageDisplayComponent from './GameMessageDisplayComponent.vue'
import GameControlsComponent from './GameControlsComponent.vue'
import cardLogic from '../cardLogic';
export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number,
    setGameOver: Function
  },
  data() {
    return {
      currentBet: 0,
      betPlaced: false,
      initialCardsDealt: false,
      handOver: false,
      usersHand: [],
      dealersHand: [],
      deck: []
    }
  },
  computed: {
    getCurrentUserScore() {
      let values = []
      
      for (let i = 0; i < this.usersHand.length; i ++) {
        let value = this.usersHand[i].value;

        // if ace alert, pass separate value

        if (value === 'A') {
          let tempAceValue = ""

            while( tempAceValue != "1" && tempAceValue != "11" ) {
              // show cards on initial deal
             tempAceValue = prompt("Choose a Value for your Ace (1 or 11)");
          }

          value = tempAceValue;
        }
        
        values.push(value);
      }

      let score = cardLogic.computeScores(values);

      if (score > 21) {
        this.setGameOver(true);
      }

      return score;
    },
    getCurrentDealerScore() {
      let values = []

      for (let i = 0; i < this.dealersHand.length; i++) {
        let value = this.dealersHand[i].value;

        if (value == "A") {
          value = 11;
          // Need to update this. First ace is 11 unless causes dealer to bust. Subsequent Aces are 1
        }

        values.push(value);
      }

      // if (this.handOver) {
        return cardLogic.computeScores(values);
      // }

      // return "XX"
      
    } 
  },
  methods: {
    setCurrentBet(value) {
      this.currentBet = value;
      this.betPlaced = true;

      setTimeout(this.initialDealCards, 1200);
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
      this.initialCardsDealt = true;
    },
    hitAddCard() {
      let randomIndex = cardLogic.pickRandomCardIndex(this.deck.length, 1)[0];
      this.usersHand.push(this.deck.splice(randomIndex, 1)[0]);
    }
  },
  components:{
    BetInputComponent,
    GameMessageDisplayComponent,
    GameControlsComponent
  }
}
</script>

<style lang="scss">

#game-play-component {
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  #game-controls-container {
    flex-basis: 10%;
    background-color: #9D7E68;

    #controls {
      width: 200px;
    }

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
