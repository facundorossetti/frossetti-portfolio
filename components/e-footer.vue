<template>
  <v-footer padless color="fr-green" class="d-flex flex-column py-10" app>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon
      >
        <v-icon size="32px" color="fr-white">{{ icon }}</v-icon>
      </v-btn>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "EFooter",
  data() {
    return {
      icons: [
        'mdi-github',
        'mdi-linkedin',
        'mdi-email',
      ],
    }
  },
}
</script>

