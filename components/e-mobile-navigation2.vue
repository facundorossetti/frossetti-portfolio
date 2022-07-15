<template>
  <div class="navigation px-1">
    <ul>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-home"></span>
          <span class="text">Home</span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-magnify"></span>
          <span class="text">Search</span>
        </div>
      </li>
      <li class="list">
        <div class="middleButton">
          <span class="mdi mdi-plus"></span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-heart"></span>
          <span class="text">Home</span>
        </div>
      </li>
      <li class="list">
        <div class="icon-container">
          <span class="mdi mdi-account"></span>
          <span class="text">User</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EMobileNavigation2",
}
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  bottom: 0;
  $bg: #3c3f50;
  $font: $white-off-200;
  $cellphoneBg: $white-off-200;

  margin-bottom: 8px;
  height: 60px;
  width: 95%;
  background: $bg;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px; */
  border-radius: 25px;
  opacity: 0.6;
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
        .text {
          position: absolute;
          font-size: 0.75em;
          transition: .5s;
          color: $font;
          transform: translateY(12px);
          opacity: 1;
        }
        .mdi {
          transform: translateY(-10px);
        }
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
    width: 130%;
    height: 115%;
    margin-left: -15%;
    background: red;
    top: -50%;
    border-radius: 50%;
    border: 10px solid $bg;
    transition: .5s;
    .mdi {
      &:hover {
        color: $cellphoneBg;
      }
    }
  }
}

</style>
