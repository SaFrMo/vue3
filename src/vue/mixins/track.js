export default {
    data() {
        return {
            track: null,
            tracked: null,
            x: 0,
            y: 0
        }
    },
    computed: {
        trackedPosition() {
            return {
                top: 0,
                left: 0,
                position: 'absolute',
                transform: `translate(calc(${this.x}px - 50%), calc(${
                    this.y
                }px - 50%))`
            }
        }
    },
    mounted() {
        this.updatePosition()
    },
    methods: {
        updatePosition() {
            if (this.$root.game && !this.tracked) {
                this.tracked = this.$root.game.load(this.track)
            }
            if (this.tracked) {
                let pos = this.$root.game.utils.getScreenPositionFromWorldPosition(
                    this.tracked.position
                )
                this.x = pos.x
                this.y = pos.y
            }

            if (this) {
                requestAnimationFrame(this.updatePosition)
            }
        }
    }
}
