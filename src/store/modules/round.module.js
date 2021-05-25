import { SET_ROUNDS } from '../mutations.type';
import { CREATE_ROUNDS } from '../actions.type';

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
    actions: {
        [CREATE_ROUNDS]({ commit }, payload) {
            const rounds = payload.map(x => {
                const round = {
                    player_id: x.id,
                    score: 0
                }
                return round;
            });
            commit(SET_ROUNDS, rounds);
        }
    },
    getters: {
        round(state) {
            return state.round;
        },
        rounds(state) {
            return state.rounds;
        },
    }
}

export default round;