import { ScorecardService } from '../../common/api.service';
import { FETCH_SCORECARDS, CREATE_SCORECARD, CREATE_ROUNDS } from '../actions.type';
import { SET_SCORECARDS, SET_SCORECARD } from '../mutations.type';

const home = {
    namespaced: true,
    state: () => ({
        scorecards: [],
        scorecard: {}
    }),
    mutations: {
        [SET_SCORECARDS](state, payload) {
            state.scorecards = payload;
        },
        [SET_SCORECARD](state, payload) {
            state.scorecard = payload;
        }
    },
    actions: {
        async [FETCH_SCORECARDS]({ commit }) {
            // Needs to fetch scorecards by player_id.
            try {
                const data  = await ScorecardService.getAll();
                commit(SET_SCORECARDS, data);
            } catch(error) {
                throw new Error(`The following error occurred in the store while fetching scorecards: ${error}`);
            }
        },
        async [CREATE_SCORECARD]({ dispatch, commit }, { score_card, selectedPlayers }) {
            try {
                const data = await ScorecardService.createScorecard(score_card);
                commit(SET_SCORECARD, data);
                dispatch(`round/${CREATE_ROUNDS}`, { selectedPlayers: selectedPlayers, score_card_id: data.id }, { root: true })
            } catch(error) {
                throw new Error(`The following error occurred while creating a new score card ${error}`);
            }
        }
    },
    getters: {
        scorecards(state) {
            return state.scorecards;
        },
        scorecard(state) {
            return state.scorecard;
        }
    }
}

export default home;