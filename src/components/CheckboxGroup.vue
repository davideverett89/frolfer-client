<template>
    <v-container class="CheckboxGroup" fluid>
        <template v-if="options.length === 0">
            <h6>No options available.</h6>
        </template>
        <template v-else>
            <v-container class="d-flex flex-column justify-content-center align-items-center">
                <h2 class="my-5 checkbox-label">{{ label }}</h2>
                <v-checkbox
                    color="secondary"
                    v-for="(option, index) in options"
                    :key="index"
                    v-model="inputValue"
                    :value="option"
                >
                    <template slot="label">
                        <h3 class="mb-0">{{ option.user.first_name || option.user.username }} {{ option.user.last_name }}</h3>
                    </template>
                </v-checkbox>
            </v-container>
        </template>
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
    computed: {
        inputValue: {
            get() {
                return this.selected;
            },
            set(value) {
                this.selected = value;
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
.CheckboxGroup {
    display: block;
    overflow-y: auto;
    .checkbox-label {
        color: #5a5a5a;
    }
}

</style>