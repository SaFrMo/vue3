import { timeline, easing } from 'popmotion'
import * as THREE from 'three'

export default function() {
    timeline(
        [
            [
                { track: 'rotation', from: 0, to: 4, duration: 1000 },
                {
                    track: 'scale',
                    from: 1,
                    to: 1.5,
                    duration: 400,
                    ease: easing.backOut
                }
            ]
        ],
        {
            yoyo: 1,
            duration: 900
        }
    ).start(v => {
        this.player.quaternion.setFromEuler(
            new THREE.Euler(v.rotation / 5, v.rotation, 0)
        )
        this.player.scale.set(v.scale, v.scale, v.scale)
    })
}
