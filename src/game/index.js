import store from '../store'
import * as THREE from 'three'
import update from './update'

export default class {
    constructor() {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('game-canvas')
        })
        renderer.setSize(window.innerWidth, window.innerHeight)

        // deltaTime variables
        this.lastTick = Date.now()
        this.deltaTime = 0

        this.update()
    }

    update() {
        // calculate deltaTime
        const now = Date.now()
        this.deltaTime = (now - this.lastTick) / 1000
        this.lastTick = now

        // call & request update
        update.call(this)
        requestAnimationFrame(() => this.update())
    }
}
