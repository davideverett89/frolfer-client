<template>
    <v-app-bar
        color="white"
        height="64"
        dense
        flat
        app
        shrink-on-scroll
    >
        <v-toolbar flat>
            <v-toolbar-title class="m-auto pb-0">
                <router-link to="/" tag="h2" style="cursor: pointer">
                    {{ appTitle }}
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    text
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.path"
                >
                    <v-icon left dark>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        appTitle: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            sidebar: false,
            menuItems: [
                {
                    title: 'Home',
                    path: '/',
                    icon: 'fas fa-home'
                },
                {
                    title: 'Login',
                    path: '/login',
                    icon: 'fas fa-lock-open'
                },
                {
                    title: 'Register',
                    path: '/register',
                    icon: 'fas fa-user-plus'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
h2 {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}
</style>