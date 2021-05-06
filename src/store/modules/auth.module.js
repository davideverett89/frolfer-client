import { AuthenticationService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, SET_AUTH } from '../actions.type';

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
        }
    },
    actions: {
        async [LOGIN]({ commit }, payload) {
            try {
                const user = await AuthenticationService.login(payload);
                commit(SET_AUTH, user);
            } catch(error) {
                throw new Error(`The following error occured when logging in: ${error}`);
            }
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