<template>
  <v-container>
    <v-row id="skills" align="center">
      <v-col cols="12" md="4" align="center">
        <h1 class="text-left mb-6 e-heading"><span class="font-accent-green">F</span>ront-End</h1>
        <p class="text-left mb-6 e-text">I create successful responsive websites that are fast, easy to use, and built with best practices.</p>
        <p class="text-left mb-6 e-text">The main area of my expertise is front-end development, Vue.js, Nuxt.js, CSS, building small and medium web apps and coding interactive layouts.</p>
        <p class="text-left e-text">Visit my linkedin profile for more details or just contact me.</p>
      </v-col>
      <v-col cols="12" md="8" align="center">
        <e-skill-bar color="yellowbg" percent="99%" logo="javascript" class="mb-8" />
        <e-skill-bar color="bluebg" percent="75%" logo="typescript" class="mb-8" />
        <e-skill-bar color="greenbg" percent="99%" logo="vuejs" class="mb-8" />
        <e-skill-bar color="greenbg" percent="92%" logo="nuxt3" class="mb-8" />
        <e-skill-bar color="bluebg" percent="99%" logo="css3" class="mb-8" />
        <e-skill-bar color="redbg" percent="92%" logo="html5" />
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

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .skillsbar-col {
    margin-top: 60px;
  }
}
</style>
