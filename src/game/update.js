import * as THREE from 'three'

let cssRenderer = null
let cssCamera = null
let image = null
let screen = null

export default function() {
    image = this.game.load('img')
    cssCamera = this.game.load('cssCamera')
    cssRenderer = this.game.load('cssRenderer')
    screen = this.game.load('screen')

    if (image && screen) {
        image.rotation.set(
            0,
            image.rotation.y +
                this.game.utils.deg2Rad(15) * this.game.deltaTime,
            0
        )
    }

    if (cssRenderer && cssCamera) {
        // cssRenderer.setSize(window.innerWidth, window.innerHeight)
        cssRenderer.render(this.game.scene, cssCamera)
    }
}
