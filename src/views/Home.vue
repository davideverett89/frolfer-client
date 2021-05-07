<template>
  <div class="Home col-12 mx-auto mt-5">
      <h1 class="display-4">Home</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { FETCH_SCORECARDS } from '../store/actions.type';

const { mapActions, mapGetters } = createNamespacedHelpers('home');

export default {
    name: 'Home',
    mounted() {
        this.fetchScorecards();
    },
    methods: {
        ...mapActions({
            fetchScorecards: FETCH_SCORECARDS
        }),
    },
    computed: {
        ...mapGetters(['scorecards'])
    }
}
</script>

<style>
.Home {
    display: block;
}
</style>