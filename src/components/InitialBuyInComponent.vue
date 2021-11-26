<template lang="pug">
#inital-buy-in-component
    #initial-bet-message How much money would you like to exchange for chips?<br/><br/>The maximum buy in is {{this.MAX_BUY_IN}}.<br/><br/>The minimum gambling chip is {{this.MINIMUM_BUY_IN}}<br/><br/>Chips cannot be bought in smaller increments.
    input#input-buy-in(autocomplete="off" v-model="initialBuyInInput" placeholder="Place your buy in here!")
    button(@click="validateInitialBuyIn") Submit
</template>

<script>


export default {
  name: 'InitialBuyInComponent',
  methods: {
    validateInitialBuyIn(){
      let response = this.initialBuyInInput

      if (response < 0 || response % 5 !== 0 || response > this.MAX_BUY_IN ) {
        alert(`Invalid response.\nEnter in a buy in of ${this.MAX_BUY_IN} or less.\nA buy in must also be in ${this.MINIMUM_BUY_IN} chip increments`)
        this.initialBuyInInput = ""
        return
      }

      response = parseInt(response)
      this.$emit('click', response);
    }
  },
  data() {
    return {
      initialBuyInInput: '',
      MAX_BUY_IN: 500,
      MINIMUM_BUY_IN: 5,
    }
  }
}
</script>

<style lang="scss">
#input-buy-in {
  margin-top: 10px;
}
</style>
