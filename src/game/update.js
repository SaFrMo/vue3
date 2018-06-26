import * as THREE from 'three'

let computer = null
let player = null
let cssRenderer = null

export default function() {
    if (!cssRenderer) {
        cssRenderer = this.game.load('cssRenderer')
    }

    if (cssRenderer) {
        cssRenderer.setSize(window.innerWidth, window.innerHeight)
        cssRenderer.render(this.game.scene, this.game.camera)
    }
}
