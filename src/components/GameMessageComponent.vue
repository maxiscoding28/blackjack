<template lang="pug">
    #game-message-component
        #current-game-message(v-if="currentGamePlayState==gameplayStateEnumObject.PLACE_BET") Place Initial Bet
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.PLAYER_HAND") Player's Hand
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.DEALER_HAND") Dealer's Hand
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.PAYOUT") Payout
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.HAND_OVER") Hand Over
</template>
<script>
export default {
    props: {
        currentGamePlayState: String,
        gameplayStateEnumObject: Object,
    }
}
</script>
<style lang="scss">
</style>