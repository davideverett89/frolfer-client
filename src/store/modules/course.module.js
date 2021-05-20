import { SET_COURSES, SET_COURSE } from '../mutations.type';
import { FETCH_COURSES } from '../actions.type';

import { CourseService } from '../../common/api.service';

const course = {
    namespaced: true,
    state: () => ({
        courses: [],
        course: {},
    }),
    mutations: {
        [SET_COURSES](state, payload) {
            state.courses = payload;
        },
        [SET_COURSE](state, payload) {
            state.course = payload;
        }
    },
    actions: {
        async [FETCH_COURSES]({ commit }) {
            try {
                const data = await CourseService.getAll();
                commit(SET_COURSES, data)
            } catch(error) {
                throw new Error(`The following error occurred in the store while fetching courses: ${error}`);
            }
        }
    },
    getters: {
        courses(state) {
            return state.courses;
        },
        course(state) {
            return state.course;
        }
    }
}

export default course