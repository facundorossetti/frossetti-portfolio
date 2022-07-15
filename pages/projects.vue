<template>
  <v-container>
    <v-row id="projects" align="center">
      <v-col align="center" md="5">
        <h2 class="mb-5">Mobile UI Prototypes</h2>
        <VueSlickCarousel v-bind="settings" class="carousel">
        <div class="app-container">
          <e-workout-app />
        </div>
        <div class="app-container">
          <e-commerce-app />
        </div>
        <div class="app-container">
          <e-vpn-app />
        </div>
        <template #customPaging>
          <div class="custom-dot"></div>
        </template>
        </VueSlickCarousel>
      </v-col>
      <v-col align="center" md="7" class="desktop-col">
        <h2 class="mb-14">Tech Zone E-commerce</h2>
        <a href="https://fr-tech-zone.herokuapp.com/" target="_blank">
          <img class="techzone-img" src="@/static/hero-responsive.png" alt="techzone-app">
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'ProjectsPage',
  components: { VueSlickCarousel },
  transition: 'transition',
  data() {
    return {
      settings: {
        "dots": true,
        "arrows": false,
        "speed": 500,
        "slidesToShow": 1,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .desktop-col {
    margin-top: 60px;
  }
}
</style>
