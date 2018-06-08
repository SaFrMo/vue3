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
        },
        CHANGE_INPUT_VERTICAL: (state, payload) => {
            state.inputVertical += payload
        }
    },
    actions: {},
    getters: {}
})
