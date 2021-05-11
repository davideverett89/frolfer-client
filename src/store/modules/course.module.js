import { SET_COURSES } from '../mutations.type';
import { FETCH_COURSES } from '../actions.type';

import { CourseService } from '../../common/api.service';

const course = {
    namespaced: true,
    state: () => ({
        courses: []
    }),
    mutations: {
        [SET_COURSES](state, payload) {
            state.courses = payload;
        }
    },
    actions: {
        async [FETCH_COURSES]({ commit }) {
            try {
                const { data } = await CourseService.getAll();
                commit(SET_COURSES, data)
            } catch(error) {
                throw new Error(`The following error occurred in the store while fetching courses: ${error}`);
            }
        }
    }
}

export default course