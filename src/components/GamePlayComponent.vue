<template lang="pug">
  #game-play-component.flex-center.full-page
    #game-board-container.flex-center.full-page Game Board
    #game-controls-container.flex-center.full-page
      .currentroll Current Roll
      .hitstay Hit/Stay
      .gamemessage Game Message
      .betinput Bet Input
      .fullpot Total Pot
</template>

<script>
export default {
  
  name: 'GamePlayComponent',
  props: {
    currentBankRoll: Number,
    setGameOver: Function
  },
}
</script>

<style lang="scss">
#game-play-component {
  flex-direction: column;

  #game-controls-container {
    height: 110px;
    justify-content: space-between;
    background-color: #966F33;
  }
}
</style>
