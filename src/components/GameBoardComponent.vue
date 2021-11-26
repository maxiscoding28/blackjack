<template lang="pug">
    #game-board-component.flex-center.full-page
        #user-hand.flex-center.full-page User Hand
        #dealer-hand.flex-center.full-page Dealer Hand
</template>
<script>
export default {
}
</script>
<style lang="scss">
    #game-board-component {
        justify-content: space-between;

        #user-hand {
            border-right: 1px solid #b3afaa
        }

        #dealer-hand {
            border-left: 1px solid #b3afaa
        }
    }
</style>