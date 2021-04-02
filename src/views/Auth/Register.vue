<template>
    <v-sheet
        rounded
        color="white"
        elevation="15"
        class="Register text-left p-5 col-xl-6 col-lg-9 col-md-9 col-sm-12 col-12 m-auto"
    >
        <v-form
            ref=form
            v-model="valid"
            lazy-validation
        >
            <h1 class="my-5 mr-0">
                Register
            </h1>
            <v-divider></v-divider>
            <v-text-field
                v-model="firstName"
                :counter="50"
                label="First Name:"
                required
            />
            <v-text-field
                v-model="lastName"
                :counter="50"
                label="Last Name:"
                required
            />
            <v-text-field
                v-model="email"
                :counter="50"
                label="Email:"
                required
            />
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
                @click="register"
            >
                Create Account
            </v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
import { AuthenticationService } from '../../common/api.service';

export default {
    name: 'Register',
    data() {
        return {
            valid: true,
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            usernameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            password: ''
        }
    },
    methods: {
        async register(e) {
            e.preventDefault();
            const credentials = {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                username: this.username,
                password: this.password
            };
            try {
                const { data } = await AuthenticationService.register(credentials);
                console.log(data);
                this.toggleAuthed();
            } catch (error) {
                throw new Error(`The following error occurred from the component when registering: ${error}`)
            }
            // AuthenticationService.register(credentials)
            //     .then(response => {
            //         console.log('Authentication response', response);
            //     })
            //     .catch(error => {
            //         throw new Error(`The following error occurred from the component when registering: ${error}`)
            //     });
            this.$router.push('/');
        }
    },
    inject: ['toggleAuthed']
}
</script>

<style>
.Register {
    display: block;
}
</style>