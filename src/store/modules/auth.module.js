import { AuthenticationService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, REGISTER, LOGOUT } from '../actions.type';
import { SET_AUTH, SET_ERRORS, PURGE_AUTH } from '../mutations.type';

const auth  = {
    namespaced: true,
    state: () => ({
        errors: null,
        user: {},
        isAuthenticated: !!JwtService.getToken()
    }),
    mutations: {
        [SET_AUTH](state, payload) {
            state.user = payload;
            state.isAuthenticated = true;
        },
        [PURGE_AUTH](state) {
            state.isAuthenticated = false;
            state.user = {};
            state.errors = null;
            AuthenticationService.logout();
        },
        [SET_ERRORS](state, payload) {
            state.errors = payload;
        }
    },
    actions: {
        async [LOGIN]({ commit }, payload) {
            try {
                const data = await AuthenticationService.login(payload);
                if (data.valid) {
                    commit(SET_AUTH, data.user);
                } else {
                    commit(SET_ERRORS, 'Login attempt failed.');
                    setTimeout(() => {
                        commit(SET_ERRORS, '');
                    }, 5000);
                }
            } catch(error) {
                commit(SET_ERRORS, error);
                throw new Error(`The following error occurred when logging in: ${error}`);
            }
        },
        async [REGISTER]({ commit }, payload) {
            try {
                const data = await AuthenticationService.register(payload);
                if (data.valid) {
                    commit(SET_AUTH, data.user);
                } else {
                    commit(SET_ERRORS, 'Registration attempt failed.');
                    setTimeout(() => {
                        commit(SET_ERRORS, '');
                    }, 5000);
                }
            } catch(error) {
                commit(SET_ERRORS, error);
                throw new Error(`The following error occurred when registering: ${error}`);
            }
        },
        async [LOGOUT]({ commit }) {
            commit(PURGE_AUTH);
        }
    },
    getters: {
        currentUser(state) {
          return state.user;
        },
        isAuthenticated(state) {
          return state.isAuthenticated;
        },
        errors(state) {
            return state.errors;
        },
    }
}

export default auth;