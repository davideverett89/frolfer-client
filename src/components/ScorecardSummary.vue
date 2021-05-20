<template>
<v-container fluid>
    <v-row>
        <v-col>
            <div class="CourseCard">
                <ul class="list-group pl-0">
                    <li class="list-group-item bg-transparent border-0 summary-label">
                        <h2 class="mb-0">
                            <strong>Course Name:</strong>
                            {{ scorecard.course.name }}
                        </h2>
                    </li>
                    <li class="list-group-item bg-transparent border-0 summary-label">
                        <h2 class="mb-0">
                            <strong>Location:</strong>
                            {{ `${scorecard.course.city}, ${scorecard.course.state}` }}
                        </h2>
                    </li>
                </ul>
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <div class="PlayerCard">
                <template v-if="scorecard.players.length === 0">
                    <h6>No Players Selected</h6>
                </template>
                <template v-else>
                    <ul class="list-group pl-0">
                        <li
                            v-for="(player, index) in scorecard.players"
                            :key="index"
                            class="list-group-item d-flex justify-content-center align-items-center bg-transparent border-0 summary-label"
                        >
                            <h2 class="display-1 mb-0 mx-2">
                                <strong class="player-label">Player {{ index + 1 }}</strong>:
                            </h2>
                            <h2 class="mb-0 mx-3">
                                {{ player.user.first_name.toUpperCase() || player.user.username.toUpperCase() }}
                            </h2>
                            <h2 class="mb-0">
                                {{ player.user.last_name.toUpperCase() }}
                            </h2>
                        </li>
                    </ul>
                </template>
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col></v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'ScorecardSummary',
    props: {
        scorecard: {
            type: Object,
            default: () => {}
        },
    },
}
</script>

<style lang="scss" scoped>
.summary-label {
    color: #5a5a5a;
}

.player-label {
    text-decoration: underline;
}
</style>