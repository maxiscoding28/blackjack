<template lang="pug">
    #card-component.flex-center(v-if="!cardProperties.facedown")
        img.suit(:src="getImage()")
        .value {{cardProperties.value}}
    #card-component.flex-center.back-of-deck(v-else)
</template>
<script>
export default {
    props: {
        cardProperties: Object
    },
    methods: {
        getImage() {
            return require(`../../public/${this.cardProperties.suit}.png`);
        }
    }
}
</script>
<style lang="scss">
    #card-component {
        flex-basis: 25%;
        margin: 1px;
        justify-content: space-around;
        flex-direction: column;
        width: 100px;
        height: 120px;
        background: white;
        color: black;
    }

    .suit {
        width: 25px;
        height: 25px;
    }

    .back-of-deck {
        background: indigo !important;
    }
</style>