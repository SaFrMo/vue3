import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        score: 0,
        showTutorial: false,

        // gameplay vars
        playerSpeed: 0,

        // gameplay constants
        SPEED_CHANGE_ON_CORRECT: 0.5,
        BLOCK_DISTANCE: 2
    },
    mutations: {
        TOGGLE_TUTORIAL: state => {
            state.showTutorial = !state.showTutorial
        },
        SET_PLAYER_SPEED: (state, payload) => {
            state.playerSpeed = payload
        },
        INCREMENT_SCORE: state => {
            state.score++
            state.playerSpeed += state.SPEED_CHANGE_ON_CORRECT
        },
        SET_SCORE: (state, payload) => {
            state.score = payload
            if (payload == 0) {
                state.playerSpeed = 1
            }
        }
    },
    actions: {},
    getters: {}
})
