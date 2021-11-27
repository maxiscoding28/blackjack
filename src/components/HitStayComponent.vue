<template lang="pug">
    #hit-stay-component
        button.btn(
            :disabled="currentGamePlayState!=gameplayStateEnumObject.PLAYER_HAND"
            @click="playerHitCard"
        ) Hit
        button.btn(:disabled="currentGamePlayState!=gameplayStateEnumObject.PLAYER_HAND") Stay
</template>
<script>
export default {
    props: {
        currentGamePlayState: String,
        gameplayStateEnumObject: Object,
        addCard: Function,
        playerHitCard: Function,
    }
}
</script>
<style lang="scss">
.btn {
    width: 100px;
    height: 50px;
    margin: 0 10px;
}
</style>