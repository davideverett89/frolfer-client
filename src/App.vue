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
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
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

// #content {
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   height: calc(100vh - var(--ntp-one-google-bar-height));
//   min-width: fit-content;
//   position: relative;
//   z-index: 1;

// }
</style>
