<template lang="pug">
  #game-play-component.flex-center.full-width
    #game-controls-container.full-width.flex-center
      #controls.flex-center
        #bet-input-container
          BetInputComponent(
            :currentBankRoll="currentBankRoll"
            @click="setCurrentBet"
          )
      #game-message-display.black-font How much would you like to bet this hand?
      #current-bankroll-display
        #current-bet Current Bet <span class="black-font">${{this.currentBet}}</span>
        #total-bankroll Your current dollar total in chips is <span class="black-font">${{currentBankRoll}}.</span>
    #game-play-container.full-width.flex-center
      #users-hand-container.flex-center.half-width.full-height
        .user-label.flex-center Player
        .current-score.flex-center 21
        .card-container.flex-center
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
      #dealers-hand-container.flex-center.half-width.full-height
        .dealer-label.flex-center Dealer
        .current-score.flex-center 21
        .card-container.flex-center
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
          .card.flex-center Card
</template>

<script>
import BetInputComponent from './BetInputComponent.vue'

export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number
  },
  data() {
    return {
      currentBet: 0
    }
  },
  methods: {
    setCurrentBet(value) {
      this.currentBet = value
    }
  },
  components:{
    BetInputComponent
  }
}
</script>

<style lang="scss">
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

#game-play-component {
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  #game-controls-container {
    justify-content: space-around;
    flex-basis: 10%;
    background-color: #9D7E68;
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
        justify-content: space-between;
        padding: 0 10px;
        flex-wrap: wrap;
        flex-grow: 1;


        .card {
          height:  20%;
          flex-basis: 20%;
          border: 1px solid white;
          background: white;
          color: black;
        }
      }
    }
  }
}
</style>
