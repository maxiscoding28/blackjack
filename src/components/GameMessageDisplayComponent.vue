<template lang="pug">
  #game-message-display-component {{this.getCurretGameMessage()}}
</template>

<script>
export default {
    name: "GameMessageDisplayComponent",
    props: {
        betPlaced: Boolean
    },
    methods: {
        getCurretGameMessage() {
            if (this.betPlaced == false) {
                return 'How much would you like to bet this hand?';
            }
            else if (this.betPlaced == true) {
                return 'Bet Placed!'
            }
        }
    }

}
</script>

<style lang="scss">

</style>