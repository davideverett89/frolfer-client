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
import { ScoreCardService } from '../common/api.service';

export default {
    name: 'Home',
    data() {
        return {
            scoreCards: []
        }
    },
    methods: {
        async getData() {
            try {
                const { data } = ScoreCardService.getAll();
                this.scoreCards = data;
                console.log('Success');
            } catch (error) {
                throw new Error(`The following error occurred from the component when getting all score cards: ${error}`)
            }
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style>
.Home {
    display: block;
}
</style>