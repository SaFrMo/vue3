import * as THREE from 'three'

let world = null

export default function() {
    if (!world) {
        world = this.game.load('world')
    }

    if (world) {
        world.phiStart = 3
    }
}
