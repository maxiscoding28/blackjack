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

            if(response == "") {
                return;
            }

            if (isNaN(response)) {
                alert("Your bet must be a number value.")
                return;
            }

            if (response < 0) {
                alert("Must be a non-negative number.");
                return;
            }

            if (response % 1) {
                alert("Must be a whole number");
                return;
            }
            
            if (response > this.currentBankRoll) {
                alert(`Your bet cannot exceed the dollar amount of gambling chips you have.\nPlace a bet in an amount less than or equal to your current amount of ${this.currentBankRoll}`)
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
