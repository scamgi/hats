<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
import type { SessionItem } from "@/assets/hatsList";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  data() {
    return {
      session: [{}],
    }
  },
  methods: {
    updateSession(newSessionItem) {
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
  <!-- <SessionDisplay :session="session" /> -->
</template>
