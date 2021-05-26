import { FETCH_PLAYERS, SET_SELECTED_PLAYERS, CREATE_ROUNDS } from '../actions.type';

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
        },
        [SET_SELECTED_PLAYERS]({ dispatch, commit }, { selectedPlayers, score_card_id }) {
            commit(SET_PLAYERS, selectedPlayers);
            dispatch(`round/${CREATE_ROUNDS}`, { selectedPlayers, score_card_id }, { root: true });
        }
    },
    getters: {
        players(state) {
            return state.players;
        }
    }
}

export default player;