<template>
    <v-sheet
        rounded
        color="white"
        elevation="15"
        class="Login text-left p-5 col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12 m-auto"
    >
        <v-form
            ref=form
            v-model="valid"
            lazy-validation
        >
            <h1 class="my-5 mr-0">
                Login
            </h1>
            <v-alert
                v-if="errors"
                type="error"
                dismissible
            >
                {{ errors }}
            </v-alert>
            <v-divider></v-divider>
            <v-text-field
                v-model="username"
                :counter="50"
                :rules="usernameRules"
                label="Username:"
                :error="alert"
                required
            />
            <v-text-field
                type="password"
                v-model="password"
                label="Password:"
                :error="alert"
                required
            />
            <v-btn
                color="primary"
                @click="onSubmit"
            >
                Submit
            </v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { LOGIN } from '../store/actions.type';

const { mapActions, mapGetters } = createNamespacedHelpers('auth');

export default {
    name: 'Login',
    data() {
        return {
            valid: true,
            username: '',
            usernameRules: [
                v => !!v || 'Username is required',
                v => (v && v.length <= 50) || 'Username must be less than 10 characters',
            ],
            password: '',
            alert: false
        }
    },
    methods: {
        ...mapActions({
            login: LOGIN
        }),
        async onSubmit(e) {
            e.preventDefault();
            const credentials = {
                username: this.username,
                password: this.password
            };
            await this.login(credentials);
            if (!this.errors) {
                this.$router.push('/')
            }
        },
    },
    computed: {
        ...mapGetters(['errors'])
    }
}
</script>

<style lang="scss" scoped>
</style>