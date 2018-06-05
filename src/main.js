// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './vue/App'
import router from './vue/router'
import Game from './engine'
import store from './store'
import * as THREE from 'three'

Vue.config.productionTip = false

const blockDistance = 2

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
        for (let i = 0; i < 10; i++) {
            this.game.add({
                group: 'blocks',
                position: [i * blockDistance + blockDistance, -1, 0],
                color: this.colors[
                    Math.floor(Math.random() * this.colors.length)
                ]
            })
        }

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
            const oldX = Math.abs(this.blocks.position.x)

            // move blocks
            this.blocks.position.x -=
                1 * game.deltaTime * this.$store.state.playerSpeed

            const newX = Math.abs(this.blocks.position.x)

            // if we've reached a new block...
            if (Math.floor(oldX) % 2 == 1 && Math.floor(newX) % 2 == 0) {
                const blockIndex = Math.floor(newX) / blockDistance - 1
                const blockTouched = this.game.getDictionary('blocks').children[
                    blockIndex
                ]
                // ...check the player's color
                const colorA = this.player.material.color
                const colorB = blockTouched.material.color

                if (
                    colorA.r == colorB.r &&
                    colorA.g == colorB.g &&
                    colorA.b == colorB.b
                ) {
                    // TODO: Award points and speed up
                    console.log('match!')
                }
            }
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
