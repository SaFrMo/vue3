import * as THREE from 'three'

export default {
    getScreenPositionFromWorldPosition(
        screenPos = new THREE.Vector3(0, 0, 0),
        game = null
    ) {
        if (game == null) {
            game = window.game
        }

        const newPos = new THREE.Vector3(screenPos.x, screenPos.y, screenPos.z)
        const pos = newPos.project(game.camera)
        const size = game.renderer.getSize()
        const widthHalf = size.width / 2
        const heightHalf = size.height / 2

        pos.x = pos.x * widthHalf + widthHalf
        pos.y = -(pos.y * heightHalf) + heightHalf
        pos.z = 0

        return pos
    },

    moveToward(obj, targetPos, delta) {
        obj.translateOnAxis(obj.worldToLocal(targetPos), delta)
    }
}
