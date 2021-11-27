<template lang="pug">
    #game-board-component.flex-center.full-page
        #user-hand.flex-center.full-page
            CardComponent(
                v-for="card in playersHand"
                :cardProperties="card"
            )
        #dealer-hand.flex-center.full-page
            CardComponent(
                v-for="card in dealersHand"
                :cardProperties="card"
            )
</template>
<script>
import CardComponent from "./CardComponent";
export default {
    components: {
        CardComponent
    },
    props: {
        playersHand: Array,
        dealersHand: Array,
    }
}
</script>
<style lang="scss">
    #game-board-component {
        justify-content: space-between;

        #user-hand, #dealer-hand {
            width: 50%;
            flex-wrap: wrap;
            justify-content: space-around;
            border-right: 1px solid #b3afaa;
            padding: 0 5px;
        }
    }
</style>