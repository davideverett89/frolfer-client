<template>
    <v-sheet
        rounded
        color="white"
        elevation="15"
        class="Login text-left p-5 col-xl-6 col-lg-9 col-md-9 col-sm-12 col-12 m-auto"
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
                :counter="10"
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
                v => (v && v.length <= 10) || 'Username must be less than 10 characters',
            ],
            password: '',
        }
    },
    methods: {
        login: (e) => {
            e.preventDefault();
            const credentials = {
                username: this.username,
                password: this.password
            };
            AuthenticationService.login(credentials)
                .then(respsonse => {
                    console.log('Login response:', respsonse);
                    this.$route.push('/');
                })
                .catch(error => {
                    throw new Error(`The following error occurred from the component while loggin in: ${error}`)
                });
            console.log('You have logged in!');
        }
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