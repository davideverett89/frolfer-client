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
}

export default round;