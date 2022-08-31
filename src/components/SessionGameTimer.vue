<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";

export default defineComponent({
  name: "SessionGameTimer",
  props: ["minutes"],
  data() {
    return {
      count: 0,
      timerMinutes: "00",
      timerSeconds: "00",
      interval: -1,
      running: false,
    };
  },
  created() {
    this.set(this.minutes * 60);
  },
  methods: {
    set(seconds: number) {
      if (seconds >= 0) {
        this.count = seconds;
        let m = Math.floor(this.count / 60);
        let s = this.count % 60;
        this.timerMinutes = _.padStart(m.toString(), 2, "0");
        this.timerSeconds = _.padStart(s.toString(), 2, "0");
        // this.timerMinutes = m.toString().padStart(2, "0");
        // this.timerSeconds = s.toString().padStart(2, "0");

        return true;
      }
      return false;
    },
    decrement() {
      if (!this.set(this.count - 1)) this.pauseTimer();
    },
    startPauseTimer(e: Event) {
      e.preventDefault();

      if (!this.running) this.startTimer();
      else this.pauseTimer();
    },
    startTimer() {
      this.interval = setInterval(this.decrement, 1000);
      this.running = true;
    },
    pauseTimer() {
      clearInterval(this.interval);
      this.running = false;
    },
  },
});
</script>

<template>
  <div class="clearfix">
    <div class="left timer">{{ timerMinutes }}:{{ timerSeconds }}</div>
    <button class="left marginLeft timerBtn" @click="startPauseTimer">
      <i class="fa-solid fa-play"></i>
      <i class="fa-solid fa-pause"></i>
    </button>
  </div>
</template>

<style scoped>
.left {
  float: left;
}

.marginLeft {
  margin-left: 1rem;
}

.timer {
  background-color: #fff;
  border-radius: 50px;
  text-align: center;
  width: 70px;
  line-height: 38px;
  font-family: sans-serif;
}

/* .timer-content {
  margin: auto 0;
} */

.timerBtn {
  padding: 0;
  width: 38px;
  border-radius: 50%;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
* html .clearfix {
  zoom: 1;
} /* IE6 */
*:first-child + html .clearfix {
  zoom: 1;
} /* IE7 */
</style>
