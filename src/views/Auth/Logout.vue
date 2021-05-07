<template>
    <v-sheet
        rounded
        color="white"
        elevation="15"
        class="Logout text-left p-5 col-xl-6 col-lg-9 col-md-9 col-sm-12 col-12 m-auto text-center"
    >
        <h1 class="display-1">You have logged out.</h1>
    </v-sheet>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { LOGOUT} from '../../store/actions.type';

const { mapActions } = createNamespacedHelpers('auth');

export default {
    name: 'Logout',
    created() {
        this.logout();
    },
    methods: {
        ...mapActions({
            logout: LOGOUT
        })
    }
}
</script>

<style lang="scss" scoped>
.Logout {
    display: block;
}
</style>