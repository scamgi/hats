<script setup lang="ts">
import SessionPlanner from "../components/SessionPlanner.vue";
import SessionDisplay from "../components/SessionDisplay.vue";
</script>

<script lang="ts">
export default {
  name: "MakeSession",
  data() {
    return {
      session: [{}]
    }
  },
  created() {
    this.session = [
      {
        color: "blue",
        name: "Blue hat",
        minutes: 10
      },
      {
        color: "#0f0",
        name: "Green hat",
        minutes: 15
      }
    ]
  }
}
</script>

<template>
  <SessionPlanner />
  <SessionDisplay :session="session" />
</template>
