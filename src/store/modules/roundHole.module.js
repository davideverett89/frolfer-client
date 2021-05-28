import { SET_ROUND_HOLE, SET_ROUND_HOLES } from '../mutations.type';
import { CREATE_ROUND_HOLES } from '../actions.type';

const roundHole = {
    namespaced: true,
    state: () => ({
        roundHole: {},
        roundHoles: {}
    }),
    mutations: {
        [SET_ROUND_HOLE](state, payload) {
            state.roundHole = payload;
        },
        [SET_ROUND_HOLES](state, payload) {
            state.roundHoles = payload;
        }
    },
    actions: {
        [CREATE_ROUND_HOLES]({ commit }, payload) {
            const dictionary = {};
            payload.forEach(x => {
                dictionary[x.id] = [];
            })
            commit(SET_ROUND_HOLES, dictionary);
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
