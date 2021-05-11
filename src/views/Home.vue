<template>
    <v-col>
        <v-container>
            <v-row>
                <v-col>
                    <Modal
                        buttonText="Create Scorecard"
                        :blockButton="true"
                        class="my-3"
                    >
                        <template slot="modal-content">
                            <ScorecardForm />
                        </template>
                    </Modal>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    v-for="(card, index) in scorecards"
                    :key="index"
                >
                    <v-card>
                        <h3>{{ card.start_time }}</h3>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-col>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { FETCH_SCORECARDS } from '../store/actions.type';

const { mapActions, mapGetters } = createNamespacedHelpers('home');

import Modal from '../components/Modal';
import ScorecardForm from '../components/ScorecardForm';

export default {
    name: 'Home',
    components: {
        Modal,
        ScorecardForm
    },
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
</style>