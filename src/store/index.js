import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.module';
import auth from './modules/auth.module';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        home
    }
});

export default store