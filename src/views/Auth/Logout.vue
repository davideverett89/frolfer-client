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
import { AuthenticationService } from '../../common/api.service';

export default {
    name: 'Logout',
    created() {
        AuthenticationService.logout();
        this.toggleAuthed()
    },
    inject: ['toggleAuthed']
}
</script>

<style lang="scss" scoped>
.Logout {
    display: block;
}
</style>