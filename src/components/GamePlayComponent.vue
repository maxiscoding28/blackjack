<template lang="pug">
  #game-play-component.flex-center.full-width
    #game-controls-container.full-width.flex-center
      #controls.flex-center.half-width Hit/Stay/BetInput/Controls
      #game-message.flex-center.half-width Your current dollar total in chips is {{currentBankRoll}}. How much would you like to bet this hand?
    #game-play-container.full-width.flex-center
      #users-hand-container.flex-center.half-width Dealer
      #dealers-hand-container.flex-center.half-width Player
</template>

<script>


export default {
  name: 'GamePlayComponent',
  props: ['currentBankRoll']
}
</script>

<style lang="scss">
.full-width {
  width: 100%;
}

.half-width {
  width: 50%;
}

#game-play-component {
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  #game-controls-container {
    justify-content: space-between;
    flex-basis: 10%;
    background-color: #9D7E68;
  }

  #game-play-container {
    justify-content: space-between;
    flex-basis: 90%;
  }
}
</style>
