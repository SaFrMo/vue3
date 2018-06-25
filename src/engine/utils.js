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

    // move `obj` toward `targetPos` by `delta` distance
    moveToward(obj, targetPos, delta) {
        obj.translateOnAxis(obj.worldToLocal(targetPos), delta)
    },

    // convert radians to degrees
    rad2Deg(rads) {
        return rads * 57.29578
    },
    // convert degrees to radians
    deg2Rad(deg) {
        return deg / 57.29578
    },

    // clamp a number between two values (inclusive)
    clamp(val, min, max) {
        return Math.max(Math.min(val, max), min)
    }
}
