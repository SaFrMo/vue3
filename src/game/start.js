import * as THREE from 'three'
import OBJLoader from 'three-obj-loader'
OBJLoader(THREE)

export default function() {
    // add sun
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)

    // add spaceship
    const loader = new THREE.OBJLoader()

    loader.load(
        'static/assets/ship1.obj',
        obj => {
            const ship = this.game.scene.add(obj)
            //ship.scale.set(0.1)
        },
        xhr => {
            console.log(xhr)
        }
    )

    this.game.camera.position.set(5, 5, 10)
    this.game.camera.lookAt(new THREE.Vector3(0, 0, 0))
}
