import { SET_ROUND_HOLES } from '../mutations.type';

const roundHole = {
    namespaced: true,
    state: () => ({
        roundHole: {},
        roundHoles: []
    }),
    mutations: {
        [SET_ROUND_HOLES](state, payload) {
            state.roundHoles = payload
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