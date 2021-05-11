<template>
        <v-container fluid>
            <template v-if="options.length === 0">
                <h6>No options available.</h6>
            </template>
            <template v-else>
                <v-radio-group v-model="radios">
                        <template slot="label">
                            <div>Your favourite <strong>search engine</strong></div>
                        </template>
                    <v-radio
                        v-for="(option, index) in options"
                        :key="index"
                        :value="option.name"
                    >
                        <template slot="label">
                            {{ option.name }}
                        </template>
                    </v-radio>
                </v-radio-group>
            </template>
        </v-container>
</template>

<script>
export default {
    name: 'RadioButtonGroup',
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            radios: ''
        }
    }
}
</script>

<style>
</style>