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
  <div class="mt-2">
    <div class="timer d-inline-flex">{{ timerMinutes }}:{{ timerSeconds }}</div>
    <v-btn @click="startPauseTimer" class="d-inline-flex ml-5">
      <v-icon>mdi-play</v-icon>
      <v-icon>mdi-pause</v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.timer {
  height: 36px;
  line-height: 36px;
}
</style>