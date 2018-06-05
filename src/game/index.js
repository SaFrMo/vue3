import store from '../store'
import * as THREE from 'three'

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

        // add scene dictionary
        this.dictionary = {}

        // deltaTime variables
        this.lastTick = Date.now()
        this.deltaTime = 0

        this.masterUpdate()
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

    masterUpdate() {
        // calculate deltaTime
        const now = Date.now()
        this.deltaTime = (now - this.lastTick) / 1000
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

    // Add an item to the scene. Defaults to a 1x1x1 gray box.
    // opts:
    //  - mesh
    //  - group
    //  - color
    //  - position
    //  - name
    add(opts = {}) {
        let toAdd = opts.mesh || opts.group
        let addMat = opts.material

        if (!toAdd) {
            toAdd = new THREE.BoxGeometry(1, 1, 1)
        }

        if (!opts.group && !addMat) {
            addMat = new THREE.MeshBasicMaterial({
                color: opts.color || 0xcccccc
            })
        }

        // TODO: fix and allow groups, etc
        const created = new THREE.Mesh(toAdd, addMat)
        this.scene.add(created)

        if (opts.position) {
            created.position.set(...opts.position)
        }

        // set up options for newly created mesh
        if (opts.name) {
            if (!this.dictionary.hasOwnProperty(opts.name)) {
                this.dictionary[opts.name] = toAdd
            } else {
                console.warn(
                    `dictionary table already has an entry for ${
                        opts.name
                    }. Skipping addition.`
                )
            }
        }

        if (created) {
            return created
        }

        return null
    }
}
