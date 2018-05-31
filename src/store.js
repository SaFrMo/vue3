import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        score: 0,
        showTutorial: false,

        // gameplay vars
        playerSpeed: 0
    },
    mutations: {
        TOGGLE_TUTORIAL: state => {
            state.showTutorial = !state.showTutorial
        },
        SET_PLAYER_SPEED: (state, payload) => {
            state.playerSpeed = payload
        }
    },
    actions: {},
    getters: {}
})
