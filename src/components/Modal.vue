<template>
    <v-row justify="center">
        <v-dialog
            class="modal-main"
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                :block="blockButton"
                v-bind="attrs"
                v-on="on"
            >
                {{ buttonText }}
            </v-btn>
            </template>
            <v-card class="panel">
                <v-toolbar
                    dark
                    color="secondary"
                >
                    <v-btn
                        icon
                        dark
                        @click="toggle"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <slot name="modal-content"></slot>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        buttonText: {
            type: String,
            default: 'Press Me'
        },
        blockButton: {
            type: Boolean,
            default: false,
        }
    },
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
        toggle() {
            this.dialog = !this.dialog;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

.panel {
    background-color: $primaryColor !important;
}
</style>