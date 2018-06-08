import store from '../store'
import * as THREE from 'three'
import objLoader from './objLoader'

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

    // Add an item to the scene. Defaults to a 1x1x1 gray box.
    // opts:
    //  - mesh (optional, THREE mesh)
    //  - group (option, string: group name)
    //  - color (optional, hex color)
    //  - position (optional, array: [x, y, z])
    //  - name (optional, string)
    add(opts = {}) {
        let toAdd = opts.mesh
        let addMat = opts.material

        if (!toAdd) {
            toAdd = new THREE.BoxGeometry(1, 1, 1)
        }

        if (!addMat) {
            addMat = new THREE.MeshBasicMaterial({
                color: opts.color || 0xcccccc
            })
        }

        // prep thing to create
        let created = null
        if (toAdd && addMat) {
            created = new THREE.Mesh(toAdd, addMat)
        }

        // prep group
        let group = this.getDictionary(opts.group)

        // create group if it doesn't exist
        if (opts.group && !group) {
            group = new THREE.Group()
            this.scene.add(group)
            this.setDictionary(opts.group, group)
        }

        if (group && created) {
            group.add(created)
        } else if (created) {
            this.scene.add(created)
        }

        if (opts.position) {
            if (created) {
                created.position.set(...opts.position)
            }
        }

        // set up options for newly created mesh
        if (opts.name && (created || group)) {
            this.setDictionary(opts.name, created || group)
        }

        return created || group || null
    }

    setDictionary(key, val) {
        if (!this.dictionary.hasOwnProperty(key)) {
            this.dictionary[key] = val
        } else {
            console.warn(
                `dictionary table already has an entry for ${key}. Skipping addition.`
            )
        }
    }

    getDictionary(key) {
        return this.dictionary[key] || null
    }
}
