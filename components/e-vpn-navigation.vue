<template>
  <div class="navigation px-1">
    <ul>
      <li class="list">
        <div class="icon-container">
          <i :class="buttonActive ? 'mdi mdi-signal-cellular-2 font-lightgreen' : 'mdi mdi-signal-cellular-outline'"></i>
        </div>
      </li>
      <li class="list">
        <div :class="[{active: buttonActive} ,'middleButton']">
          <i class="mdi mdi-chevron-double-up swipe font-lightgray"></i>
          <div :class="[{active: buttonActive} ,'innerBtn']" @click="buttonActive = !buttonActive">
            <div class="testigo mb-5"></div>
            <i class="mdi mdi-power"></i>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <i class="mdi mdi-account"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EVpnNavigation",
  data() {
    return {
      buttonActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 10;
  position: absolute;
  bottom: 20px;
  $bg: $dark-blue;
  $font: $white;
  $cellphoneBg: #e8e8eb;
  height: 250px;
  width: 100%;
  background: $bg;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 30px;
  border-top-left-radius: 0;
  border-top-right-radius: 50%;
  box-shadow: 0 0 4px 1px $bg;
  opacity: 0.8;
  &::before {
    content: "";
    position: absolute;
    background: radial-gradient(circle 167px at top right, #0000 98%, $bg);
    width: 110%;
    height: 110%;
    top: -100%;
    right: 0;
    bottom: 0;
    left: -52%;
  }
  ul {
    display: flex;
    width: 100%;
    padding-left: 0;
    li {
      position: relative;
      list-style: none;
      width: 100%;
      height: 60px;
      z-index: 1;
      .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
      &.icon-container .mdi:hover {
        color: $cellphoneBg;
      }
    }
  }
  .mdi {
    cursor: pointer;
    transition: .5s;
    color: $font;
    font-size: 22px;
    &:hover {
      color: $cellphoneBg;
    }
  }
  .middleButton {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e16162;
    width: 70%;
    height: 220%;
    top: -150%;
    border-radius: 40px;
    box-shadow: inset 0px 0px 2px 3px rgba(211, 211, 211, 0.39), 0px 0px 5px 4px #16283da6;
    transition: .5s;
    .swipe {
      position: absolute;
      top: 8%;
      bottom: 5%;
      left: 32%;
    }
    &.active {
      background: $lightgreen2;
    }
    .innerBtn {
      cursor: pointer;
      position: absolute;
      width: 100%;
      height: 60%;
      bottom: 0;
      right: 0;
      background: $bg;
      border-radius: 40px;
      transition: 1s;
      box-shadow: inset 0px 0px 2px 3px rgba(211, 211, 211, 0.514);
      .mdi {
        color: $font;
      }
      &.active {
        transform: translateY(-67%);
        .testigo {
          background: $lightgreen2;
        }
        .mdi {
          color: $lightgreen2;
        }
      }
      .testigo {
        transition: 1s;
        width: 10px;
        height: 3px;
        margin-top: 10px;
        background: $font;
        border-radius: 30%;
      }
    }
  }
}

</style>
