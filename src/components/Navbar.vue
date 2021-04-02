<template>
    <div>
        <v-navigation-drawer
            v-model="sidebar"
            app
            temporary
            elevation="15"
        >
            <v-list>
                <v-list-item v-if="authed" to="/">
                    <v-list-item-action>
                        <v-icon>
                            fas fa-home
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Home
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="!authed" to="/login">
                    <v-list-item-action>
                        <v-icon>
                            fas fa-lock-open
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Login
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="!authed" to="/register">
                    <v-list-item-action>
                        <v-icon>
                            fas fa-user-plus
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Register
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    v-if="authed"
                    to="/logout"
                >
                    <v-list-item-action>
                        <v-icon>
                            fas fa-sign-out-alt
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            Logout
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
            elevation="15"
            flat
        >
            <span class="hidden-sm-and-up" @click="sidebar = !sidebar">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </span>
            <v-toolbar-title class="m-auto pb-0">
                <router-link to="/" tag="h2" style="cursor: pointer">
                    {{ appTitle }}
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only px-0">
                <v-btn
                    v-if="authed"
                    text
                    to="/"
                >
                    <v-icon left dark>
                        fas fa-home
                    </v-icon>
                    Home
                </v-btn>
                <v-btn
                    v-if="!authed"
                    text
                    to="/login"
                >
                    <v-icon left dark>
                        fas fa-lock-open
                    </v-icon>
                    Login
                </v-btn>
                <v-btn
                    v-if="!authed"
                    text
                    to="/register"
                >
                    <v-icon left dark>
                        fas fa-user-plus
                    </v-icon>
                    Register
                </v-btn>
                <v-btn
                    v-if="authed"
                    text
                    to="/logout"
                >
                    <v-icon left dark>
                        fas fa-sign-out-alt
                    </v-icon>
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        appTitle: {
            type: String,
            default: ''
        },
        authed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            sidebar: false
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
}
</style>