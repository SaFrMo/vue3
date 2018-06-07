<template>

    <section class="streak-announcer" v-show="visible">

        <h2>{{ displayScore }}</h2>

        <h3 v-if="isHighScore" key="high-score">New high score!</h3>

        <h3 v-else key="not-high-score">
            High score: {{ $store.state.highScore }}
        </h3>

    </section>

</template>

<script>
export default {
    data() {
        return {
            visible: false,
            isHighScore: true,
            displayScore: 0,
            timeout: null
        }
    },
    methods: {
        display() {
            this.visible = true

            this.timeout = setTimeout(() => (this.visible = false), 4000)
        }
    },
    watch: {
        '$store.state.score': function(newVal, oldVal) {
            if (newVal == 0 && oldVal != 0) {
                clearTimeout(this.timeout)

                // we've reset to 0, so announce the streak length + top score
                this.displayScore = oldVal
                // update high score
                if (this.displayScore > this.$store.state.highScore) {
                    this.isHighScore = true
                    this.$store.commit('SET_NEW_HIGH_SCORE', this.displayScore)
                } else {
                    this.isHighScore = false
                }

                this.display()
            }
        }
    }
}
</script>

<style lang="scss">
.streak-announcer {
    position: absolute;
    top: 20px;
    right: 0;
    left: 0;
    max-width: 400px;
    color: white;
    margin: auto;
}
</style>
