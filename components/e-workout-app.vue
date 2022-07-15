<template>
  <e-phone class="bg-white">
    <div class="phoneContent d-flex flex-column justify-start align-center pt-3">
      <div class="w-100 d-flex justify-space-between align-center px-3">
        <div>
          <p class="mb-0 e-sm-text gray-font">Mon, Feb 20, 2022</p>
          <h5 class="text-left font-dark-blue">Daily Activity</h5>
        </div>
        <div class="user-image"></div>
      </div>
      <div class="w-100 d-flex justify-space-between align-center px-3">
        <div v-for="box in dayBox" :key="box.number" class="day-box d-flex flex-column justify-center align-center" :class="{active: box.day === 'Fri'}">
          <p class="mb-0 e-sm-text">{{box.day}}</p>
          <h3 class="text-left">{{box.number}}</h3>
        </div>
      </div>
      <div class="w-100 d-flex flex-column justify-center align-start px-3">
        <div class="title-container d-flex justify-start align-center">
          <h5>Running</h5>
          <p class="mb-0 e-sm-text pl-2">7:30 AM - 9:00 AM</p>
        </div>
        <div class="running-box d-flex justify-space-between align-center px-4">
          <div class="text-left">
            <i class="mdi mdi-map-marker-outline font-lightgreen"></i>
            <h5>8.32</h5>
            <p class="e-sm-text font-dark-blue font-weight-bold">Kilometers</p>
          </div>
          <div class="text-left">
            <i class="mdi mdi-clock-time-nine-outline font-yellow"></i>
            <h5>1.30</h5>
            <p class="e-sm-text font-dark-blue font-weight-bold">Hours</p>
          </div>
          <div class="text-left">
            <i class="mdi mdi-speedometer font-blue"></i>
            <h5>5.25</h5>
            <p class="e-sm-text font-dark-blue font-weight-bold">Speed</p>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex flex-column justify-center align-start px-3">
        <div class="title-container gym d-flex justify-start align-center">
          <h5>Gym</h5>
          <p class="mb-0 e-sm-text pl-2">1:30 PM - 2:45 PM</p>
        </div>

        <div class="gym-box d-flex justify-space-between align-center pa-2">

          <div class="big-box d-flex flex-column justify-center align-center pa-2">
            <div>
              <i class="mdi mdi-cards-heart-outline font-red big-font"></i>
            </div>
            <div class="d-flex justify-center">
              <h2>88</h2>
              <p class="e-xs-text gray-font pl-1 pt-1">bpm</p>
            </div>
          </div>

          <div class="small-box-container d-flex flex-column justify-center">
            <div class="small-box d-flex justify-center align-center px-2">
              <div>
                <h5>450</h5>
                <p class="e-xs-text gray-font">Steps</p>
              </div>
              <div class="d-flex justify-center">
                <i class="mdi mdi-shoe-print font-green ml-3"></i>
              </div>
            </div>
            <div class="small-box d-flex justify-center align-center px-2">
              <div>
                <h5>325</h5>
                <p class="e-xs-text gray-font">Calories</p>
              </div>
              <div class="d-flex justify-center">
                <i class="mdi mdi-fire font-red ml-3"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <e-workout-navigation></e-workout-navigation>
  </e-phone>
</template>

<script>

export default {
  name: "EworkoutApp",
  data() {
    return {
      dayBox: [
        {
          day: 'Thu',
          number: 20,
        },
        {
          day: 'Fri',
          number: 21,
        },
        {
          day: 'Sat',
          number: 22,
        },
        {
          day: 'Sun',
          number: 23,
        },
        {
          day: 'Mon',
          number: 24,
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
p, h5, h5 {
  z-index: 10;
}
.bg-white {
  &::before {
    z-index: 1;
    content: "";
    background: url(@/static/woman-exercise.jpg) center;
    background-size: cover;
    border-radius: 30px;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
  }
}
.phoneContent {
  gap: 10px;
  height: 100%;
  width: 100%;
  color: $white;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .user-image {
    opacity: 0.85;
    z-index: 10;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $dark-blue;
    border: 2px solid $light-pink;
    &::before {
      content: "";
      position: absolute;
      background: url(@/static/model.png) center top;
      background-size: cover;
      border-radius: 50%;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
  }
  .day-box {
    opacity: 0.85;
    z-index: 10;
    cursor: pointer;
    background: $light-pink;
    width: 40px;
    height: 60px;
    border-radius: 10px;
    &.active {
      background: $dark-blue;
    }
  }
  .title-container {
    position: relative;
    z-index: 10;
    opacity: 0.85;
    background: $light-pink;
    border-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 5px 15px 0;
    &.gym {
      background: $light-pink;
    }
  }
  .running-box {
    opacity: 0.85;
    z-index: 10;
    height: 90px;
    width: 100%;
    color: $white;
    background: $light-pink;
    border-radius: 12px;
    border-top-left-radius: 0;
  }
  .gym-box {
    opacity: 0.85;
    z-index: 10;
    height: 100px;
    width: 100%;
    color: $white;
    background: $light-pink;
    border-radius: 20px;
    border-top-left-radius: 0;
    gap: 10px;
    .big-box {
      background: $dark-blue;
      height: 100%;
      width: 60%;
      border-radius: 12px;
    }
    .small-box-container {
      height: 100%;
      width: 40%;
      gap: 5px;
      .small-box {
        height: 100%;
        border-radius: 12px;
        background: $dark-blue;
      }
    }
  }
}
</style>

