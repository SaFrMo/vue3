import * as THREE from 'three'

function createBox(side = 1) {
    const geometry = new THREE.BoxBufferGeometry(side, side, side)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    return new THREE.Mesh(geometry, material)
}

export default async function({ model, pois }) {
    // add spaceship
    const ship = await this.game.loadObj(model)
    this.game.scene.add(ship)
    this.game.save('ship', ship, true)

    // add points of interest
    let i = 0
    pois.map(poi => {
        const created = createBox(2)
        created.position.set(...poi.position)
        ship.add(created)
        this.game.save(`poi${i++}`, created)
    })
}
