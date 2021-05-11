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
            <v-alert v-if="errors" type="error">
                {{ errors }}
            </v-alert>
            <v-divider></v-divider>
            <v-text-field
                v-model="username"
                :counter="50"
                :rules="usernameRules"
                label="Username:"
                required
            />
            <v-text-field
                type="password"
                v-model="password"
                label="Password:"
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

import { LOGIN } from '../../store/actions.type';

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
            if (this.errors) {
                console.log('Errors?:', this.errors);
            } else {
                this.$router.push('/')
            }
        }
    },
    computed: {
        ...mapGetters(['errors'])
    }
}
</script>

<style lang="scss" scoped>
.Login {
    display: block;
    h1 {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
}
</style>