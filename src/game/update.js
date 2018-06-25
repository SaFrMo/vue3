import * as THREE from 'three'

let computer = null
let player = null

export default function() {
    if (!player) {
        player = this.game.load('player')
    }

    if (player) {
        // turn player
        const turnMod = this.$store.state.inputVertical < 0 ? 1 : -1
        player.rotateOnAxis(
            new THREE.Vector3(0, 1, 0),
            this.$store.state.inputHorizontal *
                this.$store.state.turnRate *
                this.game.deltaTime *
                turnMod
        )

        // move player
        player.translateZ(
            this.$store.state.inputVertical *
                -this.$store.state.moveRate *
                this.game.deltaTime
        )
    }
}
