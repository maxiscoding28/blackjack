<template lang="pug">
  #start-game-component
    #welcome-message Welcome To Blackjack!
    button#start-game(@click="this.startGame") Click Here To Play!


</template>

<script>


export default {
  name: 'StartGameComponent',
  methods: {
    startGame() {
      this.$emit('click', true);
    }
  }
}
</script>

<style lang="scss">
#start-game {
  margin-top: 10px;
}
</style>
