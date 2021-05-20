<template>
<v-container class="RadioButtonGroup d-flex flex-column justify-content-center align-items-center" fluid>
    <template v-if="options.length === 0">
        <h6>No options available.</h6>
    </template>
    <template v-else>
        <h2 class="my-5 radio-label">{{ label }}</h2>
        <v-radio-group
            v-model="inputValue"
            mandatory
        >
            <v-radio
                color="light"
                v-for="(option, index) in options"
                :key="index"
                :value="option"
            >
                <template slot="label">
                    <h3 class="mb-0">{{ option.name }}</h3>
                </template>
            </v-radio>
        </v-radio-group>
    </template>
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
.RadioButtonGroup {
    display: block;
    overflow-y: auto;
    .radio-label {
        color: #5a5a5a;
    }
}
</style>