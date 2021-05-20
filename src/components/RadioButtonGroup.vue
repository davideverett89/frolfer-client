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
                            v-for="(option, index) in options"
                            :key="index"
                            :value="`${option.id}`"
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
    props: {
        options: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        inputValue: {
            get() {
                return this.value;
            },
            set(newVal) {
                this.$emit('input', newVal);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>