import { SET_ROUNDHOLES } from '../mutations.type';

const roundHole = {
    namespaced: true,
    state: () => ({
        roundHole: {},
        roundHoles: []
    }),
    mutations: {
        [SET_ROUNDHOLES](state, payload) {
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