// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './vue/App'
import router from './vue/router'
import Vue3Game from './engine'
import store from './store'
import THREE from 'three'

Vue.config.productionTip = false

// Import game functions
import start from './game/start'
import update from './game/update'

// add UI
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data() {
        return {
            game: null
        }
    },
    mounted() {
        this.game = new Vue3Game(this)

        // Start the game!
        start.call(this)

        // Set the update function!
        this.game.update = () => update.call(this)
    }
})
