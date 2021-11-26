<template lang="pug">
    #current-bankroll-component Current Bankroll: ${{currentBankRoll}}
</template>
<script>
export default {
    props: {
        currentBankRoll: Number,
    },
}
</script>