export default {
    state: {
        sequence: []
    },
    mutations: {
        // plan gameplay
        ADD_SECTION_TO_SEQUENCE: (state, payload) => {
            state.sequence.push(payload)
        }
    }
}
