<template>

    <main class="ui">
        <div class="score">
            <span>Score: {{ $store.state.score }}</span>

            <button
                class="show-tutorial"
                aria-label="how to play"
                @click="$store.commit('TOGGLE_TUTORIAL')">
                ?
            </button>

            <button
                v-if="!$store.state.playerSpeed"
                @click="$store.commit('SET_PLAYER_SPEED', 1)">
                Start!
            </button>
        </div>

        <div
            class="how-to-play"
            v-if="$store.state.showTutorial"
            @click="$store.commit('TOGGLE_TUTORIAL')">

            <div class="text-wrap">
                <h2>How to Play</h2>
                <p><em>(Note - this is all lifted directly from <a href="https://codepen.io/jkantner/pen/VxxrEv">this pen</a>! Thanks, Jon Kantner!)</em></p>
                <p><strong>Click/tap</strong> to change the color of the jello until it matches the color of the box it’s about to land on.</p>
                <p>+1 point each matching land and back to zero if missed. The higher the streak, the faster the jello will jump. See how many you can get in a row!</p>
            </div>

        </div>
    </main>

</template>

<style lang="scss">
// UI styling
$color1: rgba(63, 13, 18, 1);
$color2: rgba(167, 29, 49, 1);
$color3: rgba(241, 240, 204, 1);
$color4: rgba(213, 191, 134, 1);
$color5: rgba(141, 119, 95, 1);

.score {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: $color3;
    padding: 20px;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
}
button {
    -webkit-appearance: none;
    background-color: $color4;
    font-size: 18px;
    display: inline-block;
    border: none;
    display: block;
    margin: 10px auto 0;
    border-radius: 5px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: darken($color4, 30%);
    }
}
.how-to-play {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;

    .text-wrap {
        background-color: $color3;
        padding: 20px;
        border-radius: 10px;
        max-width: 300px;
    }
}
</style>
