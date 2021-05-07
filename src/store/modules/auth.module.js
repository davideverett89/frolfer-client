import { AuthenticationService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, REGISTER, LOGOUT } from '../actions.type';
import { SET_AUTH, SET_ERROR, PURGE_AUTH } from '../mutations.type';

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
        },
        [PURGE_AUTH](state) {
            state.isAuthenticated = false;
            state.user = {};
            state.errors = {};
            AuthenticationService.logout();
        }
    },
    actions: {
        async [LOGIN]({ commit }, payload) {
            try {
                const user = await AuthenticationService.login(payload);
                commit(SET_AUTH, user);
            } catch(error) {
                commit(SET_ERROR, error);
                throw new Error(`The following error occurred when logging in: ${error}`);
            }
        },
        async [REGISTER]({ commit }, payload) {
            try {
                const user = await AuthenticationService.register(payload);
                commit(SET_AUTH, user);
            } catch(error) {
                commit(SET_ERROR, error);
                throw new Error(`The following error occurred when registering: ${error}`);
            }
        },
        async [LOGOUT]({ commit }) {
            commit(PURGE_AUTH);
        },
    },
    getters: {
        currentUser(state) {
          return state.user;
        },
        isAuthenticated(state) {
          return state.isAuthenticated;
        }
    }
}

export default auth;