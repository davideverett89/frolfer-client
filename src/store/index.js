import Vue from 'vue';
import Vuex from 'vuex';

import home from './modules/home.module';
import auth from './modules/auth.module';
import course from './modules/course.module';
import player from './modules/player.module';
import round from './modules/round.module';
import hole from './modules/hole.module';
import roundHole from './modules/roundHole.module';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        home,
        course,
        player,
        round,
        hole,
        roundHole
    }
});

export default store