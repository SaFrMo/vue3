<template>
    <div id="app">
        <canvas id="game-canvas"/>

        <router-view class="ui"/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
canvas,
.ui {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
