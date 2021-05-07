<template>
  <div id="app">
    <v-app>
      <navbar
        appTitle="Frolfer App"
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
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('auth'); 

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
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
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
