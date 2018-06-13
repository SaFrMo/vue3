export default {
    state: {
        sequence: []
    },
    mutations: {
        ADD_SECTION_TO_SEQUENCE: (state, payload) => {
            state.sequence.push(payload)
        },
        SLICE_SEQUENCE_AT: (state, payload) => {
            state.sequence.splice(payload, 1)
        }
    }
}
