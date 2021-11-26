<template lang="pug">
    #hit-stay-component
        button.btn(:disabled="currentGamePlayState!=gameplayStateEnumObject.PLAYER_HAND") Hit
        button.btn(:disabled="currentGamePlayState!=gameplayStateEnumObject.PLAYER_HAND") Stay
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
.btn {
    width: 100px;
    height: 50px;
    margin: 0 10px;
}
</style>