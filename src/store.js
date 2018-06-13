import Vue from 'vue'
import Vuex from 'vuex'
import planningBoard from '@/vuex-modules/planningBoard'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        planningBoard
    },
    state: {
        // inputs
        inputHorizontal: 0,
        inputVertical: 0,

        // gameplay vars
        cameraSpeed: 1,

        // UI vars
        planOpened: true
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
        },
        TOGGLE_PLANS: state => {
            state.planOpened = !state.planOpened
        }
    },
    actions: {},
    getters: {}
})
