import tweenJump from './tweenJump'

// context: Vue instance in main.js
export default function(game) {
    const oldX = Math.abs(this.blocks.position.x)

    // move blocks
    this.blocks.position.x -= 1 * game.deltaTime * this.$store.state.playerSpeed

    const newX = Math.abs(this.blocks.position.x)

    // if we've reached a new block...
    if (Math.floor(oldX) % 2 == 1 && Math.floor(newX) % 2 == 0) {
        const blockIndex =
            Math.floor(newX) / this.$store.state.BLOCK_DISTANCE - 1
        const blockTouched = this.game.getDictionary('blocks').children[
            blockIndex
        ]
        // ...check the player's color
        const colorA = this.player.material.color
        const colorB = blockTouched.material.color

        if (
            colorA.r == colorB.r &&
            colorA.g == colorB.g &&
            colorA.b == colorB.b
        ) {
            this.$store.commit('INCREMENT_SCORE')
        } else {
            this.$store.commit('SET_SCORE', 0)
        }

        tweenJump.call(this)
    }
}
