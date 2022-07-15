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
          <span class="mdi mdi-poll active"></span>
        </div>
      </li>
      <li class="list">
        <div class="middleButton">
          <span class="mdi mdi-plus"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-file-document"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-cog"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EWorkoutNavigation",
}
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 10;
  position: absolute;
  bottom: 0;
  $bg: $lightpink;
  $font: $white-off-200;
  $cellphoneBg: #27405e;

  margin-bottom: 5px;
  height: 50px;
  width: 95%;
  background: $bg;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px; */
  border-radius: 25px;
  opacity: 0.8;
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
    &.active {
      color: $cellphoneBg;
    }
  }
  .middleButton {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130%;
    height: 105%;
    margin-left: -15%;
    background: $dark-blue;
    top: -20%;
    border-radius: 50%;
    border: 10px solid $bg;
    transition: .5s;
    .mdi {
      color: $font;
      &:hover {
        color: $bg;
      }
    }
  }
}

</style>
