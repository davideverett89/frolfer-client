<template>
    <v-stepper class="ScorecardForm" v-model="e1">
        <v-stepper-header>
            <v-stepper-step
                color="secondary"
                :complete="e1 > 1"
                step="1"
            >
                Select Course
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                color="secondary"
                :complete="e1 > 2"
                step="2"
            >
                Select Players
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                color="secondary"
                step="3"
            >
                Verify
            </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content class="panel" step="1">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card
                                class="mb-12"
                                color="grey lighten-2"
                                min-height="50vh"
                            >
                                <RadioButtonGroup 
                                    :options="courses"
                                    @change="handleRadioChange"
                                    label="Select the course you will be playing at."
                                />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn
                    class="mx-2"
                    color="secondary"
                    @click="e1 = 2"
                >
                    Continue
                </v-btn>

            </v-stepper-content>

            <v-stepper-content class="panel" step="2">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card
                                class="d-flex justify-content-between align-items-center mb-12"
                                color="grey lighten-2"
                                min-height="50vh"
                            >
                                <CheckboxGroup 
                                    :options="players"
                                    label="Select players participating in the game."
                                    @change="handleCheckboxChange"
                                />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn
                    class="mx-2"
                    @click="e1 = 1"
                    text
                >
                    Go Back
                </v-btn>
                <v-btn
                    class="mx-2"
                    color="secondary"
                    @click="e1 = 3"
                >
                    Continue
                </v-btn>
            </v-stepper-content>

            <v-stepper-content class="panel" step="3">
                <v-card
                    class="d-flex justify-content-between align-items-center mb-12"
                    color="grey lighten-2"
                    min-height="50vh"
                >
                    <ScorecardSummary :data="{ selectedCourse, selectedPlayers }" />
                </v-card>

                <v-btn
                    class="mx-2"
                    @click="e1 = 2"
                    text
                >
                    Go Back
                </v-btn>
                <v-btn
                    class="mx-2"
                    color="secondary"
                    @click="handleComplete"
                >
                    Create Scorecard
                </v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
// import DateTime from 'luxon/src/datetime.js' < -- Might have to uninstall

import { mapActions, mapMutations, mapGetters } from 'vuex';

import { FETCH_COURSES, FETCH_PLAYERS, CREATE_SCORECARD } from '../store/actions.type';

import { SET_COURSE, RESET } from '../store/mutations.type';

import RadioButtonGroup from '../components/RadioButtonGroup';
import CheckboxGroup from '../components/CheckboxGroup';
import ScorecardSummary from '../components/ScorecardSummary';

export default {
    name: 'ScorecardForm',
    components: {
        RadioButtonGroup,
        CheckboxGroup,
        ScorecardSummary,
    },
    data() {
        return {
            e1: 1,
            selectedCourse: {},
            selectedPlayers: [],
            scorecard: {}
        }
    },
    created() {
        this.fetchCources();
        this.fetchPlayers();
    },
    destroyed() {
        this.resetCourses();
        this.resetPlayers();
    },
    methods: {
        async handleComplete() {
            this.scorecard.course_id = this.selectedCourse.id;
            this.scorecard.condition = '';
            await this.createScorecard({ score_card: this.scorecard, selectedPlayers: this.selectedPlayers });
            this.setCourse(this.selectedCourse);
            this.$emit('start');
        },
        handleCheckboxChange(selections) {
            this.selectedPlayers = selections;
        },
        handleRadioChange(selection) {
            this.selectedCourse = selection;
        },
        ...mapActions({
            fetchCources: `course/${FETCH_COURSES}`,
            fetchPlayers: `player/${FETCH_PLAYERS}`,
            createScorecard: `home/${CREATE_SCORECARD}`,
        }),
        ...mapMutations({ 
            setCourse: `course/${SET_COURSE}`,
            resetCourses: `course/${RESET}`,
            resetPlayers: `player/${RESET}`,
        })
    },
    computed: {
        ...mapGetters({
            courses: 'course/courses',
            players: 'player/players',
            newScorecard: 'home/scorecard'
        }),
    }
}
</script>

<style lang="scss" scoped>
.ScorecardForm {
    display: block;
    .panel {
        display: block;
        min-height: 50vh;
    }
}
</style>