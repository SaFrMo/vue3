<template>

    <main class="front-page">
        <h1 v-track="'ship'">vue3</h1>

        <h2 v-track="'front'">the front</h2>
    </main>

</template>

<script>
import Vue from 'vue'
import track from '../mixins/track.js'

export default {}
</script>

<style lang="scss">
main.front-page {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: white;
    overflow: hidden;

    & > * {
        background-color: rgba(#666, 0.4);
        display: inline-block;
        padding: 20px;
        border-radius: 15px;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
