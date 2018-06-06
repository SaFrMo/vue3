// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './vue/App'
import router from './vue/router'
import Game from './engine'
import store from './store'
import * as THREE from 'three'

// split methods
import update from './game/update'
import generateBlocks from './game/generateBlocks'

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
            player: null,
            blocks: null,
            colors: ['red', 'blue', 'green'],
            playerColorIndex: 0
        }
    },
    mounted() {
        this.game = new Game()

        // add player
        this.player = this.game.add({
            position: [0, 0, 0],
            color: this.colors[0]
        })

        // move camera
        this.game.camera.position.set(5, 2, 5)
        // look at player
        this.game.camera.lookAt(this.player.position)

        // create blocks group
        generateBlocks.call(this, 10)

        // save blocks group
        this.blocks = this.game.getDictionary('blocks')

        // save update
        this.game.update = game => {
            this.update(game)
        }

        // add click/tap/space listener
        window.addEventListener('mousedown', this.onClick)
        window.addEventListener('keydown', this.onClick)
    },
    methods: {
        update(game) {
            update.call(this, game)
        },
        onClick(evt) {
            // if we're a keyboard event, make sure it was the space key
            if (
                !this.$store.state.playerSpeed ||
                (evt.type == 'keydown' && evt.keyCode != 32)
            ) {
                return
            }

            this.playerColorIndex++
            this.player.material = new THREE.MeshBasicMaterial({
                color: this.colors[this.playerColorIndex % this.colors.length]
            })
        }
    }
})
