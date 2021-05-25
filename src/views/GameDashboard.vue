<template>
    <v-col>
        <v-container class="GameDashboard">
            <HoleInfoBanner class="my-5" :currentHole="currentHole" />
            <PlayerInterface
                v-for="(player, index) in players"
                :key="index"
                :player="player"
                :index="index"
                :currentHole="currentHole"
             />
            <v-row class="my-5">
                <v-col class="d-flex flex-row justify-content-around align-items-center">
                    <v-btn
                        color="primary"
                        @click="decreaseCounter"
                    >
                        Previous Hole
                    </v-btn>
                    <v-btn
                        color="primary"
                        @click="increaseCounter"
                    >
                        Next Hole
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-col>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import { FETCH_HOLES_BY_COURSE_ID } from '../store/actions.type';
import { SET_ROUND_HOLES, INCREASE_COUNTER, DECREASE_COUNTER } from '../store/mutations.type';

import HoleInfoBanner from '@/components/HoleInfoBanner';
import PlayerInterface from '@/components/PlayerInterface';

export default {
    name: 'GameDashboard',
    components: {
        HoleInfoBanner,
        PlayerInterface,
    },
    async created() {
        await this.fetchHoles({ course: this.course.id });
    },
    computed: {
        ...mapGetters({
            holes: 'hole/holes',
            currentHole: 'hole/currentHole',
            course: 'course/course',
            rounds: 'round/rounds',
            players: 'player/players'
        }),
    },
    methods: {
        ...mapActions({
            fetchHoles: `hole/${FETCH_HOLES_BY_COURSE_ID}`,
        }),
        ...mapMutations({
            setRoundHoles: `roundHole/${SET_ROUND_HOLES}`,
            increaseCounter: `hole/${INCREASE_COUNTER}`,
            decreaseCounter: `hole/${DECREASE_COUNTER}`
        }),
    }
}
</script>

<style lang="scss" scoped>
.GameDashboard {
    display: block;
}
</style>