<template>
  <v-container id="e-top-navigation" class="d-flex justify-space-between align-center">
    <div class="logo-container d-flex align-center justify-center">
      <img src="@/static/logo-transparent-bg.png" alt="logo">
    </div>
    <div class="mobile-menu d-flex align-center justify-end" :class="[{ animate: menuIsOpen }]">
      <transition name="fade">
        <div v-if="menuIsOpen" class="d-flex no-wrap">
          <NuxtLink v-for="link in links" :key="link.name" :to="`/${link.route}`" class="link px-2" >
            <span class="link-icon mdi font-white" :class="[{ active: link.active }, link.icon]" @click="goTo(link)"></span>
          </NuxtLink>
        </div>
      </transition>
      <span class="mdi link-icon" :class="menuIsOpen ? 'mdi-close' : 'mdi-menu'" @click="menuIsOpen = !menuIsOpen"></span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ETopNavigation",
  data() {
    return {
      links: [
        {name: 'about', route: '', icon: 'mdi-home', active: false},
        {name: 'projects', route: 'projects', icon: 'mdi-briefcase', active: false},
        {name: 'skills', route: 'skills', icon: 'mdi-head-lightbulb-outline', active: false},
        {name: 'contact', route: 'contact', icon: 'mdi-card-account-mail', active: false}
      ],
      menuIsOpen: false,
    }
  },
  beforeMount() {
    this.links.forEach((link) => {
      if (link.name === this.$route.name) {
        link.active = true;
      } else if (link.name === 'about' && this.$route.name === 'index') {
        link.active = true;
      };
    });
  },
  methods: {
    goTo(link) {
      this.links.forEach(link => {
        link.active = false;
      });
      link.active = true;
      this.menuIsOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>
#e-top-navigation {
  height: 70px;
}
.logo-container {
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
.fade-enter-active {
  transition: all .6s ease;
}
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateX(60px);
  opacity: 0;
}
.mobile-menu {
  background: transparent;
  gap: 8px;
  border-radius: 32px;
  padding-right: 12px;
  width: 50px;
  transition: width .4s, background 1s;
  &.animate {
    width: 240px;
    background: rgba(49, 175, 180, 0.6);
  }
}
.link-icon {
  font-size: 30px;
  transition: 1s;
  &.active {
    color: $green !important;
  }
}
</style>
