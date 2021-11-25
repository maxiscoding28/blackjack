<template lang="pug">
  #game-controls-component.flex-center
    #left-side-container.flex-center
        #bet-input-container(v-if="!this.betPlaced")
            BetInputComponent(
                :currentBankRoll="currentBankRoll"
                @click="setCurrentBet"
            )
        #hit-stay-container
            button(@click="hitAddCard").hit-button Hit
            button.stay-button Stay
    #game-message-display
        GameMessageDisplayComponent(
            :betPlaced="betPlaced"
            :initialCardsDealt="initialCardsDealt"
        )
</template>

<script>
import BetInputComponent from './BetInputComponent.vue';
import GameMessageDisplayComponent from './GameMessageDisplayComponent.vue';
export default {
    name: "GameControlsComponent",
    props: {
        currentBankRoll: Number,
        setCurrentBet: Function,
        hitAddCard: Function,
        betPlaced: Boolean,
        initialCardsDealt: Boolean,
    },
    components: {
        BetInputComponent,
        GameMessageDisplayComponent,
    }
}
</script>

<style lang="scss">
    #game-controls-component {
        width:100%;
        justify-content: space-between;

        #left-side-container {
            #bet-input-container,
            #hit-stay-container {
                padding: 0 15px;
            }

            #hit-stay-container {
                .hit-button,
                .stay-button {
                    width: 75px;
                    height: 50px;
                    margin: 5px;
                }
            }
            
        }

    }
</style>