<template lang="pug">
    #game-message-component.flex-center.full-page
        #player-score Player's Score {{playerScore}}
        #current-game-message(v-if="currentGamePlayState==gameplayStateEnumObject.PLACE_BET") Place Initial Bet
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.PLAYER_HAND") Player's Hand
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.DEALER_HAND") Dealer's Hand
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.PAYOUT") Payout
        #current-game-message(v-else-if="currentGamePlayState==gameplayStateEnumObject.HAND_OVER") Hand Over
        #dealer-score(v-if="!boolShowDealerScore") Dealer's Score {{dealerScore}}
        #dealer-score(v-else) Dealer's Score XX
</template>
<script>
export default {
    props: {
        currentGamePlayState: String,
        gameplayStateEnumObject: Object,
        playerScore: Number,
        dealerScore: Number,
    },
    computed: {
        boolShowDealerScore() {
            return this.currentGamePlayState==this.gameplayStateEnumObject.PLACE_BET || 
            this.currentGamePlayState==this.gameplayStateEnumObject.PLAYER_HAND
        }
    }
}
</script>
<style lang="scss">
#game-message-component {
    justify-content: space-around;
}
</style>