<template>

    <main class="front-page">
        <h1 :style="trackedPosition">vue3</h1>
    </main>

</template>

<script>
import Vue from 'vue'
import track from '../mixins/track.js'

export default {
    mixins: [track],
    data() {
        return {
            track: 'ship'
        }
    },
    watch: {
        '$root.booted'() {
            let pos = this.$root.game.utils.getScreenPositionFromWorldPosition()
        }
    }
}
</script>

<style lang="scss">
main.front-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white;

    h1 {
        background-color: rgba(#666, 0.4);
        display: inline-block;
        padding: 20px;
        border-radius: 15px;
        transform: translate(-50%, -50%);
    }
}
</style>
