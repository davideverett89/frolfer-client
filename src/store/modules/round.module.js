import { SET_ROUNDS } from '../mutations.type';

const round = {
    namespaced: true,
    state: () => ({
        round: {},
        rounds: [],
    }),
    mutations: {
        [SET_ROUNDS](state, payload) {
            state.rounds = payload;
        }
    },
    getters: {
        round(state) {
            return state.round;
        },
        rounds(state) {
            return state.rounds;
        }
    }
}

export default round;