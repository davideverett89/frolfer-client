<template>
    <div>
        <v-navigation-drawer
            v-model="sidebar"
            app
            temporary
            elevation="15"
        >
            <v-list>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.path">
                    <v-list-item-action>
                        <v-icon>
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.title }}
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
    </div>
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