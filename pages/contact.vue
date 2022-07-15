<template>
  <v-container>
    <v-row id="contact" align="center">
      <v-col cols="12" align="center">
        <h1 class="mb-10 e-heading">Get In Touch</h1>
        <p class="mb-10 mw-600 e-text">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <button class="hello-button">Say Hello!</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ProjectsPage',
  transition: 'transition',
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
    color: $white;
  }
}
</style>
