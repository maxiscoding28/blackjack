<template lang="pug">
    #bet-input-component
        input(
            :disabled="currentGamePlayState!=gameplayStateEnumObject.PLACE_BET"
            placeholder="Place Bet Here"
            v-model="betInputValue"
        )
        button(
            :disabled="currentGamePlayState!=gameplayStateEnumObject.PLACE_BET"
            @click="validateBetInput"
        ) Submit
</template>
<script>
export default {
    data() {
        return {
            betInputValue: ""
        }
    },
    props: {
        currentGamePlayState: String,
        gameplayStateEnumObject: Object,
        currentBankRoll: Number,
        placeBet: Function,
    },
    methods: {
        validateBetInput() {
            if (isNaN(this.betInputValue) || this.betInputValue % 1 !== 0) {
                alert("Value must be a whole number.")
                return
            }
            // if (this.betInputValue > this.currentBankRoll) {
            //     alert(`You only have ${this.currentBankRoll} to bet.`)
            //     return
            // }

            this.placeBet(parseInt(this.betInputValue));
        }
    }
}
</script>
<style lang="scss">
</style>