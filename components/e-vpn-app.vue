<template>
  <e-phone class="bg-white">
    <div class="phoneContent d-flex flex-column justify-start align-center pt-3 font-white">
      <div class="w-100 d-flex justify-space-between align-center px-3">
        <i class="settings mdi mdi-cog"></i>
        <div class="premium d-flex align-center">
          <i class="mdi mdi-crown font-yellow small-icon"></i>
          <p class="e-sm-text pl-1">Go Premium</p>
        </div>
      </div>
      <div class="w-100 d-flex justify-space-between align-center">
        <div v-for="country in countries" :key="country.flag" class="country" :class="{active: country.name === 'Australia'}">
          <img :src="require('@/static/' + country.flag + '.png')" :alt="country.flag">
        </div>
      </div>
      <div class="w-100 d-flex flex-column justify-center align-center px-3 mt-10">
        <div class="status-text font-red">Not Connected</div>
        <div class="location-button mt-3 d-flex align-center px-2 py-1">
          <i class="mdi mdi-earth small-icon"></i>
          <p class="px-2">Location</p>
          <i class="mdi mdi-chevron-right small-icon"></i>
        </div>
      </div>
    </div>
    <e-vpn-navigation></e-vpn-navigation>
  </e-phone>
</template>

<script>

export default {
  name: "EVpnApp",
  data() {
    return {
      countries: [
        {
          name: 'United States',
          flag: 'us',
        },
        {
          name: 'United Kingdom',
          flag: 'uk',
        },
        {
          name: 'Canada',
          flag: 'ca',
        },
        {
          name: 'Australia',
          flag: 'au',
        },
        {
          name: 'Italy',
          flag: 'it',
        },
        {
          name: 'Germany',
          flag: 'de',
        },
        {
          name: 'France',
          flag: 'fr',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.bg-white {
  &::before {
    z-index: 1;
    content: "";
    background: url(@/static/world-map.jpg) center top;
    background-size: cover;
    border-radius: 30px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.4;
    filter: grayscale(100%);
  }
}
.phoneContent {
  z-index: 10;
  gap: 30px;
  height: 100%;
  width: 100%;
  color: $white-off-200;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  opacity: 0.8;
  .premium {
    cursor: pointer;
    background: $dark-blue;
    border-radius: 20px;
    padding: 4px 8px;
  }
  .settings {
    cursor: pointer;
    background: $dark-blue;
    border-radius: 10px;
    border: 2px solid $dark-blue;
    padding: 0 5px;
  }
  .country {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    &.active {
      position: relative;
      border: 2px solid lightgray;
      width: 40px;
      height: 40px;
      &::after {
        content: "Australia";
        position: absolute;
        background: $dark-blue;
        bottom: -30px;
        right: -32%;
        font-size: 12px;
        font-weight: bold;
        border-radius: 8px;
        padding: 0 5px;
      }
    }
  }
  .status-text {
    background: $dark-blue;
    color: $white-off-200;
    font-size: 18px;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 8px;
  }
  .location-button {
    position: relative;
    background: $dark-blue;
    color: $white-off-200;
    font-size: 12px;
    border-radius: 8px;
    &::after {
      content: "";
      position: absolute;
      left: 45%;
      top: -60%;
      width: 8px;
      height: 20px;
      background: $dark-blue;
    }
  }
}
</style>

