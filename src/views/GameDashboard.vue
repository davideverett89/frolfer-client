<template>
  <div class="GameDashboard">
      <h1>Game Dashboard</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import { FETCH_HOLES_BY_COURSE_ID } from '../store/actions.type';
import { SET_ROUNDHOLES } from '../store/mutations.type';

export default {
    name: 'GameDashboard',
    data() {
        return {
            counter: 0
        }
    },
    async created() {
        await this.fetchHoles({ course: this.course.id });
    },
    computed: {
        ...mapGetters({
            holes: 'hole/holes',
            course: 'course/course',
            rounds: 'round/rounds'
        }),
        currentHole() {
            return this.holes[this.counter];
        }
    },
    methods: {
        ...mapActions({
            fetchHoles: `hole/${FETCH_HOLES_BY_COURSE_ID}`
        }),
        ...mapMutations({
            setRoundHoles: `roundHole/${SET_ROUNDHOLES}`
        }),
        handleCreateRoundHoles(roundId) {
            return this.holes.map(x => {
                const roundHole = {
                    hole_id: x.id,
                    round_id: roundId,
                    score: 0,
                };
                return roundHole;
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.GameDashboard {
    display: block;
}
</style>