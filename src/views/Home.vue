<template>
    <v-col>
        <v-container class="Home">
            <v-row no-gutters>
                <v-col></v-col>
                <v-col align-self="center">
                    <Modal
                        ref="modal"
                        buttonText="Create Scorecard"
                        :blockButton="true"
                        class="my-3"
                    >
                        <template slot="modal-content">
                            <ScorecardForm @start="handleStartGame" />
                        </template>
                    </Modal>
                </v-col>
                <v-col></v-col>
            </v-row>
            <v-row no-gutters>
                <v-col></v-col>
                <v-col
                    v-for="(card, index) in scorecards"
                    :key="index"
                >
                    <v-card>
                        <h3>{{ card.start_time }}</h3>
                    </v-card>
                </v-col>
                <v-col></v-col>
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
        handleStartGame() {
            this.$refs.modal.toggle();
            this.$router.push('/dashboard');
        }
    },
    computed: {
        ...mapGetters(['scorecards'])
    }
}
</script>

<style lang="scss" scoped>
.Home {
    display: block;
    min-height: 100vh;
}
</style>