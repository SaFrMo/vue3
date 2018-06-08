import * as THREE from 'three'

export default async function() {
    // add sun
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)

    // add spaceship
    const ship = await this.game.loadObj('static/assets/ship1.obj')
    this.game.scene.add(ship)

    this.game.camera.position.set(5, 5, 10)
    this.game.camera.lookAt(new THREE.Vector3(0, 0, 0))
}
