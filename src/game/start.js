import * as THREE from 'three'
import controls from './controls'

function createBox(side = 1) {
    const geometry = new THREE.BoxBufferGeometry(side, side, side)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    return new THREE.Mesh(geometry, material)
}

export default async function() {
    // add sun
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)

    this.game.camera.position.set(5, 5, 10)
    this.game.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.game.forceRender()

    // add spaceship
    const ship = await this.game.loadObj('static/assets/ship1.obj')
    this.game.scene.add(ship)
    this.game.save('ship', ship)

    // add points of interest
    const front = createBox(2)
    front.position.set(5, 0, 0)
    ship.add(front)
    this.game.save('front', front)

    // add pivot point to center
    const center = new THREE.Object3D()
    center.add(this.game.camera)
    this.game.scene.add(center)
    this.game.save('center', center)

    // set up controls
    controls.call(this)
}
