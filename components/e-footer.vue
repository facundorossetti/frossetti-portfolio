<template>
  <div class="e-footer d-flex align-center">
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-2 font-white"
      icon
      :ripple="false"
    >
      <v-icon class="icon" size="32px">{{ icon }}</v-icon>
    </v-btn>
  </div>
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

