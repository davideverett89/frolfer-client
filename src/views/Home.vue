<template>
    <v-col>
        <v-container>
            <v-row>
                <v-col
                    v-for="(card, index) in scoreCards"
                    :key="index"
                >
                    <v-card>
                        <h3>{{ card.start_time }}</h3>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                    >
                        Create Score card
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-col>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { FETCH_SCORECARDS } from '../store/actions.type';

const { mapActions, mapGetters } = createNamespacedHelpers('home');

export default {
    name: 'Home',
    mounted() {
        this.fetchScorecards();
    },
    methods: {
        ...mapActions({
            fetchScorecards: FETCH_SCORECARDS
        }),
    },
    computed: {
        ...mapGetters(['scorecards'])
    }
}
</script>

<style>
.Home {
    display: block;
}
</style>