import { SET_HOLES, INCREASE_COUNTER, DECREASE_COUNTER } from '../mutations.type';
import { FETCH_HOLES_BY_COURSE_ID } from '../actions.type';

import { HoleService } from '../../common/api.service';

const hole = {
    namespaced: true,
    state: () => ({
        holes: [],
        holeIndex: 0
    }),
    mutations: {
        [SET_HOLES](state, payload) {
            state.holes = payload;
        },
        [INCREASE_COUNTER](state) {
            if (state.holeIndex < state.holes.length - 1) {
                state.holeIndex++;
            }
        },
        [DECREASE_COUNTER](state) {
            if (state.holeIndex > 0) {
                state.holeIndex--;
            }
        }
    },
    actions: {
        async [FETCH_HOLES_BY_COURSE_ID]({ commit }, params) {
            try {
                const data = await HoleService.getHolesByCourseId(params);
                commit(SET_HOLES, data);
            } catch(error) {
                throw new Error(`The following error occurred while fetching hole: ${error}`);
            }
        },
    },
    getters: {
        holes(state) {
            return state.holes;
        },
        currentHole(state) {
            return state.holes[state.holeIndex];
        }
    }
};

export default hole;