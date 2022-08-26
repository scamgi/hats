<script lang="ts">
import StartButton from "./StartButton.vue";
import PauseButton from "./PauseButton.vue";
import ResetButton from "./ResetButton.vue";
import { defineComponent } from "vue";
import _, { padStart } from 'lodash';

export default defineComponent({
    name: "Timer",
    data() {
        return {
            count: 0,
            minutes: "00",
            seconds: "00",
            interval: -1
        };
    },
    methods: {
      increment() {
        this.count++;
        let m = Math.floor(this.count / 60);
        let s = this.count % 60;
        this.minutes = _.padStart(m.toString(), 2, '0');
        this.seconds = _.padStart(s.toString(), 2, '0');
        // this.minutes = m.toString().padStart(2, "0");
        // this.seconds = s.toString().padStart(2, "0");
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
      }
    },
    components: { StartButton, PauseButton, ResetButton }
});
</script>

<template>
  <div class="clearfix">
    <div class="left timer">
      {{minutes}}:{{seconds}}
    </div>
    <StartButton @start="startTimer" class="timerBtn left marginLeft" />
    <PauseButton @pause="pauseTimer" class="timerBtn left marginLeft" />
    <ResetButton @reset="resetTimer" class="timerBtn left marginLeft" />
  </div>
</template>
