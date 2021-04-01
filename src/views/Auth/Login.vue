<template>
    <div class="Login text-left col-6 mx-auto mt-5">
        <h1 class="display-3 my-5">Login</h1>
        <v-form
            ref=form
            v-model="valid"
            lazy-validation
        >
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
    name: 'Login',
    data() {
        return {
            valid: true,
            username: '',
            usernameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            password: '',
        }
    },
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