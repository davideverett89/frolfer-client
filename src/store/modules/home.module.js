import { ScorecardService } from '../../common/api.service';
import { FETCH_SCORECARDS } from '../actions.type';
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
            try {
                const data  = await ScorecardService.getAll();
                commit(SET_SCORECARDS, data);
            } catch(error) {
                throw new Error(`The following error occurred in the store while fetching scorecards: ${error}`);
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