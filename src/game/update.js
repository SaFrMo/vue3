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
    p.ship.position.set(0, Math.sin(this.game.elapsedTime) * 0.1, 0)

    // move camera
    if (this.$store.state.inputHorizontal) {
        p.center.rotation.y +=
            this.game.deltaTime *
            this.$store.state.inputHorizontal *
            this.$store.state.cameraSpeed
    }

    if (this.$store.state.inputVertical) {
        const minDistance = 3
        const center = new THREE.Vector3(0, 0, 0)

        // ignore if we're too close to the center
        if (
            this.game.camera.position.distanceTo(center) <= minDistance &&
            this.$store.state.inputVertical > 0
        ) {
            return
        }

        this.game.utils.moveToward(
            this.game.camera,
            center,
            this.$store.state.cameraSpeed *
                this.game.deltaTime *
                this.$store.state.inputVertical
        )
    }
}
