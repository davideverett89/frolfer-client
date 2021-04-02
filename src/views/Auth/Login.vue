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
                @click="login"
            >
                Submit
            </v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
import { AuthenticationService } from '../../common/api.service';

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
        async login(e) {
            e.preventDefault();
            const credentials = {
                username: this.username,
                password: this.password
            };
            try {
                await AuthenticationService.login(credentials);
                this.toggleAuthed();
                this.$router.push('/');
            } catch (error) {
                throw new Error(`The following error occurred from the component when logging in: ${error}`)
            }
        }
    },
    inject: ['toggleAuthed']
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