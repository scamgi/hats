<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionReport from "../components/SessionReport.vue";
import type { SessionItem } from "@/assets/hatsList";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  components: { SessionPlanner, SessionReport },
  data() {
    return {
      session: [{}],
    }
  },
  methods: {
    updateSession(newSessionItem: SessionItem) {
      this.session = [...this.session, newSessionItem];
    }
  },
  created() {
    let s: SessionItem[] = [
      {
        hatId: 0,
        minutes: 10,
        prompt: 'Cosa sai?'
      },
      {
        hatId: 1,
        minutes: 5,
        prompt: ''
      },
      {
        hatId: 2,
        minutes: 5,
        prompt: 'Cosa senti riguardo questa soluzione?'
      },
    ];
    this.session = s;
  }
}
</script>

<template>
  <SessionPlanner :session="session" @update-session="updateSession" />
  <SessionReport :session="session" />
</template>
