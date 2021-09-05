<template lang="pug">
  #game-controls-component
    button(@click="hitAddCard").hit-button Hit
    button.stay-button Stay
</template>

<script>
export default {
    name: "GameControlsComponent",
    props: {
        hitAddCard: Function
    },
}
</script>

<style lang="scss">
    #game-controls-component {
        display: flex;
        justify-content: space-between;

        .hit-button,
        .stay-button {
            width: 75px;
            height: 50px;
        }
    }
</style>