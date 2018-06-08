import * as THREE from 'three'

export default function() {
    // bob ship
    const ship = this.game.getDictionary('ship')
    if (ship) {
        ship.position.set(0, Math.sin(this.game.elapsedTime) * 0.3, 0)
    }

    // move camera
    // if (this.game.camera && this.$store.state.inputVertical) {
    //     this.game.camera.position.addScaledVector(
    //         this.game.camera
    //             .getWorldDirection(new THREE.Vector3(0, 0, 0))
    //             .multiplyScalar(
    //                 this.$store.state.inputVertical *
    //                     this.$store.state.cameraSpeed *
    //                     this.game.deltaTime
    //             )
    //     )
    //
    //     console.log()
    // }
}
