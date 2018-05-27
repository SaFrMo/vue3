import store from '../store'
import * as THREE from 'three'
import update from './update'

export default class {
    constructor() {
        // create main scene
        this.scene = new THREE.Scene()

        // create main camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )

        // attach renderer to existing canvas
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('game-canvas')
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        // add resize listener
        window.addEventListener('resize', this.resize)

        // deltaTime variables
        this.lastTick = Date.now()
        this.deltaTime = 0

        this.update()
    }

    resize() {
        // set size
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight)
        }

        // set aspect
        if (this.camera) {
            this.camera.aspect = window.innerWidth / window.innerHeight
        }
    }

    update() {
        // calculate deltaTime
        const now = Date.now()
        this.deltaTime = (now - this.lastTick) / 1000
        this.lastTick = now

        // call & request update
        requestAnimationFrame(() => this.update())
    }
}
