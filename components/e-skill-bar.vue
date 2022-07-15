<template>
  <div class="d-flex align-center justify-center">
    <div class="logo-container mr-3">
      <img :src="require('@/static/' + logo + '.png')" alt="nuxt-logo">
    </div>
    <div :class="[color, 'outer-bar']">
      <div class="inner-bar fill text-left pl-4" :style="`width: ${percent}`"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "yellowbg"
    },
    percent: {
      type: String,
      default: "0%"
    },
    logo: {
      type: String,
      default: "javascript"
    },
  }
}
</script>

<style lang="scss">
.logo-container {
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    transition: .5s;
  }
}
.outer-bar {
  position: relative;
  width: 60%;
  min-width: 250px;
  height: 30px;
  background: transparent;
  border-radius: 30px;

  .inner-bar {
    position: absolute;
    left: 0;
    top: 0;
    margin: 2px;
    height: 88%;
    border-radius: 30px;
    /* animation-name: fill;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards; */
  }
  &.yellowbg {
    border: 2px solid #f7df1e;
    background: transparent;
    .inner-bar {
      background: #f7df1e;
    }
  }
  &.greenbg {
    border: 2px solid #04a886;
    background: transparent;
    .inner-bar {
      background: #04a886;
    }
  }
  &.bluebg {
    border: 2px solid #007acc;
    background: transparent;
    .inner-bar {
      background: #007acc;
    }
  }
  &.redbg {
    border: 2px solid #e44d26;
    background: transparent;
    .inner-bar {
      background: #e44d26;
    }
  }
}
@media screen and (max-width: 960px) {
  .outer-bar {
    width: 100%;
  }
}
</style>
