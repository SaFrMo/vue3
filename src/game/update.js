import * as THREE from 'three'

// p = prerequisites
const p = {
    ship: null,
    center: null
}

export default function() {
    Object.keys(p).map(x => (p[x] = this.game.load(x)))

    if (Object.keys(p).some(x => p[x] == null)) {
        return
    }

    // bob ship
    // p.ship.position.set(0, Math.sin(this.game.elapsedTime) * 0.1, 0)

    // move camera
    if (this.$store.state.inputHorizontal) {
        p.center.rotation.y +=
            this.game.deltaTime *
            this.$store.state.inputHorizontal *
            this.$store.state.cameraSpeed
    }
}
