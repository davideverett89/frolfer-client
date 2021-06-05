import { SET_ROUND_HOLE, SET_ROUND_HOLES } from '../mutations.type';
import { CREATE_ROUND_HOLES } from '../actions.type';

const roundHole = {
    namespaced: true,
    state: () => ({
        roundHoles: {}
    }),
    mutations: {
        [SET_ROUND_HOLE](state, { roundId, holeIndex, payload }) {
            state.roundHoles[roundId][holeIndex] = payload;
        },
        [SET_ROUND_HOLES](state, payload) {
            state.roundHoles = payload;
        },
    },
    actions: {
        [CREATE_ROUND_HOLES]({ commit }, payload) {
            const roundHoles = {};
            payload.forEach(x => {
                roundHoles[x.id] = [];
            })
            commit(SET_ROUND_HOLES, roundHoles);
        }
    },
    getters: {
        roundHole(state) {
            return state.roundHole;
        },
        roundHoles(state) {
            return state.roundHoles;
        }
    }
};

export default roundHole;
