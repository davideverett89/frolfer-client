<template>
    <v-row>
        <v-col cols="10" class="text-left p-4">
            <h2>{{ round.player.user.first_name.toUpperCase() || round.player.user.username.toUpperCase() }} {{ round.player.user.last_name }}</h2>
            <div class="d-flex justify-content-start align-items-center">
                <p>({{ round.total_strokes }})</p>
            </div>
        </v-col>
        <v-col cols="2" class="p-4">
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
import { mapGetters, mapMutations } from 'vuex';
import { SET_ROUND_HOLE } from '../store/mutations.type';

export default {
    name: 'PlayerInterface',
    data() {
        return {
            roundHole: {}
        }
    },
    props: {
        round: {
            type: Object,
            default: () => ({})
        },
        currentHole: {
            type: Object,
            default: () => ({})
        }
    },
    mounted() {
        this.handleRoundHole();
    },
    methods: {
        ...mapMutations({
            setRoundHole: `roundHole/${SET_ROUND_HOLE}`,
        }),
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
        },
        handleRoundHole() {
            if (this.currentRoundHole !== undefined) {
                this.roundHole = this.currentRoundHole;
            } else {
                this.roundHole = {
                    round_id: this.round.id,
                    hole_id: this.currentHole.id,
                    strokes: 0
                }
            }
        }
    },
    computed: {
        ...mapGetters({
            holeIndex: 'hole/holeIndex',
            roundHoles: 'roundHole/roundHoles'
        }),
        currentRoundHole() {
            return this.roundHoles[this.round.id][this.holeIndex];
        }
    },
    watch: {
        holeIndex(newVal, oldVal) {
            this.setRoundHole({ roundId: this.round.id, holeIndex: oldVal, payload: this.roundHole });
            this.handleRoundHole();
        }
    }
}
</script>

<style>
.PlayerInterface {
    display: block;
}
</style>
