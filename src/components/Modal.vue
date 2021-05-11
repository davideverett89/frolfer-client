<template>
    <v-row justify="center">
        <v-dialog
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
            <v-card>
                <v-toolbar
                    dark
                    color="info"
                >
                    <v-btn
                        icon
                        dark
                        @click="dialog = false"
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
}
</script>

<style lang="scss" scoped>
</style>