export default function() {
    // key listeners
    addEventListener('keydown', evt => {
        if (evt.keyCode == 87 || evt.keyCode == 38) {
            this.$store.commit('CHANGE_INPUT_VERTICAL', 1)
        } else if (evt.keyCode == 68 || evt.keyCode == 39) {
            this.$store.commit('CHANGE_INPUT_HORIZONTAL', 1)
        } else if (evt.keyCode == 83 || evt.keyCode == 40) {
            this.$store.commit('CHANGE_INPUT_VERTICAL', -1)
        } else if (evt.keyCode == 65 || evt.keyCode == 37) {
            this.$store.commit('CHANGE_INPUT_HORIZONTAL', -1)
        }
    })

    addEventListener('keyup', evt => {
        if (evt.keyCode == 87 || evt.keyCode == 38) {
            this.$store.commit('CHANGE_INPUT_VERTICAL', -1)
        } else if (evt.keyCode == 68 || evt.keyCode == 39) {
            this.$store.commit('CHANGE_INPUT_HORIZONTAL', -1)
        } else if (evt.keyCode == 83 || evt.keyCode == 40) {
            this.$store.commit('CHANGE_INPUT_VERTICAL', 1)
        } else if (evt.keyCode == 65 || evt.keyCode == 37) {
            this.$store.commit('CHANGE_INPUT_HORIZONTAL', 1)
        }
    })
}
