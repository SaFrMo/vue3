import * as THREE from 'three'

export default async function() {
    // This function will run once immediately after the Vue3Game is created.
    // You have access to the root Vue instance with `this` and to the
    // main Vue3Game instance with `this.game`.
    //
    // For example, to add a sun-like directional light to the scene:
    //
    const sun = new THREE.DirectionalLight(0xffffff, 1)
    sun.position.set(1, 0.5, 1)
    this.game.scene.add(sun)
    this.game.save('sun', sun)

    // add computer
    const computer = await this.game.loadObj('static/assets/computer.obj', {
        material: 'static/assets/computer.mtl'
    })
    computer.position.set(0, 0, 0)
    this.game.scene.add(computer)
    this.game.save('computer', computer)
    computer.rotation.set(0, -90, 0)

    // add player
    const geo = new THREE.SphereBufferGeometry(0.01, 32, 32)
    const mat = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const player = new THREE.Mesh(geo, mat)
    player.position.set(0.5, 0, 1)
    player.add(this.game.camera)
    this.game.scene.add(player)
    this.game.save('player', player)

    this.game.camera.position.set(0, 0.1, 0.2)
    this.game.camera.lookAt(computer.position)
}
