<template lang="pug">
  #game-message-display-component {{this.getCurretGameMessage()}}
</template>

<script>
export default {
    name: "GameMessageDisplayComponent",
    props: {
        betPlaced: Boolean,
        initialCardsDealt: Boolean,
    },
    methods: {
        getCurretGameMessage() {
            if (this.betPlaced == true && this.initialCardsDealt == true) {
                return "Let's Play!"
            }

            if (this.betPlaced == true) {
                return 'Bet Placed! Dealing cards...'
            }

            if (this.betPlaced == false) {
                return 'How much would you like to bet this hand?';
            }
            

        }
    }

}
</script>

<style lang="scss">

</style>