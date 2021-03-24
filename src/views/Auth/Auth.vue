<template>
  <div class="Auth">
      <h1>Auth</h1>
      <div class="sub-nav">
          <router-link to="/auth/login">Login</router-link> |
          <router-link to="/auth/register">Register</router-link>
      </div>
      <router-view />
  </div>
</template>

<script>
export default {
    name: 'Auth',
}
</script>

<style lang="scss" scoped>
.Auth {
    text-align: center;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sub-nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    .sub-nav a.router-link-exact-active {
        color: #42b983;
    }
}
</style>