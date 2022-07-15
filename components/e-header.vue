<template>
  <v-container class="d-flex justify-space-between align-center py-8">
    <div>Facundo Rossetti</div>
    <!-- <v-switch v-model="$vuetify.theme.dark"></v-switch> -->
    <nav>
      <a v-for="link in links" :key="link" class="link px-2 py-1" @click="goToSection(link)">{{link}}</a>
    </nav>
  </v-container>
</template>

<script>
export default {
  name: "EHeader",
  data() {
    return {
      links: [
        'about',
        'projects',
        'skills',
        'contact',
      ],
    }
  },
  methods: {
    goToSection(link) {
      const element = document.getElementById(link);
      element.scrollIntoView({block: "end", behavior: "smooth"});
    },
  },
}
</script>

<style lang="scss" scoped>
nav .link {
  color: var(--v-fr-white-base);
  text-transform: uppercase;
  margin: 0 8px;
  &:hover {
    color: $lightgreen;
  }
}
</style>
