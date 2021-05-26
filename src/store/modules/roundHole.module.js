import { SET_ROUND_HOLE } from '../mutations.type';

const roundHole = {
    namespaced: true,
    state: () => ({
        roundHole: {},
        roundHoles: []
    }),
    mutations: {
        [SET_ROUND_HOLE](state, { roundHole, index }) {
            state.roundHoles[index] = roundHole;
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
