<template lang="pug">
    #current-pot-component Current Pot: ${{currentPot.toString()}}
</template>
<script>
export default {
    props: {
        currentPot: Number
    }
}
</script>
<style lang="scss">
</style>