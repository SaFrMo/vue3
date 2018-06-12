<template>
    <div id="app">
        <canvas id="game-canvas"/>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html {
    overflow: hidden;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin-top: 60px;
}
a {
    color: white;
}
canvas {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
