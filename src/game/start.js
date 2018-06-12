import * as THREE from 'three'
import controls from './controls'

export default async function() {
    // add sun
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)

    // position camera
    this.game.camera.position.set(5, 5, 10)
    this.game.camera.lookAt(new THREE.Vector3(0, 0, 0))

    this.game.forceRender()

    // add pivot point to center
    const center = new THREE.Object3D()
    center.add(this.game.camera)
    this.game.scene.add(center)
    this.game.save('center', center)

    // set up controls
    controls.call(this)
}
