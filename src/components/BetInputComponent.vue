<template lang="pug">
#bet-input-component
    input(
        autocomplete="off" 
        placeholder="Place Bet" 
        v-model="currentBetInput"
    )
    button(@click="validateInput") Submit
</template>

<script>
export default {
name: 'BetInputComponent',
    props: {
        currentBankRoll: Number
    },
    methods: {
        validateInput() {
            let response = this.currentBetInput

            if (isNaN(response)) {
                alert("Your best must be a number value.")
                return;
            }
            
            if (response > this.currentBankRoll) {
                alert(`Invalid response.\nYour bet cannot exceed the dollar amount of gambling chips you have.\nPlace a bet in an amount less than or equal to your current amount of ${this.currentBankRoll}`)
                return;
            }
            
            this.currentBetInput = ''
            response = parseInt(response)
            this.$emit('click', response)


        }
    },
    data() {
        return {
            currentBetInput: '',
        }
  },
}
</script>
<style lang="scss">
</style>
