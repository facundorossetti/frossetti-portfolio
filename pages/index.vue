<template>
  <v-container>
    <v-row id="about" align="center">
      <v-col align="center" md="6" cols="12">
        <h1 class="mb-8 e-heading">I am <span class="font-accent-green">F</span>acundo <span class="font-accent-green">R</span>ossetti, <br> <span class="font-accent-green">F</span>ront-End Develope<span class="font-accent-green">R</span>.</h1>
        <p class="mb-10 e-text">A developer with seriuous passion for UI effects, creating intuitive and dynamic user experiences.</p>
        <nuxt-link class="navigation-button" to="/projects">GO TO PROJECTS</nuxt-link>
      </v-col>
      <v-col align="center" md="6" cols="12">
        <img class="facu-image" src="@/static/facu.jpg">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'IndexPage',
  transition: 'transition',
}
</script>

<style lang="scss" scoped>
.facu-image {
  height: 350px;
  width: 350px;
  clip-path: inset(5px round 150px 30px 150px 30px);
}
.navigation-button {
  font-family: "BallingerMono-Medium";
  word-spacing: -0.250rem;
  color: $white07;
  background-color: $accent-green;
  padding: 12px 16px;
  border-radius: 8px;
  &:hover {
    color: $white;
  }
}
@media screen and (max-width: 960px) {
  .facu-image {
    height: 280px;
    width: 280px;
    clip-path: inset(5px round 100px 30px 100px 30px);
  }
  .e-heading {
    font-size: 1.750rem;
    line-height: 1.3;
    word-spacing: -0.375rem;
  }
}
</style>
