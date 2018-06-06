import { tween } from 'popmotion'

export default function() {
    const totalDuration = 1000 / this.$store.state.playerSpeed

    tween({
        to: 2,
        duration: totalDuration,
        yoyo: 1
    }).start(val => {
        this.player.position.y = val
    })
}
