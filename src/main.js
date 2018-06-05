// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './vue/App'
import router from './vue/router'
import Game from './engine'
import store from './store'
import THREE from 'three'

Vue.config.productionTip = false

// add UI
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data() {
        return {
            game: null,
            player: null
        }
    },
    mounted() {
        this.game = new Game()

        // add player
        const player = this.game.add({ position: [0, 0, 0] })

        // move camera
        this.game.camera.position.set(5, 2, 5)
        // look at player
        this.game.camera.lookAt(player.position)

        // create blocks group
        for (let i = 0; i < 10; i++) {
            this.game.add({
                group: 'blocks',
                position: [i * 2, 0, 0]
            })
        }

        // save update
        this.game.update = game => {
            this.update(game)
        }
    },
    methods: {
        update(game) {
            // console.log(game)
        }
    }
})
