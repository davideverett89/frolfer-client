<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
    name: 'DataTable',
    props: {
        dynamicHeaders: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>