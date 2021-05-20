import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.module';
import auth from './modules/auth.module';
import course from './modules/course.module';
import player from './modules/player.module';
import round from './modules/round.module';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        home,
        course,
        player,
        round
    }
});

export default store