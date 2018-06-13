import * as THREE from 'three'

let top = 0
let left = 0
let tracked = null
let running = true

function updatePosition(el, binding, vnode) {
    const root = vnode.context.$root
    const value = binding.value

    if (root.game) {
        tracked = root.game.load(value)
    }
    if (tracked) {
        const worldPos = new THREE.Vector3()
        tracked.getWorldPosition(worldPos)
        let pos = root.game.utils.getScreenPositionFromWorldPosition(worldPos)
        left = pos.x
        top = pos.y

        el.style.transform = `translate(calc(${left}px - 50%), calc(${top}px - 50%))`
    }

    if (running) {
        requestAnimationFrame(() => updatePosition(el, binding, vnode))
    }
}

export default {
    inserted(el, binding, vnode) {
        updatePosition(el, binding, vnode)
    },
    unbind() {
        running = false
    }
}
