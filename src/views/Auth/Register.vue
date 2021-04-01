<template>
  <div class="Register text-left">
        <h1>Create your account</h1>
        <form class="my-2">
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input
                    id="firstName"
                    class="form-control"
                    type="text"
                    v-model="firstName"
                />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input
                    id="lastName"
                    class="form-control"
                    type="text"
                    v-model="lastName"
                />
            </div>
            <div class="form-group">
                <label for="email">Email: </label>
                <input
                    id="email"
                    class="form-control"
                    type="text"
                    v-model="email"
                />
            </div>
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
    name: 'Register',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
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