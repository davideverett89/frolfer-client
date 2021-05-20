import { FETCH_PLAYERS } from '../actions.type';

import { SET_PLAYERS, RESET } from '../mutations.type'

import { PlayerService } from '../../common/api.service';

const player = {
    namespaced: true,
    state: () => ({
        player: {},
        players: []
    }),
    mutations: {
        [SET_PLAYERS](state, payload) {
            state.players = payload
        },
        [RESET](state) {
            state.players = [];
        }
    },
    actions: {
        async [FETCH_PLAYERS]({ commit }) {
            try {
                const data  = await PlayerService.getAll();
                commit(SET_PLAYERS, data);
            } catch(error) {
                throw new Error(`The following error occurred in the store while fetching scorecards: ${error}`);
            }
        }
    },
    getters: {
        players(state) {
            return state.players;
        }
    }
}

export default player;