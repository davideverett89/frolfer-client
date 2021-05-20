<template>
    <v-container fluid>
        <v-row>
            <v-col></v-col>
            <v-col>
                <template v-if="options.length === 0">
                    <h6>No options available.</h6>
                </template>
                <template v-else>
                    <v-radio-group v-model="inputValue">
                        <template slot="label">
                            <h6>{{ label }}</h6>
                        </template>
                        <v-radio
                            color="secondary"
                            v-for="(option, index) in options"
                            :key="index"
                            :value="option"
                        >
                            <template slot="label">
                                {{ option.name }}
                            </template>
                        </v-radio>
                    </v-radio-group>
                </template>
            </v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'RadioButtonGroup',
    data() {
        return {
            selected: {}
        }
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        inputValue: {
            get() {
                return this.selected;
            },
            set(newVal) {
                this.selected = newVal;
            }
        }
    },
    watch: {
        selected() {
            this.$emit('change', this.selected);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>