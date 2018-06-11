// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './vue/App'
import router from './vue/router'
import Vue3Game from './engine'
import store from './store'
import THREE from 'three'

// game functions
import start from './game/start'
import update from './game/update'

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
            booted: false
        }
    },
    mounted() {
        this.game = new Vue3Game()

        start.call(this)
        this.game.update = () => update.call(this)
        this.booted = true
    }
})
