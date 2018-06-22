import store from '../store'
import * as THREE from 'three'
import objLoader from './loaders/objLoader'
import mtlLoader from './loaders/mtlLoader'
import utils from './utils'

export default class {
    constructor() {
        // save global object
        window.game = this

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
            canvas: document.getElementById('game-canvas'),
            antialias: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        // add resize listener
        window.addEventListener('resize', () => this.resize())

        // add scene dictionary
        this.dictionary = {}

        // time variables
        this.lastTick = Date.now()
        this.deltaTime = 0
        this.elapsedTime = 0

        // async OBJ loader
        // accepts two arguments, URL and onProgress event
        this.loadObj = objLoader

        // async MTL loader
        // accepts URL as argument
        this.loadMtl = mtlLoader

        // save utils
        this.utils = utils

        // kick update loop
        this.masterUpdate()
    }

    resize() {
        // set aspect
        if (this.camera) {
            this.camera.aspect = window.innerWidth / window.innerHeight
            this.camera.updateProjectionMatrix()
        }
        // set size
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight)
        }
    }

    masterUpdate() {
        // calculate deltaTime
        const now = Date.now()
        this.deltaTime = (now - this.lastTick) / 1000
        this.elapsedTime += this.deltaTime
        this.lastTick = now

        // run update
        if (this.update) {
            // in game instances, you can set update like this:
            // game.update = game => console.log(this, game)
            // "this" will be the Vue instance, "game" the Game instance
            this.update(this)
        }

        // render
        this.renderer.render(this.scene, this.camera)

        // call & request masterUpdate
        requestAnimationFrame(() => this.masterUpdate())
    }

    forceRender() {
        this.renderer.render(this.scene, this.camera)
    }

    save(key, val, force = false) {
        if (!this.dictionary.hasOwnProperty(key) || force) {
            this.dictionary[key] = val
        } else {
            console.warn(
                `dictionary table already has an entry for ${key}. Skipping addition. (Set third parameter to "true" to force overwrite.)`
            )
        }
    }

    load(key) {
        return this.dictionary[key] || null
    }

    async nextFrame() {
        return new Promise(res => requestAnimationFrame(res))
    }

    async waitFor(key) {
        let result = this.load(key)

        while (result == null) {
            await this.nextFrame()
            result = this.load(key)
        }

        return result
    }
}
