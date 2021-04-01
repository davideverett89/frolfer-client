<template>
    <div class="Login text-left">
        <h1>Login</h1>
        <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input
                    id="username"
                    class="form-control"
                    type="text"
                    v-model="username"
                />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input
                    id="password"
                    class="form-control"
                    type="text"
                    v-model="password"
                />
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
}
</script>

<style lang="scss" scoped>
.Login {
    display: block;
}
</style>