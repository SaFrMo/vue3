export default async function() {
    // add spaceship
    const ship = await this.game.loadObj('static/assets/ship1.obj')
    this.game.scene.add(ship)
    this.game.save('ship', ship)

    // add points of interest
    const front = createBox(2)
    front.position.set(5, 0, 0)
    ship.add(front)
    this.game.save('front', front)
}
