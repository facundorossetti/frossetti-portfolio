<template>
  <v-app id="portfolio">
    <e-navigation v-if="$vuetify.breakpoint.mdAndUp" />
    <e-top-navigation v-else />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
