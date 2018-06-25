export default function() {
    // key listeners
    addEventListener('keydown', evt => {
        if (evt.keyCode == 87 || evt.keyCode == 38) {
            // W or up arrow
            this.vue.$store.commit('CHANGE_INPUT_VERTICAL', 1)
        } else if (evt.keyCode == 68 || evt.keyCode == 39) {
            // D or right arrow
            this.vue.$store.commit('CHANGE_INPUT_HORIZONTAL', 1)
        } else if (evt.keyCode == 83 || evt.keyCode == 40) {
            // S or down arrow
            this.vue.$store.commit('CHANGE_INPUT_VERTICAL', -1)
        } else if (evt.keyCode == 65 || evt.keyCode == 37) {
            // A or left arrow
            this.vue.$store.commit('CHANGE_INPUT_HORIZONTAL', -1)
        }
    })

    addEventListener('keyup', evt => {
        if (evt.keyCode == 87 || evt.keyCode == 38) {
            // W or up arrow
            this.vue.$store.commit('CHANGE_INPUT_VERTICAL', -1)
        } else if (evt.keyCode == 68 || evt.keyCode == 39) {
            // D or right arrow
            this.vue.$store.commit('CHANGE_INPUT_HORIZONTAL', -1)
        } else if (evt.keyCode == 83 || evt.keyCode == 40) {
            // S or down arrow
            this.vue.$store.commit('CHANGE_INPUT_VERTICAL', 1)
        } else if (evt.keyCode == 65 || evt.keyCode == 37) {
            // A or left arrow
            this.vue.$store.commit('CHANGE_INPUT_HORIZONTAL', 1)
        }
    })
}
