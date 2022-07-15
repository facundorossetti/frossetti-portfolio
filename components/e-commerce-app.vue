<template>
  <e-phone class="bg-white">
    <div class="phoneContent d-flex flex-column justify-start align-center pt-3">
      <div class="w-100 d-flex justify-space-between align-center px-5">
        <i class="mdi mdi-menu large-icon"></i>
        <h3>H&M</h3>
        <i class="mdi mdi-dots-horizontal-circle-outline large-icon"></i>
      </div>
      <div class="w-100 d-flex justify-space-between align-center px-5">
        <h4>Collections</h4>
        <i class="mdi mdi-tune-variant large-icon"></i>
      </div>
      <div class="w-100 d-flex justify-space-around align-center px-5">
        <div v-for="collection in collections" :key="collection.name" class="pointer">
          <div class="collection-images green-shadow" :class="collection.name"></div>
          <span class="text-caption" :class="{active: collection.name === 'man'}">{{collection.name}}</span>
        </div>
      </div>
      <div class="model-container green-shadow pointer w-100 d-flex justify-space-between align-center">
        <div class="like">
          <i class="mdi mdi-cards-heart-outline font-white"></i>
        </div>
      </div>
      <div class="w-100 d-flex justify-space-between align-center px-10">
        <button class="button-container green-shadow">
          <i class="mdi mdi-chevron-left font-white"></i>
        </button>
        <div>
          <h4>T-Shirt</h4>
          <h4>$295</h4>
        </div>
        <button class="button-container green-shadow">
          <i class="mdi mdi-chevron-right font-white"></i>
        </button>
      </div>
    </div>
    <e-mobile-navigation></e-mobile-navigation>
  </e-phone>
</template>

<script>

export default {
  name: "ECommerceApp",
  data() {
    return {
      collections: [
        {
          name: "man"
        },
        {
          name: "woman"
        },
        {
          name: "kids"
        },
        {
          name: "babys"
        }
      ],
      mainImage: 'man'
    }
  },
}
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.green-shadow {
  box-shadow: 0px 0px 10px 5px rgba(171,209,198,0.4);
}
.bg-white {
  &::before {
    z-index: 1;
    content: "";
    background: url(@/static/fashion.jpg) center top;
    background-size: cover;
    border-radius: 30px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
}
.mdi {
  cursor: pointer;
  color: #243643;
  font-size: 14px;
  &.color-hover:hover {
    color: $white-off-200;
  }
  &.large-icon {
    font-size: 20px;
  }
}
.phoneContent {
  $bg: #5498bb;

  opacity: 0.75;
  z-index: 10;
  gap: 10px;
  height: 100%;
  width: 100%;
  color: #243643;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .model-container {
    position: relative;
    border-radius: 50%;
    border: 2px solid lightgray;
    background: url(@/static/model.png) center center no-repeat;
    background-size: contain;
    background-color: $bg;
    width: 60%;
    height: 35%;
    .like {
      position: absolute;
      right: -12.5px;
      border-radius: 50%;
      border: 2px solid lightgray;
      width: 25px;
      height: 25px;
      background: $bg;
      padding-bottom: 1px !important;
      padding-left: 1px !important;
    }
  }
  .button-container {
    border-radius: 50%;
    border: 1px solid lightgray;
    width: 30px;
    height: 30px;
    background: $bg;
    padding-top: 2px !important;
  }
  .collection-images {
    &.man {
      background: url(@/static/model.png) center center no-repeat;
      background-size: contain;
      background-color: $bg;
    }
    &.woman {
      background: url(@/static/woman.png) center center no-repeat;
      background-size: contain;
      background-color: $bg;
    }
    &.kids {
      background: url(@/static/kid.png) center center no-repeat;
      background-size: contain;
      background-color: $bg;
    }
    &.babys {
      background: url(@/static/baby.png) center center no-repeat;
      background-size: contain;
      background-color: $bg;
    }
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid lightgray;
  }
  .text-caption.active {
    border-bottom: 1.5px solid $bg;
    padding-bottom: 1px;
  }
}
.w-100 {
  width: 100%;
}
</style>

