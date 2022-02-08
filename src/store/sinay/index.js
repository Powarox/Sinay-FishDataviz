
export default {
    state() {
        return {
            feedback: false,
            message: '',
        }
    },
    getters: {
        getFeedback(state) {
            return state.feedback;
        },
    },
    actions: {
        addMessage({commit}, mess) {
            commit('ADDMESSAGE', mess);
        },
    },
    mutations: {
        ADDMESSAGE(state, message) {
            state.message = message;
        },
    }
}
