import { ScorecardService } from '../../common/api.service';
import { FETCH_SCORECARDS } from '../actions.type';
import { SET_SCORECARDS } from '../mutations.type';

const home = {
    namespaced: true,
    state: () => ({
        scorecards: []
    }),
    mutations: {
        [SET_SCORECARDS](state, payload) {
            state.scorecards = payload;
        }
    },
    actions: {
        async [FETCH_SCORECARDS]({ commit }) {
            try {
                const { data } = await ScorecardService.getAll();
                commit(SET_SCORECARDS, data);
            } catch(error) {
                throw new Error(`The following error occured in the store while fetching Scorecards: ${error}`);
            }
        }
    },
    getters: {
        scorecards(state) {
            return state.scorecards;
        }
    }
}

export default home;