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
  <div>
    {{seconds}} s.
  </div>
  <div class="clearfix">
    <StartButton @start="startTimer" class="left" />
    <PauseButton @pause="pauseTimer" class="left marginLeft" />
    <ResetButton @reset="resetTimer" class="left marginLeft" />
  </div>
</template>

<style scoped>
.left {
  float: left;
}

.marginLeft {
  margin-left: 1rem;
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