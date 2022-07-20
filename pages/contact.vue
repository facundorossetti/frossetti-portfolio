<template>
  <v-container>
    <v-row id="contact" align="center">
      <v-col cols="12" align="center">
        <h1 class="mb-10 e-heading">Get In Touch</h1>
        <p class="mb-10 mw-600 e-text">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <button class="hello-button" @click="sendEmail">Say Hello!</button>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.xsOnly" cols="12" align="center">
        <div class="d-flex align-center justify-center mb-14">
          <span
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4 font-white mdi e-heading"
            :class="icon.name"
            @click="goToSocial(icon)"
          >
          </span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ProjectsPage',
  transition: 'transition',
  data() {
    return {
      icons: [
        { name:'mdi-github', url: 'https://github.com/facundorossetti' },
        { name:'mdi-linkedin', url: 'https://www.linkedin.com/in/facundo-rossetti-83a8a6b5' },
        { name:'mdi-email', url: 'mailto:facundorossetti@outlook.com'}
      ],
    }
  },
  methods: {
    goToSocial(icon) {
      window.open(icon.url, '_blank');
    },
    sendEmail() {
      window.open('mailto:facundorossetti@outlook.com');
    }
  }
}
</script>

<style lang="scss">
.hello-button {
  font-family: "BallingerMono-Medium";
  word-spacing: -0.250rem;
  color: $white07;
  border: 2px solid $accent-green;
  padding: 12px 16px;
  border-radius: 8px;
  &:hover {
    color: $white-off-200;
  }
}
</style>
