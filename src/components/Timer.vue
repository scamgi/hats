<script lang="ts">
import StartButton from "./StartButton.vue";
import PauseButton from "./PauseButton.vue";
import ResetButton from "./ResetButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Timer",
  data() {
    return {
      count: 0,
      minutes: "00",
      seconds: "00",
      interval: -1,
    };
  },
  methods: {
    increment() {
      this.count++;
      let m = Math.floor(this.count / 60);
      let s = this.count % 60;
      this.minutes = m.toString().padStart(2, "0");
      this.seconds = s.toString().padStart(2, "0");
    },
    startTimer() {
      this.interval = setInterval(this.increment, 1000);
    },
    pauseTimer() {
      clearInterval(this.interval);
    },
    resetTimer() {
      this.count = 0;
      this.minutes = "00";
      this.seconds = "00";
    },
  },
  components: { StartButton, PauseButton, ResetButton },
});
</script>

<template>
  <div class="clearfix">
    <div class="left timer">{{ minutes }}:{{ seconds }}</div>
    <StartButton @start="startTimer" class="timerBtn left marginLeft" />
    <PauseButton @pause="pauseTimer" class="timerBtn left marginLeft" />
    <ResetButton @reset="resetTimer" class="timerBtn left marginLeft" />
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
