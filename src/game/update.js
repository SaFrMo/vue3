import * as THREE from 'three'

let computer = null

export default function() {
    if (!computer) {
        computer = this.game.load('computer')
    }

    if (computer) {
        // computer.rotation.set(
        //     computer.rotation.x,
        //     computer.rotation.y +
        //         this.game.utils.deg2Rad(-5) * this.game.deltaTime,
        //     computer.rotation.z
        // )
    }
}
