import { RoundService } from '../../common/api.service';

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
        async [CREATE_ROUNDS]({ commit }, { selectedPlayers, score_card_id }) {
            const rounds = selectedPlayers.map( async (x) => {
                const round = {
                    player_id: x.id,
                    score_card_id: score_card_id,
                    score: 0,
                    total_strokes: 0
                }
                const data = await RoundService.createRound(round);
                return data;
            });
            const data = await Promise.all(rounds);
            console.log('Hopefully maybe some rounds:', data);
            commit(SET_ROUNDS, data);
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
