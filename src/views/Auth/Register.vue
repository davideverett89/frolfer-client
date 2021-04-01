<template>
  <div class="Register text-left col-6 mx-auto mt-">
        <h1 class="display-3 my-5">Register</h1>
        <v-form
            ref=form
            v-model="valid"
            lazy-validation
        >
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
                v-model="password"
                label="Password:"
                required
            />
        </v-form>
  </div>
</template>

<script>
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
}
</script>

<style>
.Register {
    display: block;
}
</style>