<script lang="ts">
import StartButton from "./StartButton.vue";
import PauseButton from "./PauseButton.vue";
import ResetButton from "./ResetButton.vue";
export default {
    name: "Timer",
    data() {
        return {
            seconds: 0,
            interval: null
        };
    },
    methods: {
      startTimer() {
        this.interval = setInterval(() => this.seconds++, 1000);
      },
      pauseTimer() {
        clearInterval(this.interval);
      },
      resetTimer() {
        this.seconds = 0;
      }
    },
    // created() {
    //     this.interval = setInterval(() => this.seconds++, 1000);
    // },
    components: { StartButton, PauseButton, ResetButton }
}
</script>

<template>
  <div class="clearfix">
    <div class="left timer">
      {{seconds}} s.
    </div>
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
  width: 60px;
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
* html .clearfix             { zoom: 1; } /* IE6 */
*:first-child+html .clearfix { zoom: 1; } /* IE7 */
</style>