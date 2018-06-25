import Vue from 'vue'
import Vuex from 'vuex'
import utils from '@/engine/utils'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // inputs
        inputHorizontal: 0,
        inputVertical: 0
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
            state.inputHorizontal = utils.clamp(state.inputHorizontal, -1, 1)
        },
        CHANGE_INPUT_VERTICAL: (state, payload) => {
            state.inputVertical += payload
            state.inputVertical = utils.clamp(state.inputVertical, -1, 1)
        }
    },
    actions: {},
    getters: {}
})
