<template>
  <div class="phone d-flex flex-column align-center">
    <div class="topContent d-flex justify-space-between">
      <div class="left-content d-flex justify-center pt-1 pl-1">
        <span class="text-caption">9:34</span>
      </div>
      <div class="topCamera d-flex">
        <div class="camera"></div>
      </div>
      <div class="right-content d-flex justify-center pt-1 pr-1">
        <i class="text-caption mdi mdi-signal-cellular-2"></i>
        <i class="text-caption mdi mdi-wifi"></i>
      </div>
    </div>
    <div class="content d-flex flex-column align-center justify-space-between">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EPhone',
}
</script>

<style lang="scss" scoped>
.phone {
  overflow:hidden;
  position: relative;
  height: 500px;
  width: 270px;
  border: 8px solid black;
  border-radius: 40px;
  background: $white;
  .topContent {
    color: black;
    height: 25px;
    width: 100%;
    .topCamera {
      margin-top: -5px;
      background-color: black;
      width: 40%;
      height: 100%;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      .camera {
        margin-top: 8px;
        margin-left: 12px;
        width: 6px;
        height: 6px;
        background-color: gray;
        border-radius: 50%;
      }
    }
    .left-content {
      gap: 5px;
      width: 30%;
      height: 100%;
      border-top-left-radius: 30px;
    }
    .right-content {
      gap: 5px;
      width: 30%;
      height: 100%;
      border-top-right-radius: 30px;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
}
</style>
