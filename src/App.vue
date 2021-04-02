<template>
  <div id="app">
    <v-app>
      <navbar
        appTitle="Frolfer App"
        :authed="authed"
      />
      <v-main class="mt-5">
        <v-container fluid>
          <v-row no-gutters>
            <router-view></router-view>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { AuthenticationService } from './common/api.service';

import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      authed: false
    }
  },
  mounted() {
    this.checkAuthentication();
  },
  methods: {
    toggleAuthed() {
      this.authed = !this.authed
    },
    checkAuthentication() {
      this.authed = AuthenticationService.isAuthenticated()
    }
  },
  provide() {
    return {
      toggleAuthed: this.toggleAuthed,
    }
  },
}
</script>

<style lang="scss">
@import './styles/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primaryColor;
}
</style>
