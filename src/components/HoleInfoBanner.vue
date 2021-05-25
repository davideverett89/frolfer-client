<template>
<v-row dense>
  <v-col class="HoleInfoBanner text-white">
      <v-toolbar
        flat
      >
        <v-col>
            <v-toolbar-items class="px-0">
                <v-col class="d-flex justify-content-center align-items-center">
                    <h3 class="mb-0">{{ currentHole.label }}</h3>
                </v-col>
                <v-col>
                    <div v-if="activePin" class="navbar-item d-flex justify-content-center align-items-center">
                        <h3 class="mb-0">Distance</h3>
                        <p class="lead my-0 ml-4">{{ activePin.distance }}</p>
                    </div>
                </v-col>
                <v-col>
                    <div v-if="activePin" class="navbar-item d-flex justify-content-center align-items-center">
                        <h3 class="mb-0">Par</h3>
                        <p class="lead my-0 ml-4">{{ activePin.par }}</p>
                    </div>
                </v-col>
            </v-toolbar-items>
        </v-col>
      </v-toolbar>
  </v-col>
</v-row>
</template>

<script>
export default {
    name: 'HoleInfoBanner',
    props: {
        currentHole: {
            type: Object,
            default: () => {
                return {
                    label: '',
                    pins: []
                }
            }
        }
    },
    computed: {
        activePin() {
            return this.currentHole.pins.find(x => x.active);
        }
    }
}
</script>

<style>
.HoleInfoBanner {
    display: block;
}
</style>