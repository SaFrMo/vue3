import * as THREE from 'three'

let cssRenderer = null
let cssCamera = null
let inGameDom = null
let centerpoint = null

export default function() {
    inGameDom = this.game.load('in-game-dom')
    cssCamera = this.game.load('cssCamera')
    cssRenderer = this.game.load('cssRenderer')
    centerpoint = this.game.load('centerpoint')

    if (centerpoint) {
        centerpoint.rotation.y += this.game.utils.deg2Rad(
            this.$store.state.turnRate *
                this.$store.state.inputHorizontal *
                this.game.deltaTime
        )
    }

    if (inGameDom) {
    }

    if (cssRenderer && cssCamera) {
        cssRenderer.setSize(window.innerWidth, window.innerHeight)
        cssRenderer.render(this.game.scene, cssCamera)
    }
}
