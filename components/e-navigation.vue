<template>
  <v-container id="main-navigation">
    <nav class="d-flex flex-column align-center justify-space-around fill-height">
      <div class="logo-container d-flex align-center justify-center">
        <img src="@/static/logo-transparent-bg.png" alt="logo">
      </div>
      <div class="d-flex flex-column align-center">
        <NuxtLink v-for="link in links" :key="link.name" :to="`/${link.route}`" class="link px-2 py-1" >{{ link.name }}</NuxtLink>
      </div>
      <div class="d-flex flex-column align-center">
        <span
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4 my-2 font-white mdi icon"
          :class="icon.name"
          @click="goToSocial(icon)"
        >
        </span>
      </div>
    </nav>
  </v-container>
</template>

<script>
export default {
  name: "ENavigation",
  data() {
    return {
      links: [
        {name: 'about', route: ''},
        {name: 'projects', route: 'projects'},
        {name: 'skills', route: 'skills'},
        {name: 'contact', route: 'contact'}
      ],
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
    }
  }
}
</script>

<style lang="scss" scoped>
nav .link {
  color: var(--v-fr-white-base);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 20px !important;
  padding-top: 30px !important;
  transition: .3s;
  &:hover {
    color: $accent-green;
  }
  &.nuxt-link-exact-active, &:hover {
    color: $accent-green;
  }
}
.icon {
  cursor: pointer;
  color: $white-off-200 !important;
  font-size: 2rem;
  transition: .3s;
  &:hover {
    color: $accent-green !important;
  }
}
.logo-container {
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
</style>
