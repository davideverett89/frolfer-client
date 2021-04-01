<template>
    <v-sheet
        rounded
        color="white"
        elevation="15"
        class="Login text-left col-12 mx-auto mt-5"
    >
        <v-card-title>
            <h1 class="my-5 mr-0">Login</h1>
        </v-card-title>
        <v-card-text>
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
        </v-card-text>
    </v-sheet>
</template>

<script>
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