import { tween } from 'popmotion'

export default function() {
    tween({
        to: 360,
        duration: 1000
    }).start(v => {
        this.player.rotation.y = v
    })
}
