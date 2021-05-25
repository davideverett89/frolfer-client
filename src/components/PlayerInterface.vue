<template>
    <v-row>
        <v-col class="text-left">
            <h2>Player {{ index + 1 }}: {{ player.user.first_name.toUpperCase() || player.user.username.toUpperCase() }} {{ player.user.last_name }}</h2>
            <div class="d-flex justify-content-start align-items-center">
                <p>({{ currentRound.score }})</p>
            </div>
        </v-col>
        <v-col>
            <div class="d-flex justify-content-center align-items-center">
                <v-btn
                    @click="() => handleClick('decrease')"
                    class="mx-2"
                >
                    -
                </v-btn>
                <h5 class="mb-0">{{ roundHole.strokes }}</h5>
                <v-btn
                    @click="() => handleClick('increase')"
                    class="mx-2"
                >
                    +
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PlayerInterface',
    data() {
        return {
            roundHole: {
                round_id: 0,
                hole_id: 0,
                strokes: 0
            }
        }
    },
    props: {
        player: {
            type: Object,
            default: () => ({})
        },
        index: {
            type: Number,
            default: 0
        },
        currentHole: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        handleClick(command) {
            if (this.roundHole.strokes === 0) {
                this.initializeScore();
            } else {
                if (command === 'increase') {
                    this.roundHole.strokes++
                } else if (command === 'decrease') {
                    this.roundHole.strokes--
                }
            }
        },
        initializeScore() {
            this.roundHole.strokes = this.currentHole.pins.find(x => x.active).par;
        }
    },
    computed: {
        ...mapGetters({
            rounds: 'round/rounds',
        }),
        currentRound() {
            return this.rounds.find(x => x.player_id === this.player.id)
        }
    }
}
</script>

<style>
.PlayerInterface {
    display: block;
}
</style>