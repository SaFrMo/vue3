import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // inputs
        inputHorizontal: 0,
        inputVertical: 0,

        // gameplay vars
        cameraSpeed: 1
    },
    mutations: {
        SET_INPUT_HORIZONTAL: (state, payload) => {
            state.inputHorizontal = payload
        },
        SET_INPUT_VERTICAL: (state, payload) => {
            state.inputVertical = payload
        },
        CHANGE_INPUT_HORIZONTAL: (state, payload) => {
            state.inputHorizontal += payload
            state.inputHorizontal = Math.max(
                Math.min(state.inputHorizontal, 1),
                -1
            )
        },
        CHANGE_INPUT_VERTICAL: (state, payload) => {
            state.inputVertical += payload
            state.inputVertical = Math.max(Math.min(state.inputVertical, 1), -1)
        }
    },
    actions: {},
    getters: {}
})
