<template>
    <v-container>
        <v-row>
            <v-col></v-col>
            <v-col>
                <template v-if="options.length === 0">
                    <h6>No options available.</h6>
                </template>
                <template v-else>
                    <h6>{{ label }}</h6>
                    <v-checkbox
                        v-for="(option, index) in options"
                        :key="index"
                        v-model="selected"
                        :label="option.user.first_name || option.user.username"
                        :value="option"
                    ></v-checkbox>
                </template>
            </v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'CheckboxGroup',
    data() {
        return {
            selected: []
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
    watch: {
        selected() {
            this.$emit('change', this.selected);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>