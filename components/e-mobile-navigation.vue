<template>
  <div class="navigation px-1">
    <ul>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-home"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-magnify"></span>
        </div>
      </li>
      <li class="list">
        <div class="middleButton">
          <span class="mdi mdi-cart"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-heart"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-account"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EMobileNavigation",
}
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 10;
  position: absolute;
  bottom: 0;
  $bg: #5498bb;
  $font: $white-off-200;
  $cellphoneBg: #d9dee4;

  height: 60px;
  width: 100%;
  background: $bg;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  opacity: 0.75;
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
        text-align: center;
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
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110%;
    height: 90%;
    margin-left: -5%;
    background: $bg;
    top: -43%;
    border-radius: 50%;
    border: 5px solid #e8e8eb;
    transition: .5s;
    .mdi {
      color: $font;
      &:hover {
        color: $cellphoneBg;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 47%;
      left: -21px;
      border-top-right-radius: 20px;
      box-shadow: 0px -10px 0 0 #e8e8eb;
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 47%;
      right: -21px;
      border-top-left-radius: 20px;
      box-shadow: 0px -10px 0 0 #e8e8eb;
    }
  }
}

</style>
