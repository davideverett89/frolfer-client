import { SET_HOLES } from '../mutations.type';
import { FETCH_HOLES_BY_COURSE_ID } from '../actions.type';

import { HoleService } from '../../common/api.service';

const hole = {
    namespaced: true,
    state: () => ({
        hole: {},
        holes: []
    }),
    mutations: {
        [SET_HOLES](state, payload) {
            state.holes = payload;
        }
    },
    actions: {
        async [FETCH_HOLES_BY_COURSE_ID]({ commit }, params) {
            try {
                const data = await HoleService.getHolesByCourseId(params);
                console.log(data);
                commit(SET_HOLES, data);
            } catch(error) {
                throw new Error(`The following error occurred while fetching hole: ${error}`);
            }
        }
    },
    getters: {
        holes(state) {
            return state.holes;
        }
    }
};

export default hole;